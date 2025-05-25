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