from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import torch.nn.functional as F

# FastAPI app 생성
app = FastAPI()

# 모델과 토크나이저 로드 (KcELECTRA 감정 분석 모델)
model_name = "nlp04/korean_sentiment_analysis_kcelectra"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)

# 감정 레이블 (이 모델은 2클래스: 부정, 긍정)
LABELS = ["부정", "긍정"]

class TextRequest(BaseModel):
    text: str

# 감정 분석 함수
def analyze_sentiment(text: str):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True, max_length=128)
    with torch.no_grad():
        outputs = model(**inputs)
    logits = outputs.logits
    probs = torch.softmax(logits, dim=-1).squeeze().tolist()

    sentiment = LABELS[torch.argmax(logits, dim=-1).item()]
    return sentiment, dict(zip(LABELS, probs))

# /analyze 엔드포인트 구현
@app.post("/analyze")
async def analyze(request: TextRequest):
    try:
        text = request.text.strip()
        if not text:
            raise HTTPException(status_code=400, detail="Text is required")

        sentiment, probabilities = analyze_sentiment(text)
        return {"emotion": sentiment, "probabilities": probabilities}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
