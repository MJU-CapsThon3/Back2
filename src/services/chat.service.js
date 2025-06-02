import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { createBattleRoom,
    createBattleTitle,
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
} from '../repositories/chat.repository.js';
import { toCreateRoomDto, 
  responseFromRoom 
} from '../dtos/chat.dto.js';

import { callFilterProfanity } from "../repositories/ai.repository.js";

// 방 생성 service
export const createRoom = async (req, res) => {
  // 1) DTO 변환 및 검증
    const dtoTopics = toCreateRoomDto(req.body);
    if (dtoTopics.info === false) {
    return { info: false };
    }
  // 2) battle_room 생성
    const topicA = dtoTopics.find(t => t.side === 'A').title;
    const topicB = dtoTopics.find(t => t.side === 'B').title;
    const room = await createBattleRoom({
    admin:  req.userId,  // 토큰에서 채워진 userId
    topicA,
    topicB,
    status: 'WAITING'
    });
  // 3) battle_title 이력(A/B) 생성
    const titleRecords = await Promise.all(
    dtoTopics.map(t => createBattleTitle({
      roomId:      room.id,         // 반드시 넘겨줍니다
        side:        t.side,
        title:       t.title,
      suggestedBy: t.suggestedBy     // dto에서 채워준 값
    }))
    );
  // 4) 응답용 DTO 반환
    return responseFromRoom({ room, titleRecords });
};

// 방 참가 service
export const joinRoom = async ({ roomId, userId, role }) => {
  // A/B 참가자는 각 1명만
  if (role === 'A' || role === 'B') {
    const cnt = await countParticipants({ roomId, role });
    if (cnt >= 1) {
      return res.send(response(status.ROLE_ALREADY_TAKEN, null));
    }
  }
  // 관전자(P)는 최대 8명
  if (role === 'P') {
    const cnt = await countParticipants({ roomId, role });
    if (cnt >= 8) {
      return res.send(response(status.ROOM_FULL, null));
    }
  }
  // 중복 참가 방지 (이미 참가했으면 취소)
  const already = await countParticipants({ roomId, role, userId });
  if (already > 0) {
    return res.send(response(status.ALREADY_JOINED, null));
  }
  // 실제 삽입
  const participant = await createRoomParticipant({
    roomId,
    userId,
    role
  });
  return {
    participantId: participant.id,
    roomId:        participant.roomId,
    userId:        participant.userId,
    role:          participant.role,
    joinedAt:      participant.joinedAt
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