from fastapi import FastAPI, HTTPException, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import PlainTextResponse
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from openai import OpenAI
from dotenv import load_dotenv

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

# 제외 패턴이 포함된 단어인지 확인인
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
# "욕설 사이 특수문자 테스트 필요 ex) T@Q"
def has_profanity(text: str) -> bool:
    words = text.split()

    for word in words:
        # 제외 패턴에 포함된 단어는 필터링하지 않음
        if not is_excluded(word) and any(bad_word in word for bad_word in BAD_WORDS):
            return True
    return False

def mask_profanity(text: str) -> str:
    words = text.split()
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
    text = request.text.strip()
    if not text:
        raise HTTPException(status_code=400, detail="Text is required")
    emotion, probabilities = analyze_sentiment(text)
    return {"emotion": emotion, "probabilities": probabilities}

@app.options("/analyze")
async def analyze_options():
    return PlainTextResponse(None, status_code=204)

@app.post("/filter")
async def filter_profanity(request: FilterRequest):
    text = request.text.strip()
    contains = has_profanity(text)
    filtered = mask_profanity(text)
    return {"contains_profanity": contains, "filtered_text": filtered}

@app.options("/filter")
async def filter_options():
    return PlainTextResponse(None, status_code=204)

@app.post("/analyze_debate")
async def analyze_debate(request: DebateRequest):
    topic = request.topic.strip()
    content = request.content.strip()

    if not content:
        raise HTTPException(status_code=400, detail="Debate content is required")
    if not topic:
        raise HTTPException(status_code=400, detail="Debate topic is required")

    if has_profanity(content):
        raise HTTPException(status_code=400, detail="Profanity detected in debate content")

    prompt = (
        "다음은 토론 내용입니다. 이 토론을 요약하고 다음 기준으로 평가하세요:\n"
        f"### 토론 주제:\n{topic}\n\n"
        "1. 논리성\n2. 근거 사용\n3. 중심 주제 유지\n4. 감정/태도\n\n"
        "각 항목은 10점 만점으로 평가하세요.\n\n"
        f"### 토론 내용:\n{content}\n\n"
        "### 출력 형식:\n"
        "- 요약:\n"
        "- 평가:\n"
        "  - 논리성: /10\n"
        "  - 근거 사용: /10\n"
        "  - 중심 주제 유지: /10\n"
        "  - 감정/태도: /10\n"
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