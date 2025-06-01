import { prisma } from "../db.config.js";

// 방 생성
export const createBattleRoom = async (data) => {
    return await prisma.battleRoom.create({data});
};

// 주제 이력 저장
export const createBattleTitle = async ({ roomId, side, title, suggestedBy }) => {
    return await prisma.battleTitle.create({
    data: {
        side,             // "A" 또는 "B"
        title,            
        suggestedBy,      // "user" 또는 "ai"
        battleRoom: {     
        connect: { id: roomId }
        }
    }
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
        joinedAt: new Date()
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
            roomId,
            role: 'P'
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