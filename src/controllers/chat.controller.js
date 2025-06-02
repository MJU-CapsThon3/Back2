import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { checkFormat } from "../middleware/jwt.js";
import { BaseError } from "../errors.js";
import { createRoom, 
  joinRoom,
  getRoomInfo,
  getRoomsInfo,
  startBattle,
  getChatHistory,
  voteInRoom,
  getVoteHistory
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

// 배틀방 전체 정보 불러오기
export const handleGetRoomsInfo = async (req, res, next) => {
/**
  #swagger.summary = '전체 배틀방 정보 불러오는 API'
  #swagger.security = [{ "BearerAuth": [] }]
  #swagger.tags = ['BattleRoom']

  #swagger.responses[200] = {
    description: "조회 성공",
    schema: {
      isSuccess: true,
      code: "200",
      message: "success!",
      result: [
        {
          roomId: 1,
          status: "WAITING",
          topicA: "초보자 환영!",
          topicB: "복귀유저와 함께!"
        },
        {
          roomId: 2,
          status: "PLAYING",
          topicA: "매너 필수",
          topicB: "맥북 유저"
        },
        {
          roomId: 3,
          status: "FULL",
          topicA: "테스트 A",
          topicB: "즐겁게 게임"
        }
      ]
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
    // 2) 서비스 호출
    const roomsInfo = await getRoomsInfo();
    // 3) 응답
    return res.send(response(status.SUCCESS, roomsInfo));
  } catch (err) {
    console.error(err);
    // 방이 없으면 NOT_FOUND, 그 외엔 SERVER_ERROR
    if (err.message === 'ROOM_NOT_FOUND') {
      return res.send(response(status.NOT_FOUND, null));
    }
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
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

// 배틀방 채팅 불러오기
export const handleGetChatHistory = async (req, res) => {
  /**
  #swagger.summary = '채팅 내역 조회 API'
  #swagger.security = [{ "BearerAuth": [] }]
  #swagger.tags = ['Chat']

  #swagger.parameters['roomId'] = {
    in: 'path',
    description: '배틀방 ID',
    required: true,
    type: 'integer',
    format: 'int64',
    example: 1
  }

  #swagger.responses[200] = {
    description: "채팅 내역 조회 성공",
    schema: {
      isSuccess: true,
      code: "200",
      message: "success!",
      result: {
        sideA: [
          {
            id: "1",
            roomId: "1",
            userId: "9",
            side: "A",
            message: "안녕하세요",
            createdAt: "2025-05-29T08:00:00.000Z"
          }
        ],
        sideB: [
          {
            id: "2",
            roomId: "1",
            userId: "10",
            side: "B",
            message: "반갑습니다",
            createdAt: "2025-05-29T08:01:00.000Z"
          }
        ]
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
    description: "토큰 형식 오류",
    schema: {
      isSuccess: false,
      code: "MEMBER4006",
      message: "토큰의 형식이 올바르지 않습니다. 다시 확인해주세요.",
      result: null
    }
  }

  #swagger.responses[403] = {
    description: "권한 오류",
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
    const token = checkFormat(req.get("Authorization"));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }

    // 2) roomId 파라미터 확인
    const roomId = Number(req.params.roomId);
    if (isNaN(roomId)) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    // 3) 서비스 호출 (참가 여부 등 권한 체크는 내부 구현에 따라 추가)
    const history = await getChatHistory(roomId);
    if (!history) {
      return res.send(response(status.ROOM_NOT_FOUND, null));
    }

    // 4) 성공 응답
    return res.send(response(status.SUCCESS, history));
  } catch (err) {
    console.error("🔴 handleGetChatHistory 오류:", err);
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

// 배틀방 채팅 메세지 저장하기
export const handlePostChatMessage = async (req, res) => {
/**
  #swagger.summary = '채팅 메시지 저장 API'
  #swagger.security = [{ "BearerAuth": [] }]
  #swagger.tags = ['Chat']

  #swagger.parameters['roomId'] = {
    in: 'path',
    description: '배틀방 ID',
    required: true,
    type: 'integer',
    format: 'int64',
    example: 1
  }

  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            side: { type: "string", description: "A 또는 B (토론 측)", example: "A" },
            message: { type: "string", description: "보낼 채팅 메시지 내용", example: "안녕하세요!" }
          },
          required: ["side", "message"]
        }
      }
    }
  }

  #swagger.responses[200] = {
    description: "채팅 메시지 저장 성공",
    schema: {
      isSuccess: true,
      code: "200",
      message: "success!",
      result: {
        id: "3",
        roomId: "1",
        userId: "7",
        side: "A",
        message: "안녕하세요!",
        createdAt: "2025-05-29T08:00:00.000Z"
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
    description: "토큰 형식 오류",
    schema: {
      isSuccess: false,
      code: "MEMBER4006",
      message: "토큰의 형식이 올바르지 않습니다. 다시 확인해주세요.",
      result: null
    }
  }

  #swagger.responses[403] = {
    description: "권한 오류",
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
    const token = checkFormat(req.get("Authorization"));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }


    // 2) path 변수, body에서 값 추출
    const roomId = Number(req.params.roomId);
    const { side, message } = req.body;

    // 3) 필수 입력 검증
    if (!roomId || !side || !message) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    // 4) 서비스 호출 (AI 필터링 포함)
    const chatRecord = await createChat({
      roomId,
      userId: req.userId, // 미들웨어에서 req.userId에 세팅됨
      side,
      message
    });

    // 5) 성공 응답
    return res.send(response(status.SUCCESS, {
      id:        chatRecord.id.toString(),
      roomId:    chatRecord.roomId.toString(),
      userId:    chatRecord.userId.toString(),
      side:      chatRecord.side,
      message:   chatRecord.message,
      createdAt: chatRecord.createdAt
    }));
  } catch (err) {
    console.error("🔴 handlePostChatMessage 오류:", err);
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

// 배틀방 관전자 투표하기
export const handlePostVote = async (req, res) => {
  /*
    #swagger.summary = '관전자 투표 저장 API'
    #swagger.security = [{ "BearerAuth": [] }]
    #swagger.tags = ['Vote']

    #swagger.parameters['roomId'] = {
      in: 'path',
      description: '배틀방 ID',
      required: true,
      type: 'integer',
      format: 'int64',
      example: 1
    }

    #swagger.requestBody = {
      description: '투표 정보',
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              vote: {
                type: "string",
                enum: ["A", "B"],
                example: "A"
              }
            },
            required: ["vote"]
          }
        }
      }
    }

    #swagger.responses[200] = {
      description: "투표 저장 성공",
      schema: {
        isSuccess: true,
        code: "200",
        message: "success!",
        result: {
          id:        "5",
          roomId:    "1",
          userId:    "9",
          vote:      "A",
          createdAt: "2025-05-30T10:00:00.000Z"
        }
      }
    }

    #swagger.responses[400] = {
      description: "잘못된 요청 (vote 누락 또는 형식 오류 등)",
      schema: {
        isSuccess: false,
        code: "COMMON001",
        message: "잘못된 요청입니다.",
        result: null
      }
    }

    #swagger.responses[401] = {
      description: "토큰 형식 오류",
      schema: {
        isSuccess: false,
        code: "MEMBER4006",
        message: "토큰의 형식이 올바르지 않습니다. 다시 확인해주세요.",
        result: null
      }
    }

    #swagger.responses[403] = {
      description: "권한 오류 (관전자/참가자가 아닌 경우)",
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

    #swagger.responses[409] = {
      description: "중복 투표 (이미 투표함)",
      schema: {
        isSuccess: false,
        code: "VOTE4001",
        message: "이미 투표를 완료했습니다.",
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
    const token = checkFormat(req.get("Authorization"));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }

    // 2) path 변수 + body
    const roomId = Number(req.params.roomId);
    const { vote } = req.body; // "A" 또는 "B"

    // 3) 필수 입력 검증
    if (isNaN(roomId) || !vote || !["A", "B"].includes(vote)) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    // 4) 서비스 호출
    const result = await voteInRoom({
      roomId,
      userId: req.userId,
      vote
    });

    // 5) 성공 응답
    return res.send(response(status.SUCCESS, result));
  } catch (err) {
    console.error("🔴 handlePostVote 오류:", err);

    if (err.code === "ROOM_NOT_FOUND") {
      return res.send(response(status.ROOM_NOT_FOUND, null));
    }
    if (err.code === "FORBIDDEN") {
      return res.send(response(status.FORBIDDEN, null));
    }
    if (err.code === "VOTE_ALREADY_DONE") {
      // response.status.js에 VOTE4001 코드가 정의되어 있다면 사용
      return res.send(response(status.ALREADY_JOINED, null));
    }
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

// 배틀방 관전자 투표
export const handleGetVoteHistory = async (req, res) => {
  /**
    #swagger.summary = '투표 결과 조회 API'
    #swagger.security = [{ "BearerAuth": [] }]
    #swagger.tags = ['Vote']

    #swagger.parameters['roomId'] = {
      in: 'path',
      description: '배틀방 ID',
      required: true,
      type: 'integer',
      format: 'int64',
      example: 1
    }

    #swagger.responses[200] = {
      description: "투표 결과 조회 성공",
      schema: {
        isSuccess: true,
        code: "200",
        message: "success!",
        result: {
          countA: 5,
          countB: 3,
          total: 8,
          votes: [
            {
              id: "1",
              roomId: "1",
              userId: "9",
              vote: "A",
              createdAt: "2025-05-30T10:00:00.000Z"
            },
            {
              id: "2",
              roomId: "1",
              userId: "11",
              vote: "B",
              createdAt: "2025-05-30T10:01:00.000Z"
            }
          ]
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
      description: "토큰 형식 오류",
      schema: {
        isSuccess: false,
        code: "MEMBER4006",
        message: "토큰의 형식이 올바르지 않습니다. 다시 확인해주세요.",
        result: null
      }
    }

    #swagger.responses[403] = {
      description: "권한 오류",
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
    const token = checkFormat(req.get("Authorization"));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }

    // 2) roomId 파라미터 확인
    const roomId = Number(req.params.roomId);
    if (isNaN(roomId)) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    // 3) 서비스 호출
    const result = await getVoteHistory({
      roomId,
      userId: req.userId
    });

    // 4) 성공 응답
    return res.send(response(status.SUCCESS, result));
  } catch (err) {
    console.error("🔴 handleGetVoteHistory 오류:", err);
    if (err.code === "ROOM_NOT_FOUND") {
      return res.send(response(status.ROOM_NOT_FOUND, null));
    }
    if (err.code === "FORBIDDEN") {
      return res.send(response(status.FORBIDDEN, null));
    }
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};