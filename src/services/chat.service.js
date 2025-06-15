import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { prisma } from "../db.config.js";
import { createBattleRoom,
    createBattleTitle as repoCreateBattleTitle,
    countParticipants,
    createRoomParticipant,
    findBattleRoomById,
    listRoomParticipants,
    countRoomSpectators,
    find1BattleRoomById,
    updateBattleRoom,
    saveChatMessage,
    findChatHistoryByRoomId,
    countRoomParticipant, 
    repoCreateRoomParticipant,
    createBattleVote,
    findVotesByRoomId,
    updateRoomParticipantRole,
    updateBattleRoomTopics as repoUpdateBattleRoomTopics,
    findActiveParticipant,
    updateParticipantEndAt,
    deleteExistingParticipationRecords,
    listRoomParticipantsWithUser,
    findChatMessageById
} from '../repositories/chat.repository.js';
import { toCreateRoomDto, 
  responseFromRoom 
} from '../dtos/chat.dto.js';

import { callFilterProfanity,
  callAnalyzeDebate,
  callGenerateTopic,
  callAnalyzeSentiment
} from "../repositories/ai.repository.js";

// 방 생성 service
export const createRoom = async (req) => {
  // 1) DTO 검증: req.body.roomName 한 가지만 봅니다.
  const dto = toCreateRoomDto(req.body);
  if (dto.info === false) {
    return { info: false };
  }
  const roomName = dto.roomName;

  // 2) BattleRoom 생성 (topicA, topicB는 빈 문자열로 두고, status는 "WAITING")
  const room = await createBattleRoom({
    admin:  BigInt(req.userId),
    roomName: roomName,
    topicA: "",             // 실제 토론 주제는 나중에 설정받으므로 빈 문자열
    topicB: "",             // 나중에 “A/B”로 설정할 수 있게끔
    status: "WAITING",
    // createdAt, startedAt, endedAt, approvalNum 등은 Prisma 디폴트값 사용
  });

  // 3) 생성자(요청자)를 반드시 “관전자(P)”로 참가시킵니다.
  const participant = await createRoomParticipant({
    roomId: room.id,
    userId: BigInt(req.userId),
    role: "P",
  });

  // 4) 응답 DTO
  return {
    roomId:    room.id.toString(),
    adminId:   room.admin.toString(),
    roomName:  room.roomName,
    topicA:    room.topicA,
    topicB:    room.topicB,
    status:    room.status,
    createdAt: room.createdAt,
    // 현재 방에 참가자는 방장 한 명(P 역할)뿐입니다.
    participants: [
      {
        participantId: participant.id.toString(),
        userId:        participant.userId.toString(),
        role:          participant.role,      // "P"
        joinedAt:      participant.joinedAt,
        side:          null                   // Side 정보는 아직 없으므로 null
      }
    ],
  };
};

export const joinBattleRoom = async ({ roomId, userId, role, joinedAt }) => {
  // 1) 방 존재 여부 확인
  const room = await findBattleRoomById(roomId);
  if (!room) {
    const err = new Error("ROOM_NOT_FOUND");
    err.code = "ROOM_NOT_FOUND";
    throw err;
  }

  // 2) 방이 이미 종료(ENDED) 상태라면 입장 불가
  if (room.status === "ENDED") {
    const err = new Error("ROOM_ALREADY_ENDED");
    err.code = "ROOM_ALREADY_ENDED";
    throw err;
  }

  // 3) 기존 참여 기록 전부 삭제 (한 유저당 한 곳에만 있게 만들기)
  await deleteExistingParticipationRecords(userId);

  // 4) 새 참가(관전자) 기록 생성
  const record = await repoCreateRoomParticipant({
    roomId,
    userId,
    role,
    joinedAt
  });

  return {
    roomId:        record.roomId,
    participantId: record.id
  };
};

// 방 역할 선택
export const changeParticipantRole = async ({ roomId, userId, newRole }) => {
  // 1) 방 존재 여부 확인
  const room = await findBattleRoomById(BigInt(roomId));
  if (!room) {
    const err = new Error("ROOM_NOT_FOUND");
    err.code = "ROOM_NOT_FOUND";
    throw err;
  }

  // 2) 이미 같은 역할인지 확인
  const alreadySameRole = await prisma.roomParticipant.findFirst({
    where: {
      roomId: BigInt(roomId),
      userId: BigInt(userId),
      role:   newRole
    }
  });
  if (alreadySameRole) {
    const err = new Error("ALREADY_SAME_ROLE");
    err.code = "ALREADY_SAME_ROLE";
    throw err;
  }

  // 3) A/B 슬롯이 가득 찼거나, P 슬롯이 넘쳤는지 검사
  if (newRole === "A" || newRole === "B") {
    const existingCount = await countParticipants({
      roomId: BigInt(roomId),
      role:   newRole
    });
    if (existingCount >= 1) {
      const err = new Error("ROLE_ALREADY_TAKEN");
      err.code = "ROLE_ALREADY_TAKEN";
      throw err;
    }
  } else if (newRole === "P") {
    const spectatorCount = await countParticipants({
      roomId: BigInt(roomId),
      role:   "P"
    });
    if (spectatorCount >= 8) {
      const err = new Error("SPECTATOR_FULL");
      err.code = "SPECTATOR_FULL";
      throw err;
    }
  } else {
    const err = new Error("INVALID_ROLE");
    err.code = "INVALID_ROLE";
    throw err;
  }

  // 4) 역할 변경
  const updatedRecord = await updateRoomParticipantRole({
    roomId:  BigInt(roomId),
    userId:  BigInt(userId),
    newRole
  });

  return {
    participantId: updatedRecord.id.toString(),
    roomId:        updatedRecord.roomId.toString(),
    userId:        updatedRecord.userId.toString(),
    role:          updatedRecord.role,
    joinedAt:      updatedRecord.joinedAt.toISOString()
  };
};

// 배틀방 주제 설정
export const setRoomTopics = async ({ roomId, userId, question, topicA, topicB }) => {
  // 1) 방 존재 여부 확인
  const room = await findBattleRoomById(BigInt(roomId));
  if (!room) {
    const err = new Error("ROOM_NOT_FOUND");
    err.code = "ROOM_NOT_FOUND";
    throw err;
  }

  // 2) 방장인지 확인
  if (room.admin.toString() !== String(userId)) {
    const err = new Error("FORBIDDEN");
    err.code = "FORBIDDEN";
    throw err;
  }

  // 3) 입력값 검증 (question/topicA/topicB 모두 필수)
  if (
    !question || typeof question !== "string" ||
    !topicA   || typeof topicA   !== "string" ||
    !topicB   || typeof topicB   !== "string"
  ) {
    const err = new Error("INVALID_INPUT");
    err.code = "INVALID_INPUT";
    throw err;
  }

  // 4) battle_room 테이블 업데이트 (question, topicA, topicB 모두 저장)
  const updatedRoom = await repoUpdateBattleRoomTopics(roomId, {
    question: question.trim(),
    topicA:   topicA.trim(),
    topicB:   topicB.trim()
  });

  // 5) battle_title 기록 추가 (suggestedBy: "user")
  const titleARecord = await repoCreateBattleTitle({
    roomId,
    side:        "A",
    title:       topicA.trim(),
    suggestedBy: "user"
  });
  const titleBRecord = await repoCreateBattleTitle({
    roomId,
    side:        "B",
    title:       topicB.trim(),
    suggestedBy: "user"
  });

  // 6) 응답 객체: Date 객체 그대로 넘김 → Express가 자동 ISO 문자열로 변환
  return {
    roomId:    updatedRoom.id.toString(),
    question:  updatedRoom.question,   // question도 포함
    topicA:    updatedRoom.topicA,
    topicB:    updatedRoom.topicB,
    updatedAt: updatedRoom.updatedAt,  // Date 객체로 반환
    titles: [
      {
        titleId:    titleARecord.id.toString(),
        side:       titleARecord.side,
        title:      titleARecord.title,
        suggestedBy: titleARecord.suggestedBy,
        createdAt:  titleARecord.createdAt  // Date 객체 그대로
      },
      {
        titleId:    titleBRecord.id.toString(),
        side:       titleBRecord.side,
        title:      titleBRecord.title,
        suggestedBy: titleBRecord.suggestedBy,
        createdAt:  titleBRecord.createdAt
      }
    ]
  };
};

// AI 주제 설정
export const generateAndSetAITopics = async ({ roomId, userId }) => {
  // 1) 방 존재 확인
  const room = await findBattleRoomById(BigInt(roomId));
  if (!room) {
    const err = new Error("ROOM_NOT_FOUND");
    err.code = "ROOM_NOT_FOUND";
    throw err;
  }

  // 2) 방장인지 확인
  if (room.admin.toString() !== String(userId)) {
    const err = new Error("FORBIDDEN");
    err.code = "FORBIDDEN";
    throw err;
  }

  // 3) AI로부터 주제 생성 (FastAPI 응답 예시: { topic, option_a, option_b })
  const aiResponse = await callGenerateTopic();
  // 예: aiResponse = { topic: "...", option_a: "...", option_b: "..." }
  if (
    !aiResponse.topic ||
    typeof aiResponse.topic !== "string" ||
    !aiResponse.option_a ||
    !aiResponse.option_b
  ) {
    const err = new Error("AI_FORMAT_ERROR");
    err.code = "AI_FORMAT_ERROR";
    throw err;
  }

  // 4) AI가 준 데이터를 분리
  const question = aiResponse.topic.trim();
  const topicA   = aiResponse.option_a.trim();
  const topicB   = aiResponse.option_b.trim();

  // 5) battle_room 업데이트 (question, topicA, topicB 모두 저장)
  const updatedRoom = await repoUpdateBattleRoomTopics(roomId, { question, topicA, topicB });

  // 6) battle_title 기록 추가 (suggestedBy: "ai")
  const titleARecord = await repoCreateBattleTitle({
    roomId,
    side:        "A",
    title:       topicA,
    suggestedBy: "ai"
  });
  const titleBRecord = await repoCreateBattleTitle({
    roomId,
    side:        "B",
    title:       topicB,
    suggestedBy: "ai"
  });

  return {
    roomId:    updatedRoom.id.toString(),
    question:  updatedRoom.question,
    topicA:    updatedRoom.topicA,
    topicB:    updatedRoom.topicB,
    // Prisma 스키마에 updatedAt 필드가 없으므로, createdAt을 대신 반환합니다.
    updatedAt: updatedRoom.createdAt.toISOString(),
    titles: [
      {
        titleId:     titleARecord.id.toString(),
        side:        titleARecord.side,
        title:       titleARecord.title,
        suggestedBy: titleARecord.suggestedBy,
        createdAt:   titleARecord.createdAt.toISOString()
      },
      {
        titleId:     titleBRecord.id.toString(),
        side:        titleBRecord.side,
        title:       titleBRecord.title,
        suggestedBy: titleBRecord.suggestedBy,
        createdAt:   titleBRecord.createdAt.toISOString()
      }
    ]
  };
};

// 유저가 참여 중인 방 떠나기 기능
export const leaveRoom = async ({ roomId, userId }) => {
  // 1) 방 존재 여부
  const room = await findBattleRoomById(BigInt(roomId));
  if (!room) {
    const err = new Error("ROOM_NOT_FOUND");
    err.code = "ROOM_NOT_FOUND";
    throw err;
  }

  // 2) 해당 유저가 아직 endAt = null인 상태(활성 참가자)인지 확인
  const participant = await findActiveParticipant({ roomId, userId });
  if (!participant) {
    // 이미 방에 없거나, endAt이 설정되어 있으면 떠날 대상이 아님
    const err = new Error("NOT_IN_ROOM");
    err.code = "NOT_IN_ROOM";
    throw err;
  }

  // 3) endAt(떠난 시각) 업데이트
  const updated = await updateParticipantEndAt(participant.id);

  // 4) 성공 시 떠난 시간 반환
  return {
    roomId:  updated.roomId.toString(),
    userId:  updated.userId.toString(),
    leftAt:  updated.endAt.toISOString()
  };
};

// 토론 주제 수정 가능
export const updateTopics = async ({ roomId, userId, topicA, topicB }) => {
  // 1) 방 존재 여부 확인
  const room = await findBattleRoomById(BigInt(roomId));
  if (!room) {
    const err = new Error("ROOM_NOT_FOUND");
    err.code = "ROOM_NOT_FOUND";
    throw err;
  }

  // 2) 방장(admin)인지 확인
  if (room.admin.toString() !== String(userId)) {
    const err = new Error("FORBIDDEN");
    err.code = "FORBIDDEN";
    throw err;
  }

  // 3) status가 END나 PLAYING 이어도 상관 없으면 그대로 업데이트합니다.
  //    (원한다면 “PLAYING” 상태에서만 수정 가능하도록 체크)
  const updatedRoom = await updateBattleRoom(roomId, {
    topicA: topicA,
    topicB: topicB
  });

  return {
    roomId:  updatedRoom.id.toString(),
    topicA:  updatedRoom.topicA,
    topicB:  updatedRoom.topicB
  };
};

// 배틀방 전체 정보 불러오기
export const getRoomsInfo = async ({ page, pageSize }) => {
  const skip = (page - 1) * pageSize;
  const take = pageSize;

  // 1) DB에서 전체 방(id, status, roomName) 조회
  const allRooms = await prisma.battleRoom.findMany({
    select: {
      id:       true,
      status:   true,
      roomName: true
    }
  });

  // 2) 상태별 순서 정의: WAITING → PLAYING → ENDED
  const statusOrder = { WAITING: 0, PLAYING: 1, ENDED: 2 };

  // 3) 자바스크립트로 정렬
  allRooms.sort((a, b) => {
    const na = statusOrder[a.status] ?? 999;
    const nb = statusOrder[b.status] ?? 999;
    return na - nb;
  });

  // 4) 페이지네이션
  const roomsPage = allRooms.slice(skip, skip + take);

  // 5) 각 방마다 관전자 수를 붙여서 응답 형태로 가공
  const result = await Promise.all(
    roomsPage.map(async (room) => {
      const spectatorCount = await countRoomSpectators(room.id);
      return {
        roomId:         room.id.toString(),
        roomName:       room.roomName,
        status:         room.status,
        spectatorCount: spectatorCount
      };
    })
  );

  return result;
};

// 방 정보 불러오기
export const getRoomInfo = async ({ roomId }) => {
  // 1) 방 기본 정보
  const room = await findBattleRoomById(roomId);
  if (!room) {
    return res.send(response(status.ROOM_NOT_FOUND, null));
  }
  // 2) 참가자 목록
  const participants = await listRoomParticipants(roomId);

  // 3) 관전자 수 (role === 'P')
  const spectatorCount = await countRoomSpectators(roomId);

  // 4) 응답 객체 조합
  return {
    roomId:         room.id,
    adminId:        room.admin,
    topicA:         room.topicA,
    topicB:         room.topicB,
    status:         room.status,
    createdAt:      room.createdAt,
    participants,   // [{ userId, role, joinedAt }, …]
    spectatorCount  // number
  };
};

// // 방 상세 정보 불러오기
// export const getRoomDetail = async ({ roomId, userId }) => {
//   // 1) 방 존재 여부 확인
//   const room = await findBattleRoomById(BigInt(roomId));
//   if (!room) {
//     const err = new Error("ROOM_NOT_FOUND");
//     err.code = "ROOM_NOT_FOUND";
//     throw err;
//   }

//   // 2) 사용자가 해당 방의 참가자(또는 관전자)인지 확인
//   const isParticipant = await prisma.roomParticipant.count({
//     where: {
//       roomId: BigInt(roomId),
//       userId: BigInt(userId),
//     },
//   });
//   if (isParticipant === 0) {
//     const err = new Error("FORBIDDEN");
//     err.code = "FORBIDDEN";
//     throw err;
//   }

//   // 3) 방 참여자 전체 조회
//   const participants = await listRoomParticipants(BigInt(roomId));
//   // participants = [{ userId, role, joinedAt }, …]

//   // 4) A, B, P별로 배열 분리
//   const participantA = participants
//     .filter((p) => p.role === "A")
//     .map((p) => ({
//       userId: p.userId.toString(),
//       joinedAt: p.joinedAt.toISOString(),
//     }));

//   const participantB = participants
//     .filter((p) => p.role === "B")
//     .map((p) => ({
//       userId: p.userId.toString(),
//       joinedAt: p.joinedAt.toISOString(),
//     }));

//   const spectators = participants
//     .filter((p) => p.role === "P")
//     .slice(0, 8) // 최대 8명
//     .map((p) => ({
//       userId: p.userId.toString(),
//       joinedAt: p.joinedAt.toISOString(),
//     }));

//   // 5) 결과 객체 반환
//   return {
//     roomId:    room.id.toString(),
//     adminId:   room.admin.toString(),
//     question:  room.question,
//     topicA:    room.topicA,
//     topicB:    room.topicB,
//     status:    room.status,
//     createdAt: room.createdAt.toISOString(),
//     participantA, // A 역할 참가자 배열
//     participantB, // B 역할 참가자 배열
//     spectators   // P 역할(관전자) 배열 (최대 8명)
//   };
// };

export const getRoomDetail = async ({ roomId, userId }) => {
  // 1) 방 존재 여부 확인
  const room = await findBattleRoomById(BigInt(roomId));
  if (!room) {
    const err = new Error("ROOM_NOT_FOUND");
    err.code = "ROOM_NOT_FOUND";
    throw err;
  }

  // 2) 해당 유저가 참가자인지 확인
  const isParticipant = await prisma.roomParticipant.count({
    where: { roomId: BigInt(roomId), userId: BigInt(userId), endAt: null },
  });
  if (isParticipant === 0) {
    const err = new Error("FORBIDDEN");
    err.code = "FORBIDDEN";
    throw err;
  }

  // 3) 방 참여자 전체 조회 (nickname + ranking.tier 포함)
  const participants = await listRoomParticipantsWithUser(BigInt(roomId));
  // participants = [
  //   { userId, role, joinedAt, user: { nickname, ranking: { tier } } }, …
  // ]

  // 4) 역할별로 분리하면서, role · nickname · tier · joinedAt 모두 꺼내기
  const participantA = participants
    .filter(p => p.role === "A")
    .map(p => ({
      userId:   p.userId.toString(),
      role:     p.role,                  // role 포함
      nickname: p.user.nickname,
      tier:     p.user.ranking.tier,     // tier 포함
      joinedAt: p.joinedAt.toISOString(),
    }));

  const participantB = participants
    .filter(p => p.role === "B")
    .map(p => ({
      userId:   p.userId.toString(),
      role:     p.role,
      nickname: p.user.nickname,
      tier:     p.user.ranking.tier,
      joinedAt: p.joinedAt.toISOString(),
    }));

  const spectators = participants
    .filter(p => p.role === "P")
    .slice(0, 8)
    .map(p => ({
      userId:   p.userId.toString(),
      role:     p.role,
      nickname: p.user.nickname,
      tier:     p.user.ranking.tier,
      joinedAt: p.joinedAt.toISOString(),
    }));

  // 5) 최종 반환
  return {
    roomId:        room.id.toString(),
    adminId:       room.admin.toString(),
    question:      room.question,
    topicA:        room.topicA,
    topicB:        room.topicB,
    status:        room.status,
    createdAt:     room.createdAt.toISOString(),
    participantA,
    participantB,
    spectators
  };
};

// 배틀방 시작하기
export const startBattle = async ({ roomId, userId }) => {
  // 1) 방 조회
  const room = await find1BattleRoomById(roomId);
  if (!room) {
    throw new Error('ROOM_NOT_FOUND');
  }
  // 2) 방장만 시작 가능
  if (room.admin !== BigInt(userId)) {
    throw new Error('FORBIDDEN');
  }
  // 3) 대기 상태인 경우만
  if (room.status !== 'WAITING') {
    throw new Error('INVALID_STATE');
  }
  // 4) 상태 변경 및 시작 시간 기록
  const updated = await updateBattleRoom(roomId, {
    status:    'PLAYING',
    startedAt: new Date()
  });
  return {
    roomId:    updated.id,
    status:    updated.status,
    startedAt: updated.startedAt
  };
};

export const createChat = async ({ roomId, userId, message }) => {
  // 1) 욕설 필터링
  let finalMessage = message;
  try {
    const { filtered_text } = await callFilterProfanity(message);
    finalMessage = filtered_text;
  } catch (err) {
    console.error("🔥 AI 필터링 실패, 원본 메시지로 저장합니다:", err.message);
  }

  // 2) 감정 분석
  let warning = false;
  let emotion = null;
  let probabilities = null;
  try {
    const sentiment = await callAnalyzeSentiment(finalMessage);
    warning = sentiment.warning;
    emotion = sentiment.emotion;
    probabilities = sentiment.probabilities;
  } catch (err) {
    console.error("🔴 감정분석 실패:", err.message);
  }

  // 3) 내가 실제 어느 역할인지 조회
  const participant = await findActiveParticipant({
    roomId: BigInt(roomId),
    userId: BigInt(userId)
  });
  if (!participant) {
    const err = new Error("FORBIDDEN");
    err.code = "FORBIDDEN";
    throw err;
  }

  // 4) 반드시 내가 속한 role("A" 또는 "B" 또는 "P") 로만 저장
  const sideToSave = participant.role;

  // 5) 채팅 저장
  const chatRecord = await saveChatMessage({
    roomId:  BigInt(roomId),
    userId:  BigInt(userId),
    side:    sideToSave,
    message: finalMessage,
  });

  // 6) 저장된 레코드에 감정분석 결과 추가해서 반환
  return {
    id:         chatRecord.id,
    roomId:     chatRecord.roomId,
    userId:     chatRecord.userId,
    side:       chatRecord.side,
    message:    chatRecord.message,
    createdAt:  chatRecord.createdAt,
    warning,
    emotion,
    probabilities
  };
};

// 1) 실제 채팅 저장 함수
export const createChatMessage = async ({ roomId, userId, side, message }) => {
  // 1) 방 존재 여부 확인
  const room = await prisma.battleRoom.findUnique({
    where: { id: BigInt(roomId) },
  });
  if (!room) {
    const err = new Error("ROOM_NOT_FOUND");
    err.code = "ROOM_NOT_FOUND";
    throw err;
  }

  // 2) userId가 해당 방의 참가자/관전자인지 확인
  const cnt = await prisma.roomParticipant.count({
    where: {
      roomId: BigInt(roomId),
      userId: BigInt(userId),
      endAt: null,
    },
  });
  if (cnt === 0) {
    const err = new Error("FORBIDDEN");
    err.code = "FORBIDDEN";
    throw err;
  }

  // 3) 새 채팅 레코드를 생성
  const record = await prisma.chatMessage.create({
    data: {
      roomId: BigInt(roomId),
      userId: BigInt(userId),
      side,       // "A" 또는 "B"
      message,    // 채팅 본문
      // createdAt 은 자동으로 들어감
    },
  });

  return record;
};

// 단일 채팅 감정 분석
export const getMessageSentiment = async ({ roomId, userId, messageId }) => {
  // 1) 메시지가 있는지
  const msg = await findChatMessageById(messageId);
  if (!msg || msg.roomId.toString() !== roomId.toString()) {
    const e = new Error("MESSAGE_NOT_FOUND"); e.code = "MESSAGE_NOT_FOUND";
    throw e;
  }
  // 2) 조회 권한 확인 (방 참가자/관전자)
  const cnt = await prisma.roomParticipant.count({
    where: {
      roomId: BigInt(roomId),
      userId: BigInt(userId),
      endAt: null
    }
  });
  if (cnt === 0) {
    const e = new Error("FORBIDDEN"); e.code = "FORBIDDEN";
    throw e;
  }
  // 3) AI 감정 분석 호출
  const sentiment = await callAnalyzeSentiment(msg.message);
  // 4) 결과 조합
  return {
    messageId:  msg.id.toString(),
    roomId:     msg.roomId.toString(),
    userId:     msg.userId.toString(),
    side:       msg.side,
    createdAt:  msg.createdAt,
    sentiment   // { emotion, probabilities, warning }
  };
};

// 채팅 정보 조회
export const getChatHistory = async (roomId) => {
  const history = await findChatHistoryByRoomId(roomId);
  return history;
};

// export const getChatHistory = async ({ roomId, userId }) => {
//   // 1) 방 존재 확인
//   const room = await findBattleRoomById(roomId);
//   if (!room) {
//     const err = new Error("ROOM_NOT_FOUND");
//     err.code = "ROOM_NOT_FOUND";
//     throw err;
//   }

//   //2) userId가 이 방의 참가자 혹은 관전자 인지 확인
//   const cnt = await countRoomParticipant(roomId, userId);
//   if (cnt === 0) {
//     const err = new Error("FORBIDDEN");
//     err.code = "FORBIDDEN";
//     throw err;
//   }

//   //3) 채팅 메시지 조회
//   const msgs = await findChatMessagesByRoom(roomId);

//    //4) A/B 분리
//   const sideA = [], sideB = [];
//   msgs.forEach(m => {
//     if (m.side === "A") sideA.push(m);
//     else                sideB.push(m);
//   });

//   return { sideA, sideB };
//   };

export const voteInRoom = async ({ roomId, userId, vote }) => {
  // 1) 방 존재 여부 확인
  const room = await findBattleRoomById(BigInt(roomId));
  if (!room) {
    const err = new Error("ROOM_NOT_FOUND");
    err.code = "ROOM_NOT_FOUND";
    throw err;
  }

  // 2) 요청한 유저가 방에 참여 중인지 검사 (A/B/P 모두 가능)
  const isInRoom = await prisma.roomParticipant.count({
    where: {
      roomId: BigInt(roomId),
      userId: BigInt(userId),
      endAt:  null
    }
  });
  if (isInRoom === 0) {
    const err = new Error("FORBIDDEN");
    err.code = "FORBIDDEN";
    throw err;
  }

  // 3) 중복 투표 체크
  const existing = await prisma.battleVote.findFirst({
    where: {
      roomId: BigInt(roomId),
      userId: BigInt(userId)
    }
  });
  if (existing) {
    const err = new Error("ALREADY_VOTED");
    err.code = "ALREADY_VOTED";
    throw err;
  }

  // 4) 투표 저장
  await createBattleVote({
    roomId: BigInt(roomId),
    userId: BigInt(userId),
    vote
  });

  // 5) 전체 집계 조회
  const all = await findVotesByRoomId(BigInt(roomId));
  let countA = 0;
  let countB = 0;
  all.forEach(r => {
    if (r.vote === "A") countA++;
    else countB++;
  });

  return {
    countA,
    countB,
    total: all.length,
    votes: all.map(r => ({
      id:        r.id.toString(),
      roomId:    r.roomId.toString(),
      userId:    r.userId.toString(),
      vote:      r.vote,
      createdAt: r.createdAt.toISOString()
    }))
  };
};

export const getVoteHistory = async ({ roomId, userId }) => {
  // 1) 방 존재 여부
  const room = await findBattleRoomById(roomId);
  if (!room) {
    const err = new Error("ROOM_NOT_FOUND");
    err.code = "ROOM_NOT_FOUND";
    throw err;
  }

  // 2) userId가 해당 방의 참가자/관전자 인지 확인
  const cnt = await countRoomParticipant(roomId, userId);
  if (cnt === 0) {
    const err = new Error("FORBIDDEN");
    err.code = "FORBIDDEN";
    throw err;
  }

  // 3) 모든 투표 기록 조회
  const rows = await findVotesByRoomId(roomId);

  let countA = 0;
  let countB = 0;
  const votes = rows.map((r) => {
    if (r.vote === "A") countA += 1;
    else if (r.vote === "B") countB += 1;
    return {
      id:        r.id.toString(),
      roomId:    r.roomId.toString(),
      userId:    r.userId.toString(),
      vote:      r.vote,
      createdAt: r.createdAt.toISOString(),
    };
  });

  return {
    countA,
    countB,
    total: votes.length,
    votes
  };
};

// 배틀방 종료
export const endBattle = async ({ roomId, userId }) => {
  // 1) 방 존재 여부 확인
  const room = await findBattleRoomById(roomId);
  if (!room) {
    const err = new Error("ROOM_NOT_FOUND");
    err.code = "ROOM_NOT_FOUND";
    throw err;
  }

  // 2) 방장만 종료 가능
  if (room.admin !== BigInt(userId)) {
    const err = new Error("FORBIDDEN");
    err.code = "FORBIDDEN";
    throw err;
  }

  // 3) 현재 상태가 PLAYING이어야 종료 가능
  if (room.status !== "PLAYING") {
    const err = new Error("INVALID_STATE");
    err.code = "INVALID_STATE";
    throw err;
  }

  // 4) 상태 변경 및 종료 시간 기록
  const updated = await updateBattleRoom(roomId, {
    status:    "ENDED",
    endedAt:   new Date()
  });

  return {
    roomId:  updated.id.toString(),
    status:  updated.status,
    endedAt: updated.endedAt.toISOString()
  };
};

export const getFinalResultAndAward = async ({ roomId, userId }) => {
  // 1) 방 확인
  const room = await prisma.battleRoom.findUnique({
    where:  { id: BigInt(roomId) },
    select: { id: true, admin: true, topicA: true, topicB: true, isAwarded: true }
  });
  if (!room) {
    const e = new Error("ROOM_NOT_FOUND"); e.code = "ROOM_NOT_FOUND";
    throw e;
  }

  // 2) 참여자 여부 확인 (A/B/P 구분 없이, endAt: null)
  const isParticipant = await prisma.roomParticipant.count({
    where: { roomId: BigInt(roomId), userId: BigInt(userId), endAt: null }
  });
  if (isParticipant === 0) {
    const e = new Error("FORBIDDEN"); e.code = "FORBIDDEN";
    throw e;
  }

  // 3) 관전자 투표 집계
  const votes = await prisma.battleVote.findMany({
    where:  { roomId: BigInt(roomId) },
    select: { vote: true }
  });
  let countA = 0, countB = 0;
  votes.forEach(v => v.vote === "A" ? countA++ : countB++);

  let voteWinner = null;
  if (countA > countB)      voteWinner = "A";
  else if (countB > countA) voteWinner = "B";

  // 4) AI 토론 분석
  const debate = await fetchDebateContentAsString(roomId);
  const aiRes  = await callAnalyzeDebate({
    topic:   `${room.topicA} vs ${room.topicB}`,
    content: debate
  });
  const aiWinner        = aiRes.winner;
  const aiAnalysisText  = aiRes.result;
  const judgementReason = aiRes.judgement_reason;

  // 5) 포인트 지급: 방장이 처음 요청했을 때만
  if (!room.isAwarded && room.admin.toString() === String(userId)) {
    const participants = await prisma.roomParticipant.findMany({
      where: { roomId: BigInt(roomId) },
      select: { userId: true, role: true }
    });
    const sideA = participants.find(p => p.role === "A")?.userId ?? null;
    const sideB = participants.find(p => p.role === "B")?.userId ?? null;

    const awards = [];
    if (voteWinner === "A" && sideA) awards.push({ userId: sideA, points: 500, reason: "관전자 투표 우승 보상" });
    if (voteWinner === "B" && sideB) awards.push({ userId: sideB, points: 500, reason: "관전자 투표 우승 보상" });
    if (aiWinner   === "A" && sideA) awards.push({ userId: sideA, points: 500, reason: "AI 토론 분석 우승 보상" });
    if (aiWinner   === "B" && sideB) awards.push({ userId: sideB, points: 500, reason: "AI 토론 분석 우승 보상" });

    let totalPointsAwarded = 0;

    for (const a of awards) {
      await prisma.pointTransaction.create({
        data: {
          userId:       BigInt(a.userId),
          change:       a.points,
          reason:       a.reason,
          battleRoomId: BigInt(roomId),
          createdAt:    new Date()
        }
      });
      await prisma.user.update({
        where: { id: BigInt(a.userId) },
        data:  { point: { increment: a.points } }
      });
      totalPointsAwarded += a.points;
    }

    await prisma.battleRoom.update({
      where: { id: BigInt(roomId) },
      data:  { isAwarded: true, status: "ENDED" }
    });
  }

  // 6) 최종 지급된 총 포인트 합계 조회
  const txs = await prisma.pointTransaction.findMany({
    where:  { battleRoomId: BigInt(roomId) },
    select: { change: true }
  });
  const totalPoints = txs.reduce((sum, t) => sum + t.change, 0);

  // 7) 결과 반환
  return {
    voteCount:      { A: countA, B: countB },
    voteWinner,
    aiWinner,
    judgementReason,
    aiAnalysis:     aiAnalysisText,
    pointsAwarded:  totalPoints
  };
};


async function fetchDebateContentAsString(roomId) {
  const messages = await prisma.chatMessage.findMany({
    where: { roomId: BigInt(roomId) },
    orderBy: { createdAt: "asc" }
  });
  return messages
    .map(m => `${m.side === "A" ? "A" : "B"}: ${m.message}`)
    .join("\n");
}

export const rematchRoom = async ({ roomId, userId }) => {
  // 1) 원본 방 존재 여부 확인
  const original = await prisma.battleRoom.findUnique({
    where: { id: BigInt(roomId) },
    select: { id: true, admin: true, question: true, topicA: true, topicB: true, status: true }
  });
  if (!original) {
    const err = new Error("ROOM_NOT_FOUND"); err.code = "ROOM_NOT_FOUND";
    throw err;
  }

  // 2) 원본 방이 종료 상태여야만 리매치 가능
  if (original.status !== "ENDED") {
    const err = new Error("INVALID_STATE"); err.code = "INVALID_STATE";
    throw err;
  }

  // 3) 원본 방의 방장만 리매치 가능
  if (original.admin.toString() !== String(userId)) {
    const err = new Error("FORBIDDEN"); err.code = "FORBIDDEN";
    throw err;
  }

  // 4) 새로운 방 생성 (주제는 원본과 동일, 상태는 WAITING)
  const newRoom = await createBattleRoom({
    admin:      BigInt(userId),
    roomName:   `리매치: ${original.question || `${original.topicA} vs ${original.topicB}`}`,
    question:   original.question,
    topicA:     original.topicA,
    topicB:     original.topicB,
    status:     "WAITING"
  });

  // 5) 방장(요청자)을 자동으로 관전자(P)로 참여시킴
  await createRoomParticipant({
    roomId:   newRoom.id,
    userId:   BigInt(userId),
    role:     "P",
    joinedAt: new Date()
  });

  // 6) 응답 DTO 반환
  return {
    roomId:    newRoom.id.toString(),
    adminId:   newRoom.admin.toString(),
    question:  newRoom.question,
    topicA:    newRoom.topicA,
    topicB:    newRoom.topicB,
    status:    newRoom.status,
    createdAt: newRoom.createdAt
  };
};