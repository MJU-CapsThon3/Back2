import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { checkFormat } from "../middleware/jwt.js";
import { BaseError } from "../errors.js";
import { createRoom } from "../services/chat.service.js"

export const handleCreateRoom = async (req, res, next) => {
    /*
  #swagger.summary = '배틀방 생성 API'
  #swagger.tags = ['BattleRoom']
  #swagger.security = [{
    "BearerAuth": []
  }]
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            topics: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  side:        { type: "string", example: "A" },
                  title:       { type: "string", example: "사자" },
                  suggestedBy: { type: "string", example: "user" }
                },
                required: ["side", "title"]
              },
              example: [
                { "side": "A", "title": "사자",   "suggestedBy": "user" },
                { "side": "B", "title": "호랑이", "suggestedBy": "user" }
              ]
            }
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "배틀방 생성 성공",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: true },
            code:      { type: "number",  example: 200 },
            message:   { type: "string",  example: "배틀방 생성 성공" },
            result: {
              type: "object",
              properties: {
                roomId:    { type: "number", example: 1 },
                adminId:   { type: "number", example: 1 },
                topicA:    { type: "string", example: "사자" },
                topicB:    { type: "string", example: "호랑이" },
                status:    { type: "string", example: "WAITING" },
                createdAt: { type: "string", format: "date-time", example: "2025-05-25T12:34:56.000Z" },
                topics: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      topicId:     { type: "number", example: 1 },
                      side:        { type: "string", example: "A" },
                      title:       { type: "string", example: "사자" },
                      suggestedBy: { type: "string", example: "user" },
                      createdAt:   { type: "string", format: "date-time", example: "2025-05-25T12:34:56.000Z" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: "잘못된 입력",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code:      { type: "string",  example: "INVALID_INPUT" },
            message:   { type: "string",  example: "필수 입력값이 누락되었습니다." },
            result:    { type: "object",  nullable: true, example: null }
          }
        }
      }
    }
  }
  #swagger.responses[401] = {
    description: "토큰 오류",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code:      { type: "string",  example: "TOKEN_FORMAT_INCORRECT" },
            message:   { type: "string",  example: "토큰 포맷이 올바르지 않습니다." },
            result:    { type: "object",  nullable: true, example: null }
          }
        }
      }
    }
  }
  #swagger.responses[500] = {
    description: "서버 오류",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code:      { type: "string",  example: "SERVER_ERROR" },
            message:   { type: "string",  example: "서버 오류가 발생했습니다." },
            result:    { type: "object",  nullable: true, example: null }
          }
        }
      }
    }
  }
*/
    try {
    console.log('배틀방 생성을 요청했습니다!');
    // 1) 토큰 검증
    const token = await checkFormat(req.get('Authorization'));
    if (token === null) {
        return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }

    // 2) 서비스 호출
    const roomDto = await createRoom(req, res);

    // 3) 필수 입력 검증
    if (roomDto.info === false) {
        return res.send(response(status.INVALID_INPUT, null));
    }

    // 4) 성공 응답
    return res.send(response(status.SUCCESS, roomDto));
    } catch (err) {
    console.log(err);
    res.send(response(BaseError));
    }
};