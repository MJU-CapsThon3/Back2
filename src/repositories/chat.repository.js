import { prisma } from "../db.config.js";

// 방 생성
export const createBattleRoom = async (data) => {
  return await prisma.battleRoom.create({ data });
};

// // 주제 이력 저장
// export const createBattleTitle = async ({ roomId, side, title, suggestedBy }) => {
//     return await prisma.battleTitle.create({
//     data: {
//         side,             // "A" 또는 "B"
//         title,            
//         suggestedBy,      // "user" 또는 "ai"
//         battleRoom: {     
//         connect: { id: roomId }
//         }
//     }
//     });
// };

// 페이지네이션 적용된 방 목록 가져오기
export const getRoomsPaginated = async ({ skip, take }) => {
  return await prisma.battleRoom.findMany({
    skip,
    take,
    select: {
      id:       true,
      status:   true,
      roomName: true
    },
    orderBy: { id: "asc" }
  });
};

// 참가자 수 COUNT
export const countParticipants = async ({ roomId, role, userId }) => {
  const where = { roomId, role };
  if (userId !== undefined) where.userId = userId;
  return await prisma.roomParticipant.count({ where });
};

// 방 참가
export const createRoomParticipant = async ({ roomId, userId, role }) => {
  return await prisma.roomParticipant.create({
    data: {
      roomId,
      userId,
      role,
      joinedAt: new Date(),
    },
  });
};

// 방 역할 변경
export const updateRoomParticipantRole = async ({ roomId, userId, newRole }) => {
  return await prisma.roomParticipant.update({
    where: {
      // Prisma 스키마에서 복합 Unique 키가 없다고 가정. 
      // roomId, userId 조합으로 찾는 대신 findFirst 후 update해도 무방합니다.
      id: (
        await prisma.roomParticipant.findFirst({
          where: { roomId: BigInt(roomId), userId: BigInt(userId) },
          select: { id: true }
        })
      ).id
    },
    data: {
      role: newRole
    }
  });
};

// 참가자 조회
export const findActiveParticipant = async ({ roomId, userId }) => {
  return await prisma.roomParticipant.findFirst({
    where: { 
      roomId: BigInt(roomId), 
      userId: BigInt(userId), 
      endAt: null 
    }
  });
};

// 참가자의 endAt 업데이트
export const updateParticipantEndAt = async (participantId) => {
  return await prisma.roomParticipant.update({
    where: { id: BigInt(participantId) },
    data: { endAt: new Date() }
  });
};

// 배틀방 전체 정보 조회
export const getRoomsInfoRep = () => {
    return prisma.battleRoom.findMany({
    select: {
      id: true,       // 방 번호
      status: true,   // 배틀방 상태 (예: "WAITING", "PLAYING", "FULL" 등)
      topicA: true,   // 주제 A
      topicB: true    // 주제 B
    },
    orderBy: {
      id: "asc"       // 방 번호 순으로 오름차순 정렬 (원하는 정렬 방식이 있다면 수정)
    }
    });
};

// 방 정보 조회
export const findBattleRoomById = (roomId) => {
    return prisma.battleRoom.findUnique({
        where: { id: roomId },
        select: {
            id:        true,
            admin:     true,
            question:  true,
            topicA:    true,
            topicB:    true,
            status:    true,
            createdAt: true
        }
    });
};

// 방의 참가자 목록 조회
export const listRoomParticipants = (roomId) => {
    return prisma.roomParticipant.findMany({
        where: { roomId },
        select: {
            userId:   true,
            role:     true,
            joinedAt: true
        },
        orderBy: { joinedAt: 'asc' }
    });
};

// 방의 관전자 수
export const countRoomSpectators = (roomId) => {
    return prisma.roomParticipant.count({
        where: {
            roomId: BigInt(roomId),
            role: 'P',
            endAt:  null
        }
    });
};

export const find1BattleRoomById = (roomId) => {
    return prisma.battleRoom.findUnique({
        where: { id: roomId }
    });
};

// 방 상태 변경하기
export const updateBattleRoom = (roomId, data) => {
    return prisma.battleRoom.update({
        where: { id: roomId },
        data
    });
};

// 주제 생성하기
export const createBattleTitle = async ({ roomId, side, title, suggestedBy }) => {
  return await prisma.battleTitle.create({
    data: {
      roomId: BigInt(roomId),
      side,             // "A" 또는 "B"
      title,
      suggestedBy,      // "user" 또는 "ai"
    }
  });
};

// 주제 업데이트
export const updateBattleRoomTopics = (roomId, { question, topicA, topicB }) => {
  return prisma.battleRoom.update({
    where: { id: BigInt(roomId) },
    data: {
      question,
      topicA,
      topicB
    }
  });
};

// 실시간 채팅 메세지 저장
export const saveChatMessage = async ({ roomId, userId, side, message }) => {
    return await prisma.chatMessage.create({
    data: {
        roomId:  BigInt(roomId),
        userId:  BigInt(userId),
      side,     // 'A' 또는 'B'
      message,  // 이미 AI 필터링된 메시지
      // created_at: default CURRENT_TIMESTAMP(automatically set)
    },
    });
};

// 방 별 채팅 조회
export const findChatHistoryByRoomId = async (roomId) => {
  // 1) 해당 roomId의 채팅 메시지들을 생성일(createdAt) 순으로 모두 조회
  const allChats = await prisma.chatMessage.findMany({
    where:   { roomId: BigInt(roomId) },  // camelCase 필드명
    orderBy: { createdAt: "asc" }          // 역시 camelCase
  });

  // 2) sideA, sideB 로 분리하기 위해 빈 배열 준비
  const sideA = [];
  const sideB = [];

  // 3) 조회된 각 레코드를 camelCase로 된 프로퍼티로 매핑
  allChats.forEach((c) => {
    const item = {
      id:        c.id.toString(),              // BigInt -> string
      roomId:    c.roomId.toString(),          // Prisma에서 반환되는 필드는 `roomId`
      userId:    c.userId.toString(),          // Prisma에서 반환되는 필드는 `userId`
      side:      c.side,                       // "A" 또는 "B"
      message:   c.message,                    // 메시지 본문
      createdAt: c.createdAt.toISOString()     // Date -> ISO 문자열
    };

    if (c.side === "A") {
      sideA.push(item);
    } else if (c.side === "B") {
      sideB.push(item);
    }
  });

  return { sideA, sideB };
};

// 방 참가자/관전자 확인
export const countRoomParticipant = async (roomId, userId) => {
    const result = await prisma.roomParticipant.count({
    where: {
        roomId: BigInt(roomId),
        userId: BigInt(userId),
    },
    });
    return result;
};

export const createBattleVote = async ({ roomId, userId, vote }) => {
  // (1) 먼저 같은 방/같은 유저가 투표했는지 확인
  const existing = await prisma.battleVote.findFirst({
    where: {
      roomId: BigInt(roomId),
      userId: BigInt(userId),
    }
  });
  if (existing) {
    const err = new Error("ALREADY_VOTED");
    err.code = "ALREADY_VOTED";
    throw err;
  }

  // (2) 신규 투표 레코드 생성
  const record = await prisma.battleVote.create({
    data: {
      roomId: BigInt(roomId),
      userId: BigInt(userId),
      vote, // "A" 또는 "B"
      // createdAt은 default now()로 채워짐
    }
  });
  return record;
};

export const findVotesByRoomId = async (roomId) => {
  const rows = await prisma.battleVote.findMany({
    where:   { roomId: BigInt(roomId) },
    orderBy: { createdAt: "asc" }
  });
  return rows;
};

// 방의 채팅을 시간 순서대로 불러오기
export const findAllChatMessagesByRoomId = async (roomId) => {
  const chats = await prisma.chatMessage.findMany({
    where: { roomId: BigInt(roomId) },
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      side: true,       // "A" 또는 "B"
      message: true,
      createdAt: true,
      userId: true,
    },
  });
  return chats;
};

// 투표 내역
export const findBattleVotesByRoomId = async (roomId) => {
  const votes = await prisma.battleVote.findMany({
    where: { roomId: BigInt(roomId) },
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      userId: true,
      vote: true,       // "A" 또는 "B"
      createdAt: true,
    },
  });
  return votes;
};

// 방 참가전에 유저 검열
export const deleteExistingParticipationRecords = (userId) => {
  return prisma.roomParticipant.deleteMany({
    where: { userId: userId }
  });
};

export const repoCreateRoomParticipant = (data) => {
  return prisma.roomParticipant.create({
    data: {
      roomId:    data.roomId,
      userId:    data.userId,
      role:      data.role,       // "P"
      joinedAt:  data.joinedAt
    }
  });
};
