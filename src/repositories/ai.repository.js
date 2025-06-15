// src/repositories/ai.repository.js
import axios from "axios";

const AI_SERVER_URL = process.env.AI_SERVER_URL || "http://localhost:8000";

export const callFilterProfanity = async (text) => {
  // FastAPI 쪽 /filter 엔드포인트 호출
    const response = await axios.post(`${AI_SERVER_URL}/filter`, { text }, { timeout: 1000 });
    return response.data; 
  // 반환 예시: { contains_profanity: true/false, filtered_text: "..." }
};

export const callAnalyzeSentiment = async (text) => {
  // FastAPI 쪽 /analyze 엔드포인트 호출
    const response = await axios.post(`${AI_SERVER_URL}/analyze`, { text }, { timeout: 2000 });
    return response.data; 
  // 반환 예시: { emotion: "긍정", probabilities: { 긍정: 0.8, 부정: 0.2, ... } }
};

export const callAnalyzeDebate = async ({ topic, content }) => {
  // FastAPI 쪽 /analyze_debate 엔드포인트 호출
    const response = await axios.post(`${AI_SERVER_URL}/analyze_debate`, { topic, content });
    return response.data; 
  // 반환 예시: { result: "A: ... 평가문 ... \nB: ... 평가문 ... \n최종 승자: A\n판정 이유: ..." }
};

export const callGenerateTopic = async () => {
  // FastAPI 쪽 /generate_topic 엔드포인트 호출
    const response = await axios.post(`${AI_SERVER_URL}/generate_topic`);
    return response.data; 
  // 반환 예시: { topic: "사자 vs 코끼리 어느 쪽이 사료를 덜 낭비하는가?" }
};
