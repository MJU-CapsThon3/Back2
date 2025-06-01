import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { checkFormat } from "../middleware/jwt.js";
import { BaseError } from "../errors.js";
import { createRoom, 
  joinRoom,
  getRoomInfo,
  startBattle,
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
  #swagger.security = [{ "BearerAuth": [] }]
  #swagger.tags = ['BattleRoom']

  #swagger.parameters['roomId'] = {
    in: 'path',
    description: '배틀방 ID',
    required: true,
    type: 'integer',
    format: 'int64',
    example: 1
  }
  #swagger.requestBody = {
    description: '참가할 진형',
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            side: {
              type: "string",
              enum: ["A", "B", "P"],
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
    schema: {
      isSuccess: true,
      code: "200",
      message: "success!",
      result: {
        participantId: 123,
        roomId: 1,
        userId: 42,
        role: "A",
        joinedAt: "2025-05-25T10:48:19.983Z"
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
  #swagger.responses[401] = {
    description: "토큰 오류",
    schema: {
      isSuccess: false,
      code: "MEMBER4006",
      message: "토큰의 형식이 올바르지 않습니다. 다시 확인해주세요.",
      result: null
    }
  }
  #swagger.responses[409] = {
    description: "참가 불가",
    schema: {
      isSuccess: false,
      code: "ROOMIN4005",
      message: "이미 참가했습니다.",
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

// 방 정보 불러오기
export const handleGetRoomInfo = async (req, res, next) => {
  /*
  #swagger.summary = '방 정보 불러오는 API'
  #swagger.security = [{ "BearerAuth": [] }]
  #swagger.tags = ['BattleRoom']

  #swagger.parameters['roomId'] = {
    in: 'path',
    description: '배틀방 ID',
    required: true,
    type: 'integer',
    format: 'int64',
    example: 1
  }
  #swagger.responses[200] = {
    description: "조회 성공",
    schema: {
      isSuccess: true,
      code: "200",
      message: "success!",
      result: {
        roomId: 1,
        adminId: 5,
        topicA: "사자",
        topicB: "코끼리",
        status: "WAITING",
        createdAt: "2025-05-25T12:00:00.000Z",
        participants: [
          { userId: 9, role: "A", joinedAt: "2025-05-25T12:01:00.000Z" }
        ],
        spectatorCount: 3
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
  #swagger.responses[401] = {
    description: "토큰 오류",
    schema: {
      isSuccess: false,
      code: "MEMBER4006",
      message: "토큰의 형식이 올바르지 않습니다. 다시 확인해주세요.",
      result: null
    }
  }
  #swagger.responses[404] = {
    description: "방을 찾을 수 없음",
    schema: {
      isSuccess: false,
      code: "ROOMIN4005",
      message: "방을 찾을 수가 없습니다.",
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
    // 1) 토큰 검증
    const token = await checkFormat(req.get('Authorization'));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }
    // 2) roomId 파싱
    let roomIdNum;
    try {
      roomIdNum = BigInt(req.params.roomId);
    } catch {
      return res.send(response(status.BAD_REQUEST, null));
    }
    // 3) 서비스 호출
    const roomInfo = await getRoomInfo({ roomId: roomIdNum });
    // 4) 응답
    return res.send(response(status.SUCCESS, roomInfo));
  } catch (err) {
    console.error(err);
    // 방이 없으면 NOT_FOUND, 그 외엔 SERVER_ERROR
    if (err.message === 'ROOM_NOT_FOUND') {
      return res.send(response(status.NOT_FOUND, null));
    }
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

// 배틀방 시작하기
export const handleStartBattle = async (req, res, next) => {
  /*
  #swagger.path = '/battle/rooms/{roomId}/start'
  #swagger.summary = '배틀 시작 API'
  #swagger.tags = ['BattleRoom']
  #swagger.security = [{ "BearerAuth": [] }]

  #swagger.parameters['roomId'] = {
    in: 'path',
    description: '배틀방 ID',
    required: true,
    type: 'integer',
    format: 'int64',
    example: 1
  }

  #swagger.responses[200] = {
    description: "시작 성공",
    schema: {
      isSuccess: true,
      code: "200",
      message: "success!",
      result: {
        roomId: 1,
        status: "PLAYING",
        startedAt: "2025-05-25T12:34:56.000Z"
      }
    }
  }
  #swagger.responses[400] = {
    description: "잘못된 요청 (INVALID_STATE 등)",
    schema: {
      isSuccess: false,
      code: "COMMON001",
      message: "잘못된 요청입니다.",
      result: null
    }
  }
  #swagger.responses[401] = {
    description: "토큰 오류",
    schema: {
      isSuccess: false,
      code: "MEMBER4006",
      message: "토큰의 형식이 올바르지 않습니다. 다시 확인해주세요.",
      result: null
    }
  }
  #swagger.responses[403] = {
    description: "권한 없음 (방장만 시작 가능)",
    schema: {
      isSuccess: false,
      code: "COMMON004",
      message: "금지된 요청입니다.",
      result: null
    }
  }
  #swagger.responses[404] = {
    description: "방을 찾을 수 없음",
    schema: {
      isSuccess: false,
      code: "ROOMIN4005",
      message: "방을 찾을 수가 없습니다.",
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
    // 1) 토큰 검증
    const token = await checkFormat(req.get('Authorization'));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }
    // 2) roomId 파싱
    let roomId;
    try {
      roomId = BigInt(req.params.roomId);
    } catch {
      return res.send(response(status.BAD_REQUEST, null));
    }
    // 3) 서비스 호출
    const updated = await startBattle({ roomId, userId: req.userId });
    // 4) 성공 응답
    return res.send(response(status.SUCCESS, updated));
  } catch (err) {
    console.error(err);
    // 권한 없거나 상태 이상 등 커스텀 에러
    if (err.message === 'ROOM_NOT_FOUND') {
      return res.send(response(status.ROOM_NOT_FOUND, null));
    }
    if (err.message === 'FORBIDDEN') {
      return res.send(response(status.FORBIDDEN, null));
    }
    if (err.message === 'INVALID_STATE') {
      return res.send(response(status.BAD_REQUEST, null));
    }
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};