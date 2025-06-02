// src/controllers/ai.controller.js
import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { checkFormat } from "../middleware/jwt.js";
import { BaseError } from "../errors.js";

import {
    filterProfanityService,
    analyzeSentimentService,
    analyzeDebateService,
    generateTopicService,
} from "../services/ai.service.js";


// 필터링
export const handleFilterProfanity = async (req, res) => {
    /* 
    #swagger.summary = '텍스트 욕설 검사 및 마스킹 API'
    #swagger.tags = ['AI']
    #swagger.parameters['body'] = {
        in: 'body',
        description: '검사할 텍스트',
        required: true,
        schema: {
        text: "예시: 안녕하세요 xx놈 반갑습니다"
        }
    }
    #swagger.responses[200] = {
        description: "필터링 성공",
        schema: {
        isSuccess: true,
        code: "200",
        message: "success!",
        result: {
            contains_profanity: true,
          filtered_text: "안녕하세요 **놈 반갑습니다"
        }
        }
    }
    #swagger.responses[400] = {
        description: "잘못된 요청",
        schema: {
        isSuccess: false,
        code: "COMMON001",
        message: "잘못된 요청입니다.",
        result: null
        }
    }
    #swagger.responses[500] = {
        description: "서버 내부 오류",
        schema: {
        isSuccess: false,
        code: "COMMON000",
        message: "서버 에러, 관리자에게 문의 바랍니다.",
        result: null
        }
    }
  */
    try {
    const token = await checkFormat(req.get('Authorization'));
    if (token === null) {
        return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }
    const { text } = req.body;
    if (!text || typeof text !== "string") {
        return res
        .status(status.BAD_REQUEST.status)
        .send(response(status.BAD_REQUEST, null));
    }

    const filterResult = await filterProfanityService(text);
    // filterResult = { contains_profanity: boolean, filtered_text: string }
    return res
        .status(status.SUCCESS.status)
        .send(response(status.SUCCESS, filterResult));
    } catch (err) {
    console.error(err);
    return res
        .status(status.INTERNAL_SERVER_ERROR.status)
        .send(response(status.INTERNAL_SERVER_ERROR, null));
    }
};

// 감정 분석
export const handleAnalyzeSentiment = async (req, res) => {
    /* 
    #swagger.summary = '텍스트 감정 분석 API'
    #swagger.tags = ['AI']
    #swagger.parameters['body'] = {
        in: 'body',
        description: '감정 분석할 텍스트',
        required: true,
        schema: {
        text: "예시: 오늘 날씨 참 좋네요!"
        }
    }
    #swagger.responses[200] = {
        description: "감정 분석 성공",
        schema: {
        isSuccess: true,
        code: "200",
        message: "success!",
        result: {
            emotion: "긍정",
            probabilities: {
            긍정: 0.85,
            부정: 0.15
            }
        }
        }
    }
    #swagger.responses[400] = {
        description: "잘못된 요청",
        schema: {
        isSuccess: false,
        code: "COMMON001",
        message: "잘못된 요청입니다.",
        result: null
        }
    }
    #swagger.responses[500] = {
        description: "서버 내부 오류",
        schema: {
        isSuccess: false,
        code: "COMMON000",
        message: "서버 에러, 관리자에게 문의 바랍니다.",
        result: null
        }
    }
  */
    try {
    const token = await checkFormat(req.get('Authorization'));
    if (token === null) {
        return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }
    const { text } = req.body;
    if (!text || typeof text !== "string") {
        return res
        .status(status.BAD_REQUEST.status)
        .send(response(status.BAD_REQUEST, null));
    }

    const analysis = await analyzeSentimentService(text);
    // analysis = { emotion: "...", probabilities: {...} }
    return res
        .status(status.SUCCESS.status)
        .send(response(status.SUCCESS, analysis));
    } catch (err) {
    console.error(err);
    return res
        .status(status.INTERNAL_SERVER_ERROR.status)
        .send(response(status.INTERNAL_SERVER_ERROR, null));
    }
};

// 토론 분석
export const handleAnalyzeDebate = async (req, res) => {
    /* 
    #swagger.summary = '토론 분석 API (A vs B 평가 및 최종 승자 판정)'
    #swagger.tags = ['AI']
    #swagger.parameters['body'] = {
        in: 'body',
        description: '토론 주제 및 토론 내용',
        required: true,
        schema: {
        topic: "예시: 사자 vs 코끼리, 어느 쪽이 낯선 소리인가?",
        content: "예시: A: 저는 사자가 ... B: 저는 코끼리가 ..."
        }
    }
    #swagger.responses[200] = {
        description: "토론 분석 성공",
        schema: {
        isSuccess: true,
        code: "200",
        message: "success!",
        result: {
            result: "A: (요약/평가)\nB: (요약/평가)\n최종 승자: A\n판정 이유: ~~~"
        }
        }
    }
    #swagger.responses[400] = {
        description: "잘못된 요청",
        schema: {
        isSuccess: false,
        code: "COMMON001",
        message: "잘못된 요청입니다.",
        result: null
        }
    }
    #swagger.responses[500] = {
        description: "서버 내부 오류",
        schema: {
        isSuccess: false,
        code: "COMMON000",
        message: "서버 에러, 관리자에게 문의 바랍니다.",
        result: null
        }
    }
  */
    try {
    const token = await checkFormat(req.get('Authorization'));
    if (token === null) {
        return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }
    const { topic, content } = req.body;
    if (
        !topic ||
        typeof topic !== "string" ||
        !content ||
        typeof content !== "string"
    ) {
        return res
        .status(status.BAD_REQUEST.status)
        .send(response(status.BAD_REQUEST, null));
    }

    const analysis = await analyzeDebateService({ topic, content });
    // analysis = { result: "A: ... B: ... 최종 승자: ... 판정 이유: ..." }
    return res
        .status(status.SUCCESS.status)
        .send(response(status.SUCCESS, analysis));
    } catch (err) {
    console.error(err);
    return res
        .status(status.INTERNAL_SERVER_ERROR.status)
        .send(response(status.INTERNAL_SERVER_ERROR, null));
    }
};

export const handleGenerateTopic = async (req, res) => {
    /* 
    #swagger.summary = '랜덤 토론 주제 생성 API'
    #swagger.tags = ['AI']
    #swagger.responses[200] = {
        description: "토론 주제 생성 성공",
        schema: {
        isSuccess: true,
        code: "200",
        message: "success!",
        result: {
            topic: "예시: 진지한 과학적 주제: 인간 vs 인공지능, 누가 더 창의적일까?"
        }
        }
    }
    #swagger.responses[500] = {
        description: "서버 내부 오류",
        schema: {
        isSuccess: false,
        code: "COMMON000",
        message: "서버 에러, 관리자에게 문의 바랍니다.",
        result: null
        }
    }
  */
    try {
    const token = await checkFormat(req.get('Authorization'));
    if (token === null) {
        return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }
    const generated = await generateTopicService();
    // generated = { topic: "..." }
    return res
        .status(status.SUCCESS.status)
        .send(response(status.SUCCESS, generated));
    } catch (err) {
    console.error(err);
    return res
        .status(status.INTERNAL_SERVER_ERROR.status)
        .send(response(status.INTERNAL_SERVER_ERROR, null));
    }
};
