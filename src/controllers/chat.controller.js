import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { checkFormat } from "../middleware/jwt.js";
import { BaseError } from "../errors.js";
import { createRoom, 
  joinRoom,
} from "../services/chat.service.js"
import { toJoinRoomDto } from "../dtos/chat.dto.js"

// 배틀방 생성
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

// 방 참가 controller
export const handleJoinRoom = async (req, res, next) => {
  /*
  #swagger.summary = '방 참가 API'
  #swagger.tags = ['BattleRoom']
  #swagger.security = [{
    "BearerAuth": []
  }]
  #swagger.parameters['roomId'] = {
    in: 'path',
    name: 'roomId',
    description: '배틀방 ID',
    required: true,
    type: 'integer',       // schema 대신 최상위에 type
    format: 'int64',       // (선택) 64비트 정수라고 명시
    example: 1             // 기본값 예시
  }
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            side: {
              type: "string",
              enum: ["A","B","S"],
              example: "A"
            }
          },
          required: ["side"]
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "참가 성공",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess:  { type: "boolean", example: true },
            code:       { type: "string",  example: "200" },
            message:    { type: "string",  example: "success!" },
            result: {
              type: "object",
              properties: {
                participantId: { type: "integer", example: 123 },
                roomId:        { type: "integer", example: 1 },
                userId:        { type: "integer", example: 42 },
                role:          { type: "string",  example: "A" },
                joinedAt:      { type: "string",  format: "date-time", example: "2025-05-25T12:34:56.000Z" }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: "잘못된 요청 (입력 검증 실패)",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code:      { type: "string",  example: "ROOMIN4001" },
            message:   { type: "string",  example: "올바르지 않는 입력 값입니다." },
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
            code:      { type: "string",  example: "MEMBER4006" },
            message:   { type: "string",  example: "토큰의 형식이 올바르지 않습니다. 다시 확인해주세요." },
            result:    { type: "object",  nullable: true, example: null }
          }
        }
      }
    }
  }
  #swagger.responses[409] = {
    description: "참가 불가 (이미 참가했거나 역할 중복 또는 방 가득참)",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code:      { type: "string",  example: "ROOMIN4005" },
            message:   { type: "string",  example: "이미 참가했습니다." },
            result:    { type: "object",  nullable: true, example: null }
          }
        }
      }
    }
  }
  #swagger.responses[500] = {
    description: "서버 내부 오류",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code:      { type: "string",  example: "COMMON000" },
            message:   { type: "string",  example: "서버 에러, 관리자에게 문의 바랍니다." },
            result:    { type: "object",  nullable: true, example: null }
          }
        }
      }
    }
  }
*/
  try {
    // 토큰 검증
    const token = await checkFormat(req.get('Authorization'));
    if (token === null) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }
    // let roomId;
    // try {
    //   roomId = BigInt(req.params.roomId);
    // } catch {
    //   return res.send(response(status.BAD_REQUEST, null));
    // }
    // DTO 변환/검증…
    const dto = toJoinRoomDto(req.body);
    if (dto.info === false) {
      return res.send(response(status.INVALID_INPUT, null));
    }
    // 서비스 호출
    const result = await joinRoom({
      roomId: Number(req.params.roomId),
      userId: req.userId,
      role:   dto.side
    });
    return res.send(response(status.SUCCESS, result));
  } catch (err) {
    console.error(err);
    return res.send(response(status.FAILURE, null));
  }
};