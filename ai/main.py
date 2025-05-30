from fastapi import FastAPI, HTTPException, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import PlainTextResponse
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from openai import OpenAI
from dotenv import load_dotenv
from soynlp.normalizer import repeat_normalize

import re
import emoji
import torch
import torch.nn.functional as F
import os
import json

# OpenAI API Key
load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = FastAPI()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CENSOR_FILE_PATH = os.path.join(BASE_DIR, "censor.json")

# CORS 허용 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
    allow_credentials=True,
)

# 감정 분석 모델 로드
model_name = "nlp04/korean_sentiment_analysis_kcelectra"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)
config = model.config
id2label = config.id2label
LABELS = [id2label[i] for i in sorted(id2label.keys())]

# 이모티콘 필터링
emojis = ''.join(emoji.EMOJI_DATA.keys())
pattern = re.compile(f'[^ .,?!/@$%~％·∼()\x00-\x7Fㄱ-ㅣ가-힣{emojis}]+')
url_pattern = re.compile(
    r'https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)')

def clean(x): 
    x = pattern.sub(' ', x)
    x = emoji.replace_emoji(x, replace='') #emoji 삭제
    x = url_pattern.sub('', x)
    x = x.strip()
    x = repeat_normalize(x, num_repeats=2)
    return x

def normalize_text(text: str) -> str:
    text = re.sub(r'[^0-9a-zA-Zㄱ-ㅎ가-힣\s]', '', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# 욕설 필터링용 단어 리스트 로드
with open(CENSOR_FILE_PATH, "r", encoding="utf-8") as file:
    censor_data = json.load(file)
    
BAD_WORDS = set()
EXCLUDE_PATTERNS = set()

for category, words_data in censor_data.items():
    words = words_data.get("words", [])
    excludes = words_data.get("excludes", [])
    BAD_WORDS.update(words)
    EXCLUDE_PATTERNS.update(excludes)

# 제외 패턴이 포함된 단어인지 확인
def is_excluded(word: str) -> bool:
    for exclude in EXCLUDE_PATTERNS:
        if exclude in word:
            return True
    return False

# 요청 및 데이터 모델
class TextRequest(BaseModel):
    text: str

class FilterRequest(BaseModel):
    text: str

class DebateRequest(BaseModel):
    topic: str
    content: str

# 감정 분석 함수
def analyze_sentiment(text: str):
    text = clean(text)
    inputs = tokenizer(
        text, return_tensors="pt",
        truncation=True, padding=True, max_length=512
    )
    with torch.no_grad():
        outputs = model(**inputs)
    logits = outputs.logits.squeeze(0)
    probs = torch.softmax(logits, dim=-1).tolist()
    emotion = LABELS[torch.argmax(logits, dim=-1).item()]
    return emotion, dict(zip(LABELS, probs))

# 욕설 검출 및 마스킹
def has_profanity(text: str) -> bool:
    cleaned_text = clean(text)
    normalized_text = normalize_text(cleaned_text)
    words = normalized_text.split()

    for word in words:
        # 제외 패턴에 포함된 단어는 필터링하지 않음
        if not is_excluded(word) and any(bad_word in word for bad_word in BAD_WORDS):
            return True
    return False

def mask_profanity(text: str) -> str:
    cleaned_text = clean(text)
    normalized_text = normalize_text(cleaned_text)
    words = normalized_text.split()
    masked_words = []

    for word in words:
        # 제외 패턴에 포함된 단어는 필터링하지 않음
        if not is_excluded(word) and any(bad_word in word for bad_word in BAD_WORDS):
            for bad_word in BAD_WORDS:
                if bad_word in word:
                    word = word.replace(bad_word, "*" * len(bad_word))
        masked_words.append(word)

    return " ".join(masked_words)

@app.post("/analyze")
async def analyze(request: TextRequest):
    if not request.text:
        raise HTTPException(status_code=400, detail="Text is required")
    emotion, probabilities = analyze_sentiment(request.text)
    return {"emotion": emotion, "probabilities": probabilities}

@app.options("/analyze")
async def analyze_options():
    return PlainTextResponse(None, status_code=204)

@app.post("/filter")
async def filter_profanity(request: FilterRequest):
    contains = has_profanity(request.text)
    filtered = mask_profanity(request.text)
    return {"contains_profanity": contains, "filtered_text": filtered}

@app.options("/filter")
async def filter_options():
    return PlainTextResponse(None, status_code=204)

@app.post("/analyze_debate")
async def analyze_debate(request: DebateRequest):
    topic = clean(request.topic)
    content = clean(request.content)

    if not request.content:
        raise HTTPException(status_code=400, detail="Debate content is required")
    if not request.topic:
        raise HTTPException(status_code=400, detail="Debate topic is required")

    prompt = (
        "당신은 토론을 요약하고 평가하는 AI입니다.\n"
        "다음은 토론 내용입니다. 이 토론을 발언자 A와 B의 내용을 각각 요약하고 A와 B를 각각 다음 기준으로 평가하세요:\n"
        "토론 내용이 없다면 아무런 내용을 작성하지 말고, 입력된 내용만을 기준으로 평가하세요.\n"
        f"### 토론 주제:\n{topic}\n\n"
        "1. 논리성\n2. 근거 사용\n3. 중심 주제 유지\n4. 감정/태도\n\n"
        "각 항목은 100점 만점으로 평가하세요.\n\n"
        f"### 토론 내용:\n{content}\n\n"
        "### 출력 형식:\n"
        "- 발언자 A:\n"
        "- 요약:\n"
        "- 평가:\n"
        "  - 논리성: /100\n"
        "  - 근거 사용: /100\n"
        "  - 중심 주제 유지: /100\n"
        "  - 감정/태도: /100\n"
        "  - 평균 : /100\n"
        "- 평가 이유:\n"

        "- 발언자 B:\n"
        "- 요약:\n"
        "- 평가:\n"
        "  - 논리성: /100\n"
        "  - 근거 사용: /100\n"
        "  - 중심 주제 유지: /100\n"
        "  - 감정/태도: /100\n"
        "  - 평균 : /100\n"
        "- 평가 이유:\n"
    )

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "system", "content": prompt}],
            temperature=0.3,
        )
        result = response.choices[0].message.content
        return {"result": result}
    

    except Exception as e:  
        raise HTTPException(status_code=500, detail=str(e))
    
@app.post("/generate_topic")
async def generate_topic():

    prompt = (
        "당신은 토론의 주제를 생성하는 AI입니다.\n"
        "다음은 토론 주제를 생성하기 위한 지침입니다:\n"
        "1. 주제는 명확하고 논쟁의 여지가 있어야 합니다.\n"
        "2. 주제는 2가지 입장으로 나뉘어야 합니다.\n"
        "3. 주제는 가벼운 주제에서부터 심각한 주제까지 다양해야 합니다.\n"
        "4. 하나의 토론 주제를 생성하세요.\n"
        "5. 주제만을 출력하세요.\n"
        "### 출력 형식:\n"
        "- 토론 주제: [여기에 주제를 작성하세요]\n"
    )

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "system", "content": prompt}],
            temperature=0.7,
        )
        result = response.choices[0].message.content
        return {"topic": result}
    

    except Exception as e:  
        raise HTTPException(status_code=500, detail=str(e))