import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { checkFormat } from "../middleware/jwt.js";
import { BaseError } from "../errors.js";
import { createRoom, 
  joinRoom,
  getRoomInfo,
  getRoomsInfo,
  startBattle,
  createChat,
  getChatHistory,
  voteInRoom,
  getVoteHistory,
  endBattle,
  getFinalResultAndAward,
  getRoomDetail,
  setRoomTopics,
  generateAndSetAITopics,
  leaveRoom,
  updateTopics,
  changeParticipantRole,
  joinBattleRoom
} from "../services/chat.service.js"
import { toJoinRoomDto } from "../dtos/chat.dto.js"

// 배틀방 생성
export const handleCreateRoom = async (req, res) => {
  /**
    #swagger.summary = '배틀방 생성 API'
    #swagger.security = [{ "BearerAuth": [] }]
    #swagger.tags = ['BattleRoom']

    #swagger.requestBody = {
      description: '생성할 방 이름',
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              roomName: { type: "string", example: "새로운 토론방 이름" }
            },
            required: ["roomName"]
          }
        }
      }
    }

    #swagger.responses[200] = {
      description: "배틀방 생성 성공",
      schema: {
        isSuccess: true,
        code: "200",
        message: "success!",
        result: {
          roomId: "1",
          adminId: "5",
          topicA: "",
          topicB: "",
          status: "WAITING",
          createdAt: "2025-05-25T12:34:56.000Z",
          participants: [
            {
              participantId: "10",
              userId: "5",
              role: "P",
              joinedAt: "2025-05-25T12:34:56.000Z",
              side: null
            }
          ]
        }
      }
    }

    #swagger.responses[400] = {
      description: "잘못된 입력 (roomName 누락 등)",
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
    const token = await checkFormat(req.get("Authorization"));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }

    // 2) 서비스 호출
    const result = await createRoom(req);
    if (result.info === false) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    // 3) 성공 응답
    return res.send(response(status.SUCCESS, result));
  } catch (err) {
    console.error("🔴 handleCreateRoom 오류:", err);
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

// 방 참가 controller
export const handleJoinRoom = async (req, res) => {
  /*
    #swagger.summary = '방 참가 API (항상 관전자 P로 입장)'
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
      description: "방 참가 성공 (관전자 P)",
      schema: {
        isSuccess: true,
        code: 200,
        message: "성공적으로 방에 참가했습니다.",
        result: {
          roomId:        "1",
          participantId: "45",
          role:          "P"
        }
      }
    }
    #swagger.responses[400] = {
      description: "잘못된 요청 (roomId가 숫자가 아닌 경우 등)",
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
      description: "권한 오류 (추가 로직이 있을 경우)",
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
    const rawToken = req.get("Authorization");
    const token = rawToken && checkFormat(rawToken);
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }

    // 2) roomId 검증
    const parsedRoomId = Number(req.params.roomId);
    if (isNaN(parsedRoomId)) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    // 3) req.userId가 객체라면 내부의 원시값 추출
    let rawUserId = req.userId;
    if (typeof rawUserId === "object" && rawUserId !== null) {
      // 미들웨어가 { userId: 123 } 또는 { id: 123 } 같은 형태로 저장했다면
      rawUserId = rawUserId.userId ?? rawUserId.id;
    }
    const parsedUserId = Number(rawUserId);
    if (isNaN(parsedUserId)) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    // 4) 서비스 호출 (role 고정 → "P")
    const { roomId, participantId } = await joinBattleRoom({
      roomId:       BigInt(parsedRoomId),
      userId:       BigInt(parsedUserId),
      role:         "P",
      joinedAt:     new Date()
    });

    // 5) 성공 응답
    return res.send(response(status.SUCCESS, {
      roomId:        roomId.toString(),
      participantId: participantId.toString(),
      role:          "P"
    }));
  } catch (err) {
    console.error("🔴 handleJoinRoom 오류:", err);
    if (err.code === "ROOM_NOT_FOUND") {
      return res.send(response(status.ROOM_NOT_FOUND, null));
    }
    if (err.code === "FORBIDDEN") {
      return res.send(response(status.FORBIDDEN, null));
    }
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

// 방 역할 변경
export const handleChangeParticipantRole = async (req, res) => {
/**
  #swagger.summary = '참여 중인 배틀방에서 역할 변경 API'
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
    description: '변경할 역할 정보',
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            role: {
              type: "string",
              enum: ["A", "B", "P"],
              example: "B"
            }
          },
          required: ["role"]
        }
      }
    }
  }

  #swagger.responses[200] = {
    description: "역할 변경 성공",
    schema: {
      isSuccess: true,
      code: "200",
      message: "success!",
      result: {
        participantId: "10",
        roomId: "1",
        userId: "7",
        role: "B",
        joinedAt: "2025-05-25T12:40:00.000Z"
      }
    }
  }

  #swagger.responses[400] = {
    description: "잘못된 요청 (roomId 누락/role 누락 또는 형식 오류)",
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
    description: "권한 오류 (참가자가 아닐 경우 등)",
    schema: {
      isSuccess: false,
      code: "COMMON004",
      message: "금지된 요청입니다.",
      result: null
    }
  }

  #swagger.responses[409] = {
    description: "역할 변경 실패 (이미 해당 역할이거나, A/B 위치 중복 혹은 P 초과 등)",
    schema: {
      isSuccess: false,
      code: "COMMON409",
      message: "역할을 변경할 수 없습니다.",
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
    const token = await checkFormat(req.get("Authorization"));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }

    // 2) path 변수 + body
    const roomId = Number(req.params.roomId);
    if (isNaN(roomId)) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    const { role } = req.body;
    if (!role || !["A", "B", "P"].includes(role)) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    // 3) 서비스 호출
    const result = await changeParticipantRole({
      roomId,
      userId: req.userId,
      newRole: role
    });

    return res.send(response(status.SUCCESS, result));
  } catch (err) {
    console.error("🔴 handleChangeParticipantRole 오류:", err);

    if (err.code === "ROOM_NOT_FOUND") {
      return res.send(response(status.ROOM_NOT_FOUND, null));
    }
    if (["ROLE_ALREADY_TAKEN", "SPECTATOR_FULL", "ALREADY_SAME_ROLE"].includes(err.code)) {
      return res.send(response(status.COMMON409, null));
    }
    if (err.code === "INVALID_ROLE") {
      return res.send(response(status.BAD_REQUEST, null));
    }
    if (err.code === "FORBIDDEN") {
      return res.send(response(status.FORBIDDEN, null));
    }
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

// 직접 주제 설정
export const handleSetRoomTopics = async (req, res) => {
  /*
    #swagger.summary = '유저(방장) 주제 설정 API'
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
      description: '직접 입력한 question & 주제 정보',
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              question: { type: "string", example: "육지 맹수 중 가장 강력한 동물은?" },
              topicA:   { type: "string", example: "사자" },
              topicB:   { type: "string", example: "호랑이" }
            },
            required: ["question", "topicA", "topicB"]
          }
        }
      }
    }

    #swagger.responses[200] = {
      description: "주제 설정 성공",
      schema: {
        isSuccess: true,
        code: 200,
        message: "success!",
        result: {
          roomId:   "1",
          question: "육지 맹수 중 가장 강력한 동물은?",
          topicA:   "사자",
          topicB:   "호랑이",
          updatedAt: "2025-06-03T02:43:13.293Z",
          titles: [
            {
              titleId:    "17",
              side:       "A",
              title:      "사자",
              suggestedBy:"user",
              createdAt:  "2025-06-03T02:43:13.193Z"
            },
            {
              titleId:    "18",
              side:       "B",
              title:      "호랑이",
              suggestedBy:"user",
              createdAt:  "2025-06-03T02:43:13.250Z"
            }
          ]
        }
      }
    }

    #swagger.responses[400] = {
      description: "잘못된 요청 (question/topicA/topicB 누락 등)",
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
      description: "권한 오류 (방장만 설정 가능)",
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
    const token = await checkFormat(req.get("Authorization"));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }

    // 2) path 변수 + body
    const roomId = Number(req.params.roomId);
    const { question, topicA, topicB } = req.body;
    if (isNaN(roomId) || !question || !topicA || !topicB) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    // 3) 서비스 호출 (question, topicA, topicB 전달)
    const result = await setRoomTopics({
      roomId,
      userId:   req.userId,
      question: question.trim(),
      topicA:   topicA.trim(),
      topicB:   topicB.trim()
    });

    // 4) 성공 응답
    return res.send(response(status.SUCCESS, result));
  } catch (err) {
    console.error("🔴 handleSetRoomTopics 오류:", err);
    if (err.code === "ROOM_NOT_FOUND") {
      return res.send(response(status.ROOM_NOT_FOUND, null));
    }
    if (err.code === "FORBIDDEN") {
      return res.send(response(status.FORBIDDEN, null));
    }
    if (err.code === "INVALID_INPUT") {
      return res.send(response(status.BAD_REQUEST, null));
    }
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

// AI 주제 생성 및 저장
export const handleGenerateRoomTopicsAI = async (req, res) => {
  /*
    #swagger.summary = 'AI 주제 생성 후 저장 API'
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
      description: "AI 주제 생성 및 저장 성공",
      content: {
        "application/json": {
          schema: {
            isSuccess: true,
            code: "200",
            message: "success!",
            result: {
              roomId:    "1",
              question:  "기술 발전이 인류의 삶을 개선하는가, 아니면 해치는가?",
              topicA:    "개선한다",
              topicB:    "해친다",
              updatedAt: "2025-06-03T02:43:13.293Z",
              titles: [
                {
                  titleId:     "17",
                  side:        "A",
                  title:       "개선한다",
                  suggestedBy: "ai",
                  createdAt:   "2025-06-03T02:43:13.193Z"
                },
                {
                  titleId:     "18",
                  side:        "B",
                  title:       "해친다",
                  suggestedBy: "ai",
                  createdAt:   "2025-06-03T02:43:13.250Z"
                }
              ]
            }
          }
        }
      }
    }

    #swagger.responses[400] = {
      description: "잘못된 요청 (유효하지 않은 roomId 등)",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "COMMON001",
            message: "잘못된 요청입니다.",
            result: null
          }
        }
      }
    }

    #swagger.responses[401] = {
      description: "토큰 형식 오류",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "MEMBER4006",
            message: "토큰의 형식이 올바르지 않습니다. 다시 확인해주세요.",
            result: null
          }
        }
      }
    }

    #swagger.responses[403] = {
      description: "권한 오류 (방장만 AI 주제 생성 가능)",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "COMMON004",
            message: "금지된 요청입니다.",
            result: null
          }
        }
      }
    }

    #swagger.responses[404] = {
      description: "방을 찾을 수 없음",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "ROOMIN4005",
            message: "방을 찾을 수가 없습니다.",
            result: null
          }
        }
      }
    }

    #swagger.responses[500] = {
      description: "서버 내부 오류",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "COMMON000",
            message: "서버 에러, 관리자에게 문의 바랍니다.",
            result: null
          }
        }
      }
    }
  */
  try {
    const rawToken = req.get("Authorization");
    const token = rawToken && checkFormat(rawToken);
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }

    const roomId = Number(req.params.roomId);
    if (isNaN(roomId)) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    const result = await generateAndSetAITopics({
      roomId,
      userId: req.userId
    });

    return res.send(response(status.SUCCESS, result));
  } catch (err) {
    console.error("🔴 handleGenerateRoomTopicsAI 오류:", err);
    if (err.code === "ROOM_NOT_FOUND") {
      return res.send(response(status.ROOM_NOT_FOUND, null));
    }
    if (err.code === "FORBIDDEN") {
      return res.send(response(status.FORBIDDEN, null));
    }
    if (err.code === "AI_FORMAT_ERROR" || err.code === "AI_ERROR") {
      return res.send(response(status.INTERNAL_SERVER_ERROR, null));
    }
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

// 토론 주제 수정
export const handleUpdateTopics = async (req, res) => {
  /**
    #swagger.summary = '토론 주제 수정 API (관리자 전용)'
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
      description: '수정할 토론 주제 정보',
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              topicA: {
                type: "string",
                description: 'A 측 주제(예: "사자")',
                example: "사자"
              },
              topicB: {
                type: "string",
                description: 'B 측 주제(예: "호랑이")',
                example: "호랑이"
              }
            },
            required: ["topicA", "topicB"]
          }
        }
      }
    }

    #swagger.responses[200] = {
      description: "토론 주제 수정 성공",
      content: {
        "application/json": {
          schema: {
            isSuccess: true,
            code: "200",
            message: "success!",
            result: {
              roomId: "1",
              topicA: "사자",
              topicB: "호랑이"
            }
          }
        }
      }
    }

    #swagger.responses[400] = {
      description: "잘못된 요청 (topicA/topicB 누락 등)",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "COMMON001",
            message: "잘못된 요청입니다.",
            result: null
          }
        }
      }
    }

    #swagger.responses[401] = {
      description: "토큰 형식 오류",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "MEMBER4006",
            message: "토큰의 형식이 올바르지 않습니다. 다시 확인해주세요.",
            result: null
          }
        }
      }
    }

    #swagger.responses[403] = {
      description: "권한 오류 (방장만 수정 가능)",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "COMMON004",
            message: "금지된 요청입니다.",
            result: null
          }
        }
      }
    }

    #swagger.responses[404] = {
      description: "방을 찾을 수 없음",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "ROOMIN4005",
            message: "방을 찾을 수가 없습니다.",
            result: null
          }
        }
      }
    }

    #swagger.responses[500] = {
      description: "서버 내부 오류",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "COMMON000",
            message: "서버 에러, 관리자에게 문의 바랍니다.",
            result: null
          }
        }
      }
    }
  */
  try {
    // 1) 토큰 검증
    const token = await checkFormat(req.get("Authorization"));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }

    // 2) roomId 검증
    const roomId = Number(req.params.roomId);
    if (isNaN(roomId)) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    // 3) request body 검증
    const { topicA, topicB } = req.body;
    if (!topicA || !topicB || typeof topicA !== "string" || typeof topicB !== "string") {
      return res.send(response(status.BAD_REQUEST, null));
    }

    // 4) 서비스 호출
    const result = await updateTopics({
      roomId,
      userId:  req.userId,
      topicA,
      topicB
    });

    // 5) 성공 응답
    return res.send(response(status.SUCCESS, result));
  } catch (err) {
    console.error("🔴 handleUpdateTopics 오류:", err);
    if (err.code === "ROOM_NOT_FOUND") {
      return res.send(response(status.ROOM_NOT_FOUND, null));
    }
    if (err.code === "FORBIDDEN") {
      return res.send(response(status.FORBIDDEN, null));
    }
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

// 방 나가기
export const handleLeaveRoom = async (req, res) => {
  /*
    #swagger.summary = '토론방 떠나기 API'
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
      description: "방 떠나기 성공",
      content: {
        "application/json": {
          schema: {
            isSuccess: true,
            code: "200",
            message: "success!",
            result: {
              roomId: "1",
              userId: "9",
              leftAt: "2025-06-01T11:00:00.000Z"
            }
          }
        }
      }
    }

    #swagger.responses[400] = {
      description: "잘못된 요청 (roomId 형식 오류 등)",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "COMMON001",
            message: "잘못된 요청입니다.",
            result: null
          }
        }
      }
    }

    #swagger.responses[401] = {
      description: "토큰 형식 오류",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "MEMBER4006",
            message: "토큰의 형식이 올바르지 않습니다. 다시 확인해주세요.",
            result: null
          }
        }
      }
    }

    #swagger.responses[403] = {
      description: "권한 오류 (현재 방에 참가 중이지 않은 경우)",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "COMMON004",
            message: "금지된 요청입니다.",
            result: null
          }
        }
      }
    }

    #swagger.responses[404] = {
      description: "방을 찾을 수 없음",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "ROOMIN4005",
            message: "방을 찾을 수가 없습니다.",
            result: null
          }
        }
      }
    }

    #swagger.responses[500] = {
      description: "서버 내부 오류",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "COMMON000",
            message: "서버 에러, 관리자에게 문의 바랍니다.",
            result: null
          }
        }
      }
    }
  */
  try {
    // 1) 토큰 검증
    const token = await checkFormat(req.get("Authorization"));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }

    // 2) roomId 검증
    const roomId = Number(req.params.roomId);
    if (isNaN(roomId)) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    // 3) 서비스 호출
    const result = await leaveRoom({
      roomId,
      userId: req.userId
    });

    // 4) 성공 응답
    return res.send(response(status.SUCCESS, result));
  } catch (err) {
    console.error("🔴 handleLeaveRoom 오류:", err);
    if (err.code === "ROOM_NOT_FOUND") {
      return res.send(response(status.ROOM_NOT_FOUND, null));
    }
    // 아직 방에 참가 중이 아니면 FORBIDDEN 또는 NOT_IN_ROOM
    if (err.code === "NOT_IN_ROOM") {
      return res.send(response(status.FORBIDDEN, null));
    }
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

// 배틀방 전체 정보 불러오기
export const handleGetRoomsInfo = async (req, res, next) => {
  /**
    #swagger.summary = '전체 배틀방 정보 조회 API (페이지네이션)'
    #swagger.security = [{ "BearerAuth": [] }]
    #swagger.tags = ['BattleRoom']

    #swagger.parameters['page'] = {
      in: 'query',
      description: '페이지 번호 (1부터 시작, 기본값 1)',
      required: false,
      type: 'integer',
      example: 1
    }

    #swagger.responses[200] = {
      description: "조회 성공",
      schema: {
        isSuccess: true,
        code: 200,
        message: "success!",
        result: [
          {
            roomId: "1",
            roomName: "첫 번째 방",
            status: "WAITING",
            spectatorCount: 3
          },
          {
            roomId: "2",
            roomName: "두 번째 방",
            status: "PLAYING",
            spectatorCount: 5
          }
        ]
      }
    }

    #swagger.responses[400] = {
      description: "잘못된 요청 (잘못된 쿼리 파라미터 등)",
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
  try{
    // 1) 토큰 검증
    const token = await checkFormat(req.get("Authorization"));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }

    // 2) 쿼리 파라미터에서 page 가져오기 (기본 1)
    const page = req.query.page ? Number(req.query.page) : 1;
    if (isNaN(page) || page < 1) {
      return res.send(response(status.BAD_REQUEST, null));
    }
    const pageSize = 10; // 고정: 한 페이지당 10개

    // 3) 서비스 호출
    const roomsInfo = await getRoomsInfo({ page, pageSize });

    // 4) 응답
    return res.send(response(status.SUCCESS, roomsInfo));
  } catch (err) {
    console.error("🔴 handleGetRoomsInfo 오류:", err);
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

// 방 정보 상세 조회 API (A, B, P 전체 리스트 반환)
export const handleGetRoomDetail = async (req, res) => {
  /*
    #swagger.summary = '방 정보 상세 조회 API (A, B, P 전체 리스트 반환)'
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
      description: "상세 정보 조회 성공",
      schema: {
        isSuccess: true,
        code: 200,
        message: "success!",
        result: {
          roomId:    "1",
          adminId:   "5",
          question:  "육지 맹수 중 가장 강력한 동물은 사자일까 호랑이일까?",
          topicA:    "사자",
          topicB:    "호랑이",
          status:    "WAITING",
          createdAt: "2025-05-25T12:00:00.000Z",
          participantA: [
            { userId: "9", joinedAt: "2025-05-25T12:01:00.000Z" }
          ],
          participantB: [
            { userId: "10", joinedAt: "2025-05-25T12:02:00.000Z" }
          ],
          spectators: [
            { userId: "11", joinedAt: "2025-05-25T12:03:00.000Z" },
            { userId: "12", joinedAt: "2025-05-25T12:04:00.000Z" }
          ]
        }
      }
    }

    #swagger.responses[400] = {
      description: "잘못된 요청 (roomId 형식 오류 등)",
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
      description: "권한 오류 (참가자가 아닐 경우 등)",
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
    const token = await checkFormat(req.get("Authorization"));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }

    // 2) roomId 파라미터 검증
    const roomId = Number(req.params.roomId);
    if (isNaN(roomId)) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    // 3) 서비스 호출
    const detail = await getRoomDetail({ roomId, userId: req.userId });

    // 4) 성공 응답
    return res.send(response(status.SUCCESS, detail));
  } catch (err) {
    console.error("🔴 handleGetRoomDetail 오류:", err);
    if (err.code === "ROOM_NOT_FOUND") {
      return res.send(response(status.ROOM_NOT_FOUND, null));
    }
    if (err.code === "FORBIDDEN") {
      return res.send(response(status.FORBIDDEN, null));
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

// 토론(배틀) 종료 API
export const handleEndBattle = async (req, res) => {
  /**
    #swagger.summary = '토론(배틀) 종료 API'
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
      description: "토론 종료 성공",
      content: {
        "application/json": {
          schema: {
            isSuccess: true,
            code: "200",
            message: "success!",
            result: {
              roomId: "1",
              status: "ENDED",
              endedAt: "2025-05-30T12:00:00.000Z"
            }
          }
        }
      }
    }

    #swagger.responses[400] = {
      description: "잘못된 요청 (roomId 누락 또는 형식 오류 등)",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "COMMON001",
            message: "잘못된 요청입니다.",
            result: null
          }
        }
      }
    }

    #swagger.responses[401] = {
      description: "토큰 형식 오류",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "MEMBER4006",
            message: "토큰의 형식이 올바르지 않습니다. 다시 확인해주세요.",
            result: null
          }
        }
      }
    }

    #swagger.responses[403] = {
      description: "권한 오류 (방장만 종료 가능)",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "COMMON004",
            message: "금지된 요청입니다.",
            result: null
          }
        }
      }
    }

    #swagger.responses[404] = {
      description: "방을 찾을 수 없음",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "ROOMIN4005",
            message: "방을 찾을 수가 없습니다.",
            result: null
          }
        }
      }
    }

    #swagger.responses[409] = {
      description: "잘못된 상태 (시작되지 않았거나 이미 종료된 방)",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "ROOMIN4006",
            message: "유효하지 않은 상태입니다.",
            result: null
          }
        }
      }
    }

    #swagger.responses[500] = {
      description: "서버 내부 오류",
      content: {
        "application/json": {
          schema: {
            isSuccess: false,
            code: "COMMON000",
            message: "서버 에러, 관리자에게 문의 바랍니다.",
            result: null
          }
        }
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
    const result = await endBattle({
      roomId,
      userId: req.userId
    });

    // 4) 성공 응답
    return res.send(response(status.SUCCESS, result));
  } catch (err) {
    console.error("🔴 handleEndBattle 오류:", err);

    if (err.code === "ROOM_NOT_FOUND") {
      return res.send(response(status.ROOM_NOT_FOUND, null));
    }
    if (err.code === "FORBIDDEN") {
      return res.send(response(status.FORBIDDEN, null));
    }
    if (err.code === "INVALID_STATE") {
      // status.ROOM_INVALID_STATE 또는 별도 정의 필요
      return res.send(response(status.ROOM_INVALID_STATE, null));
    }
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

// 토론 최종
export const handleGetFinalResult = async (req, res) => {
/**
  #swagger.summary = '토론 최종 결과 조회 + 포인트 지급 API'
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
    description: "최종 결과 조회 성공",
    schema: {
      isSuccess: true,
      code: "200",
      message: "success!",
      result: {
        voteCount: { A: 1, B: 1 },
        voteWinner: null,
        aiWinner: "B",
        judgementReason: "B가 A보다 논리적이고 설득력 있는 주장을 했으며, 점수 차이가 0.5점 이상으로 B가 승리했다.",
        aiAnalysis: "A: …\nB: …\n최종 승자: B\n판정 이유: B가 더 설득력 …",
        pointsAwarded: 500
      }
    }
  }

  #swagger.responses[400] = {
    description: "잘못된 요청 (roomId 누락 또는 형식 오류 등)",
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
    description: "권한 오류 (방장만 사용 가능)",
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
    description: "이미 포인트 지급 완료됨",
    schema: {
      isSuccess: false,
      code: "COMMON409",
      message: "이미 최종 결과가 처리되었습니다.",
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
    // 1) 토큰 포맷 검사
    const rawToken = req.get("Authorization");
    const token = rawToken && checkFormat(rawToken);
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }

    // 2) roomId 파라미터 검증
    const roomId = Number(req.params.roomId);
    if (isNaN(roomId)) {
      return res.send(response(status.BAD_REQUEST, null));
    }

    // 3) 서비스 호출
    const result = await getFinalResultAndAward({
      roomId,
      userId: req.userId
    });

    // 4) 성공 응답
    return res.send(response(status.SUCCESS, result));
  } catch (err) {
    console.error("🔴 handleGetFinalResult 오류:", err);
    if (err.code === "ROOM_NOT_FOUND") {
      return res.send(response(status.ROOM_NOT_FOUND, null));
    }
    if (err.code === "FORBIDDEN") {
      return res.send(response(status.FORBIDDEN, null));
    }
    if (err.code === "ALREADY_AWARDED") {
      return res.send(response(status.ALREADY_AWARDED, null));
    }
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};