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
    findChatMessagesByRoom,
    countRoomParticipant,
    createBattleVote,
    findVotesByRoomId,
    getRoomsInfoRep,
    findAllChatMessagesByRoomId,
    findBattleVotesByRoomId,
    updateRoomParticipantRole,
    updateBattleRoomTopics,
    findActiveParticipant,
    updateParticipantEndAt
} from '../repositories/chat.repository.js';
import { toCreateRoomDto, 
  responseFromRoom 
} from '../dtos/chat.dto.js';

import { callFilterProfanity,
  callAnalyzeDebate,
  callGenerateTopic
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

// 방 참가 service
export const joinRoom = async ({ roomId, userId, role }) => {
  // 1) “A” 또는 “B” 역할을 원하면, 해당 역할이 이미 찬성/반대 1명까지만 허용
  if (role === "A" || role === "B") {
    const cnt = await countParticipants({ roomId, role });
    if (cnt >= 1) {
      const e = new Error("ROLE_ALREADY_TAKEN");
      e.code = "ROLE_ALREADY_TAKEN";
      throw e;
    }
  }
  // 2) “P” 역할(관전자)은 최대 8명
  if (role === "P") {
    const cnt = await countParticipants({ roomId, role });
    if (cnt >= 8) {
      const e = new Error("SPECTATOR_FULL");
      e.code = "SPECTATOR_FULL";
      throw e;
    }
  }
  // 3) 이미 해당 방에 해당 유저가 role(= side)에 참여했는지 체크
  const already = await countParticipants({ roomId, role, userId });
  if (already > 0) {
    const e = new Error("ALREADY_JOINED");
    e.code = "ALREADY_JOINED";
    throw e;
  }
  // 4) 실제 참가자 레코드 생성
  const participant = await createRoomParticipant({ roomId, userId, role });
  return {
    participantId: participant.id.toString(),
    roomId:        participant.roomId.toString(),
    userId:        participant.userId.toString(),
    role:          participant.role,
    joinedAt:      participant.joinedAt,
    side:          participant.side || null
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

  // 2) 해당 유저가 이미 이 방에 참가 중인지 확인
  const existingCount = await countParticipants({ roomId: BigInt(roomId), role: newRole, userId });
  // 실제로 같은 역할을 갖고 있는지 확인 (A/B/P 중복 방지)
  const alreadySameRole = await prisma.roomParticipant.findFirst({
    where: {
      roomId: BigInt(roomId),
      userId: BigInt(userId),
      role: newRole
    }
  });
  if (alreadySameRole) {
    const err = new Error("ALREADY_SAME_ROLE");
    err.code = "ALREADY_SAME_ROLE";
    throw err;
  }

  // 3) 새로운 역할에 따른 인원 제한 확인
  if (newRole === "A" || newRole === "B") {
    // A/B 자리 각각 1명만 허용
    if (existingCount >= 1) {
      const err = new Error("ROLE_ALREADY_TAKEN");
      err.code = "ROLE_ALREADY_TAKEN";
      throw err;
    }
  } else if (newRole === "P") {
    // 관전자(P)는 최대 8명
    const spectatorCount = await countParticipants({ roomId: BigInt(roomId), role: "P" });
    if (spectatorCount >= 8) {
      const err = new Error("SPECTATOR_FULL");
      err.code = "SPECTATOR_FULL";
      throw err;
    }
  } else {
    // 허용되지 않는 role이 들어온 경우
    const err = new Error("INVALID_ROLE");
    err.code = "INVALID_ROLE";
    throw err;
  }

  // 4) 실제 역할 변경 수행
  const updatedRecord = await updateRoomParticipantRole({
    roomId: BigInt(roomId),
    userId: BigInt(userId),
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
export const setRoomTopics = async ({ roomId, userId, topicA, topicB }) => {
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

  // 3) 필수 입력 검증
  if (!topicA || !topicB || typeof topicA !== "string" || typeof topicB !== "string") {
    const err = new Error("INVALID_INPUT");
    err.code = "INVALID_INPUT";
    throw err;
  }

  // 4) battle_room 테이블 업데이트
  const updatedRoom = await updateBattleRoomTopics(roomId, { topicA, topicB });

  // 5) battle_title 기록 추가 (suggestedBy: "user")
  const titleARecord = await repoCreateBattleTitle({
    roomId,
    side: "A",
    title: topicA,
    suggestedBy: "user"
  });
  const titleBRecord = await repoCreateBattleTitle({
    roomId,
    side: "B",
    title: topicB,
    suggestedBy: "user"
  });

  return {
    roomId:   updatedRoom.id.toString(),
    topicA:   updatedRoom.topicA,
    topicB:   updatedRoom.topicB,
    updatedAt: updatedRoom.updatedAt, // Prisma에 updatedAt 필드가 있다면 포함
    titles: [
      {
        titleId:    titleARecord.id.toString(),
        side:       titleARecord.side,
        title:      titleARecord.title,
        suggestedBy: titleARecord.suggestedBy,
        createdAt:  titleARecord.createdAt.toISOString()
      },
      {
        titleId:    titleBRecord.id.toString(),
        side:       titleBRecord.side,
        title:      titleBRecord.title,
        suggestedBy: titleBRecord.suggestedBy,
        createdAt:  titleBRecord.createdAt.toISOString()
      }
    ]
  };
};

// 배틀방 주제 선정 AI
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

  // 3) AI로부터 주제 생성
  // FastAPI: { topic: "사자 vs 호랑이" } 형태 반환
  const aiResponse = await callGenerateTopic();
  if (!aiResponse.topic || typeof aiResponse.topic !== "string") {
    const err = new Error("AI_ERROR");
    err.code = "AI_ERROR";
    throw err;
  }

  // 4) "A vs B" 형태로 분리
  const split = aiResponse.topic.split(" vs ");
  if (split.length !== 2) {
    const err = new Error("AI_FORMAT_ERROR");
    err.code = "AI_FORMAT_ERROR";
    throw err;
  }
  const [topicA, topicB] = split.map(s => s.trim());

  // 5) battle_room 업데이트
  const updatedRoom = await updateBattleRoomTopics(roomId, { topicA, topicB });

  // 6) battle_title 기록 추가 (suggestedBy: "ai")
  const titleARecord = await repoCreateBattleTitle({
    roomId,
    side: "A",
    title: topicA,
    suggestedBy: "ai"
  });
  const titleBRecord = await repoCreateBattleTitle({
    roomId,
    side: "B",
    title: topicB,
    suggestedBy: "ai"
  });

  return {
    roomId:   updatedRoom.id.toString(),
    topicA:   updatedRoom.topicA,
    topicB:   updatedRoom.topicB,
    updatedAt: updatedRoom.updatedAt,
    titles: [
      {
        titleId:    titleARecord.id.toString(),
        side:       titleARecord.side,
        title:      titleARecord.title,
        suggestedBy: titleARecord.suggestedBy,
        createdAt:  titleARecord.createdAt.toISOString()
      },
      {
        titleId:    titleBRecord.id.toString(),
        side:       titleBRecord.side,
        title:      titleBRecord.title,
        suggestedBy: titleBRecord.suggestedBy,
        createdAt:  titleBRecord.createdAt.toISOString()
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
export const getRoomsInfo = async () => {
  return await getRoomsInfoRep();
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

// 방 상세 정보 불러오기
export const getRoomDetail = async ({ roomId, userId }) => {
  // 1) 방 존재 여부 확인
  const room = await findBattleRoomById(BigInt(roomId));
  if (!room) {
    const err = new Error("ROOM_NOT_FOUND");
    err.code = "ROOM_NOT_FOUND";
    throw err;
  }

  // 2) 사용자가 해당 방의 참가자(또는 관전자)인지 확인
  const isParticipant = await prisma.roomParticipant.count({
    where: {
      roomId: BigInt(roomId),
      userId: BigInt(userId),
    },
  });
  if (isParticipant === 0) {
    const err = new Error("FORBIDDEN");
    err.code = "FORBIDDEN";
    throw err;
  }

  // 3) 방 참여자 전체 조회
  const participants = await listRoomParticipants(BigInt(roomId));
  // participants = [{ userId, role, joinedAt }, …]

  // 4) A, B, P별로 배열 분리
  const participantA = participants
    .filter((p) => p.role === "A")
    .map((p) => ({
      userId: p.userId.toString(),
      joinedAt: p.joinedAt.toISOString(),
    }));

  const participantB = participants
    .filter((p) => p.role === "B")
    .map((p) => ({
      userId: p.userId.toString(),
      joinedAt: p.joinedAt.toISOString(),
    }));

  const spectators = participants
    .filter((p) => p.role === "P")
    .slice(0, 8) // 최대 8명
    .map((p) => ({
      userId: p.userId.toString(),
      joinedAt: p.joinedAt.toISOString(),
    }));

  // 5) 결과 객체 반환
  return {
    roomId:    room.id.toString(),
    adminId:   room.admin.toString(),
    topicA:    room.topicA,
    topicB:    room.topicB,
    status:    room.status,
    createdAt: room.createdAt.toISOString(),
    participantA, // A 역할 참가자 배열
    participantB, // B 역할 참가자 배열
    spectators   // P 역할(관전자) 배열 (최대 8명)
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

// 채팅 저장
export const createChat = async ({ roomId, userId, side, message }) => {
  let finalMessage = message;

  try {
    const { filtered_text } = await callFilterProfanity(message);
    finalMessage = filtered_text;
  } catch (err) {
    console.error("🔥 AI 필터링 실패, 원본 메시지로 저장합니다:", err.message);
    // 실패 시에는 finalMessage = 원본 메시지
  }

  const chatRecord = await saveChatMessage({
    roomId:   BigInt(roomId),
    userId:   BigInt(userId),
    side,
    message:  finalMessage,
  });

  return chatRecord;
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
  // 1) 방 존재 여부
  const room = await findBattleRoomById(roomId);
  if (!room) {
    const err = new Error("ROOM_NOT_FOUND");
    err.code = "ROOM_NOT_FOUND";
    throw err;
  }

  // 2) userId가 이 방의 참가자/관전자 인지 확인
  const cnt = await countRoomParticipant(roomId, userId);
  if (cnt === 0) {
    const err = new Error("FORBIDDEN");
    err.code = "FORBIDDEN";
    throw err;
  }

  // 3) 투표 저장
  const voteRecord = await createBattleVote({ roomId, userId, vote });
  return {
    id:        voteRecord.id.toString(),
    roomId:    voteRecord.roomId.toString(),
    userId:    voteRecord.userId.toString(),
    vote:      voteRecord.vote,
    createdAt: voteRecord.createdAt.toISOString(),
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
  // 1) 방 존재 확인
  const room = await prisma.battleRoom.findUnique({
    where: { id: BigInt(roomId) },
    select: { id: true, admin: true, topicA: true, topicB: true, isAwarded: true }
  });
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

  // 3) 이미 포인트 지급했는지 확인
  if (room.isAwarded) {
    const err = new Error("ALREADY_AWARDED");
    err.code = "ALREADY_AWARDED";
    throw err;
  }

  // 4) 관전자 투표 집계
  const votes = await prisma.battleVote.findMany({
    where: { roomId: BigInt(roomId) },
    select: { vote: true }
  });
  let countA = 0;
  let countB = 0;
  votes.forEach(v => {
    if (v.vote === "A") countA += 1;
    else if (v.vote === "B") countB += 1;
  });

  let voteWinner = null;
  if (countA > countB)      voteWinner = "A";
  else if (countB > countA) voteWinner = "B";
  // 동점 → voteWinner = null

  // 5) AI 토론 분석 호출
  const debateContent = await fetchDebateContentAsString(roomId);
  const aiResult = await callAnalyzeDebate({
    topic: `${room.topicA} vs ${room.topicB}`,
    content: debateContent
  });
  const aiWinner = aiResult.winner;               // "A" 또는 "B"
  const aiAnalysisText = aiResult.result;         // 전체 원본 문자열
  const judgementReason = aiResult.judgement_reason;

  // 6) 참가자 정보 조회 (A 진영, B 진영 각각의 userId)
  const participants = await prisma.roomParticipant.findMany({
    where: { roomId: BigInt(roomId) },
    select: { userId: true, side: true }
  });
  const sideAMember = participants.find(p => p.side === "A")?.userId ?? null;
  const sideBMember = participants.find(p => p.side === "B")?.userId ?? null;

  // 7) 포인트 지급 로직
  //    - voteWinner 에 따라 500p, aiWinner 에 따라 500p
  //    - 두 승자가 같으면 1000p, 다르면 각각 500p
  const awards = [];

  if (voteWinner === "A" && sideAMember) {
    awards.push({
      userId: sideAMember,
      points: 500,
      reason: "관전자 투표 우승 보상"
    });
  }
  if (voteWinner === "B" && sideBMember) {
    awards.push({
      userId: sideBMember,
      points: 500,
      reason: "관전자 투표 우승 보상"
    });
  }
  if (aiWinner === "A" && sideAMember) {
    awards.push({
      userId: sideAMember,
      points: 500,
      reason: "AI 토론 분석 우승 보상"
    });
  }
  if (aiWinner === "B" && sideBMember) {
    awards.push({
      userId: sideBMember,
      points: 500,
      reason: "AI 토론 분석 우승 보상"
    });
  }

  // 8) 실제 DB에 기록 (point_transactions 생성 + user.totalPoints 증가)
  let totalPointsAwarded = 0;

  for (const award of awards) {
    // 8-1) pointTransaction 레코드 생성
    await prisma.pointTransaction.create({
      data: {
        userId: BigInt(award.userId),
        points: award.points,
        type: award.reason,
        battleRoomId: BigInt(roomId),
        createdAt: new Date()
      }
    });

    // 8-2) user.totalPoints 컬럼 증가
    await prisma.user.update({
      where: { id: BigInt(award.userId) },
      data: {
        totalPoints: { increment: award.points }
      }
    });

    totalPointsAwarded += award.points;
  }

  // 9) battleRoom 상태 변경: isAwarded = true, status = "ENDED"
  await prisma.battleRoom.update({
    where: { id: BigInt(roomId) },
    data: { isAwarded: true, status: "ENDED" }
  });

  // 10) 최종 결과 반환
  return {
    voteCount: { A: countA, B: countB },
    voteWinner,                 // "A" / "B" / null
    aiWinner,                   // "A" / "B"
    judgementReason,
    aiAnalysis: aiAnalysisText,
    pointsAwarded: totalPointsAwarded
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