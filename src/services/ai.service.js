// src/services/ai.service.js
import {
    callFilterProfanity,
    callAnalyzeSentiment,
    callAnalyzeDebate,
    callGenerateTopic,
} from "../repositories/ai.repository.js";

export const filterProfanityService = async (text) => {
  // (원한다면) 추가 로직을 여기에 넣을 수 있습니다 (예: text 길이 제한 등)
    const result = await callFilterProfanity(text);
    return result;
};

export const analyzeSentimentService = async (text) => {
  // (예: 빈 문자열 검사)
    if (!text || typeof text !== "string" || text.trim() === "") {
    throw new Error("텍스트가 비어있습니다.");
    }
    const result = await callAnalyzeSentiment(text);
    return result;
};

export const analyzeDebateService = async ({ topic, content }) => {
  // (예: 파라미터 검증)
    if (!topic || typeof topic !== "string" || topic.trim() === "") {
    throw new Error("토론 주제가 필요합니다.");
    }
    if (!content || typeof content !== "string" || content.trim() === "") {
    throw new Error("토론 내용이 필요합니다.");
    } 
    const result = await callAnalyzeDebate({ topic, content });
    return result;
};

export const generateTopicService = async () => {
    const result = await callGenerateTopic();
    return result;
};
