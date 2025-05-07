import torch
import torch.nn.functional as F
from fastapi import FastAPI, HTTPException
from transformers import AutoTokenizer, AutoModelForSequenceClassification

app = FastAPI()

# 모델과 토크나이저 로드 (분류 모델로 변경)
tokenizer = AutoTokenizer.from_pretrained("beomi/KcELECTRA-base")
model = AutoModelForSequenceClassification.from_pretrained("beomi/KcELECTRA-base", num_labels=5)

# 감정 분석 카테고리
emotion_labels = ["부정", "중립", "긍정", "분노", "흥분"]

neutral_threshold = 0.4  # 중립을 결정할 확률 임계값

@app.post("/analyze")
async def analyze_text(data: dict):
    text = data.get("text", "")
    if not text:
        raise HTTPException(status_code=400, detail="Text is required")

    # 텍스트 토큰화 및 모델에 입력
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True, max_length=512)
    with torch.no_grad():
        outputs = model(**inputs)

    # KcELECTRA 모델의 경우, outputs는 BaseModelOutputWithPastAndCrossAttentions 형식
    logits = outputs.logits  # logits 추출
    probabilities = F.softmax(logits, dim=-1).tolist()  # 확률 계산

    # 예측된 클래스(감정) 계산
    predicted_class = torch.argmax(logits, dim=-1).item()

    # 가장 높은 확률값과 해당 클래스
    max_prob = max(probabilities[0])  # 확률 중 가장 큰 값

    # 확률이 임계값 이하라면 중립 또는 기타 감정으로 분류
    if max_prob < neutral_threshold:
        emotion = "중립"  # 확신이 없을 때 중립으로 처리
    else:
        emotion = emotion_labels[predicted_class]

    return {"emotion": emotion, "probabilities": probabilities}
