from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import ElectraTokenizer, ElectraForSequenceClassification
import torch

# FastAPI app 생성
app = FastAPI()

# 모델과 토크나이저 로드 (kcelectra 모델)
model_name = "monologg/kcelectra-base-v2022"  # kcelectra 모델명
tokenizer = ElectraTokenizer.from_pretrained(model_name)
model = ElectraForSequenceClassification.from_pretrained(model_name)

# 감정 레이블 (긍정, 부정, 중립)
LABELS = ["부정", "중립", "긍정"]

class TextRequest(BaseModel):
    text: str

# 감정 분석 함수
def analyze_sentiment(text: str):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True, max_length=512)
    with torch.no_grad():
        outputs = model(**inputs)
    logits = outputs.logits
    probs = torch.softmax(logits, dim=-1).squeeze().tolist()

    # 확률과 감정 결과 반환
    sentiment = LABELS[torch.argmax(logits, dim=-1).item()]
    return sentiment, dict(zip(LABELS, probs))

# /analyze 엔드포인트 구현
@app.post("/analyze")
async def analyze(request: TextRequest):
    try:
        text = request.text
        if not text:
            raise HTTPException(status_code=400, detail="Text is required")
        
        sentiment, probabilities = analyze_sentiment(text)
        return {"emotion": sentiment, "probabilities": probabilities}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

