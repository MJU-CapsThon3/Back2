import { prisma } from "../db.config.js";

// 랭킹 리스트를 위한 일정 주기 배치 작업
// 전체 사용자 목록을 포인트 내림차순으로 조회하는 함수
export const findAllUsersOrderedByPoints = async () => {
  return prisma.user.findMany({
    orderBy: { point: 'desc' },
    select: { id: true, point: true },
  });
};

// 특정 사용자의 랭킹 레코드를 조회하는 함수
export const findRankingByUserId = async (userId) => {
  return prisma.ranking.findUnique({ where: { userId } });
};

//랭킹 레코드를 업데이트 함수
export const updateRankingById = async (rankingId, data) => {
  return prisma.ranking.update({
    where: { id: rankingId },
    data,
  });
};

// User 데이터 삽입
export const addUser = async (data) => {
  console.log("body13: ", data);
  try {
    const member = await prisma.user.findFirst({ where : { email: data.email }});
    if (member){
      return null;
    }
    const created = await prisma.user.create({ data : data })
    return created.id;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  };
};

// 사용자 정보 얻기
export const getUser = async (userId) => {
  console.log("body13: ", userId);
  try {
    const user = await prisma.user.findFirstOrThrow({ where: { id: userId } });
    return user;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  };
};


// 회원가입 직후 초기 랭킹 레코드를 생성하는 기능
export const createInitialRanking = async (userId, totalPoints, tier) => {
  try {
    // 1) 현재 랭킹 테이블에 몇 명이 있는지 센다
    const count = await prisma.ranking.count();

    // 2) 신규 회원은 맨 마지막 순위(count + 1)로 세팅
    const newRank = count + 1;

    return await prisma.ranking.create({
      data: {
        user:         { connect: { id: userId } },
        totalPoints,                 // 0점
        tier,                        // '아이언'
        previousRank: null,
        rank:         newRank,
      },
    });
  } catch (err) {
    throw new Error(`초기 랭킹 생성 중 오류: ${err}`);
  }
};


//특정 유저의 랭킹 정보 조회
export const getRankingByUserId = async (userId) => {
  try {
    const ranking = await prisma.ranking.findFirstOrThrow({
      where: { userId: userId },
    });
    return ranking;
  } catch (err) {
    throw new Error(`랭킹 조회 중 오류: ${err}`);
  }
};

// 유저 찾기
export const findUser = async (email) => {
  // Prisma로 유저 정보 조회
  const user = await prisma.user.findFirst({
    select: {
      id: true,
      email: true, // email만 선택
      password: true, // password도 가져오기
    },
    where: { email },
  });

  if (!user) {
    // 유저가 없을 경우 예외 처리
    console.log("findUser: 유저를 찾을 수 없습니다.");
    throw new Error(`User with email ${email} not found`);
  }

  console.log("findUser: 조회된 유저 정보:", user);
  return user; // 유저 객체 반환
};

// 이메일 찾는 기능
export const findEmail = async (req) => {
  const email = await prisma.user.findFirst({
    select: { email: true },
    where: { email: req },
  });
  if (email === null) {
    return null;
  } else {
    return email;
  }
};

// 유저 정보 불러오는 기능
export const userInfoRep = async (user_id) => {
  const user = await prisma.user.findFirstOrThrow({ where: { id: user_id } });
  return user;
};


//Top 랭킹을 내림차순으로 조회합니다.
export const getTopRankings = async (limit) => {
  return prisma.ranking.findMany({
    take: limit,
    orderBy: { totalPoints: 'desc' },
    include: {
      user: {
        select: { nickname: true }
      }
    }
  });
};

//아이템 정보 조회
export const findItemById = async (itemId) => {
  return prisma.item.findUnique({
    where: { id: itemId },
  });
};

//포인트 차감
export const deductUserPoints = async (userId, amount) => {
  return prisma.user.update({
    where: { id: userId },
    data: {
      point: {
        decrement: amount,
      },
    },
  });
};

//구매한 아이템 저장
export const createUserItem = async (userId, itemId) => {
  return prisma.userItem.create({
    data: {
      userId,
      itemId,
    },
  });
};

//포인트 거래 내역 저장
export const createPointTransaction = async (userId, amount, reason) => {
  return prisma.pointTransaction.create({
    data: {
      userId,
      change: amount,
      reason,
    },
  });
};

//아이템 추가
export const createItem = async (itemData) => {
  return prisma.item.create({
    data: itemData,
  });
};

//유저가 소유한 아이템 목록 조회
export const findUserItems = async (userId) => {
  return prisma.userItem.findMany({
    where: { userId },
    include: {
      item: {
        select: {
          id: true,
          name: true,
          context: true,
          cost: true,
        },
      },
    },
  });
};

// 상점 아이템 전체 조회
export const getShopItemsFromDB = async () => {
  return prisma.item.findMany({
    select: {
      id: true,
      name: true,
      context: true,
      cost: true,
    },
    orderBy: { id: 'asc' }, // 원하는 정렬 기준 (id 기준 오름차순)
  });
};

// 아이템 수정
export const updateItemRepo = async (itemId, updateData) => {
  return prisma.item.update({
    where: { id: BigInt(itemId) },
    data: updateData,
  });
};


/*
// user_items 레코드 먼저 삭제
export const deleteUserItemsByItemId = async (itemId) => {
  return await prisma.userItem.deleteMany({
    where: { itemId: BigInt(itemId) },
  });
};

// 아이템 자체 삭제
export const deleteItemRepo = async (itemId) => {
  return await prisma.item.delete({
    where: { id: BigInt(itemId) },
  });
};
*/

//퀘스트 목록 조회
export const getAllQuests = async () => {
  try {
    const quests = await prisma.quest.findMany({
      orderBy: {
        id: 'asc',  // 필요에 따라 정렬
      },
    });
    return quests;
  } catch (error) {
    console.error('Error fetching quests:', error);
    throw error;
  }
};

// 퀘스트 아이디 기준 조회
export const findQuestById = async (questId) => {
  return await prisma.quest.findUnique({
    where: { id: questId },
  });
};

//퀘스트 진행 상태 조회
export const checkQuestCondition = async (userId, questId) => {
  switch (questId) {
    case 1: // 로그인하기
      return true; // 로그인 시점에 체크하므로 true 반환
  
    case 2: // 토론 참여하기
      const participated = await prisma.roomParticipant.findFirst({
        where: { userId },
      });
      return !!participated;
  
    case 3: // 방 생성하기
      const createdRoom = await prisma.battleRoom.findFirst({
        where: { admin: userId },
      });
      return !!createdRoom;
  
    case 4: // 채팅하기
      const chatted = await prisma.chatMessage.findFirst({
        where: { userId },
      });
      return !!chatted;
  
    case 5: // 아이템 구매하기
      const purchasedItem = await prisma.userItem.findFirst({
        where: { userId },
      });
      return !!purchasedItem;
  
    case 6: // 일일 퀘스트 클리어
      const otherCompletions = await prisma.questCompletion.findMany({
        where: {
          userId,
          questId: { in: [1, 2, 3, 4, 5] },
          isCompleted: true,
        },
      });
      return otherCompletions.length === 5;
  
    default:
      return false;
  }
};

// 퀘스트 진행 현황 증가
export const addQuestProgress = async (userId, questId) => {
  const existing = await prisma.questCompletion.findFirst({
    where: {
      userId,
      questId,
    },
  });
  
  if (!existing) {
    throw new Error("해당 유저의 퀘스트 진행 정보가 없습니다.");
  }

  return prisma.questCompletion.update({
    where: { id: existing.id },
    data: {
      progress: { increment: 1 },
    },
  });
};

// 퀘스트 목표 조회
export const getQuestGoal = async (questId) => {
  const quest = await prisma.quest.findUnique({
    where: { id: questId },
    select: { goal: true },
  });

  if (!quest) {
    throw new Error("해당 퀘스트를 찾을 수 없습니다.");
  }

  return quest.goal;
};

// 퀘스트 진행 현황 
export const getQuestProgress = async (userId, questId) => {
  const completion = await prisma.questCompletion.findFirst({
    where: {
      userId,
      questId,
    },
    select: { progress: true },
  });

  return completion?.progress ?? 0; // completion이 없으면 0
};

// 퀘스트 완료 처리
export const markQuestCompleted = async (userId, questId) => {
  const existing = await prisma.questCompletion.findFirst({
    where: {
      userId,
      questId,
    },
  });
  
  if (existing) {
    // 이미 존재하면 업데이트
    return prisma.questCompletion.update({
      where: { id: existing.id }, 
      data: {
        isCompleted: true,
        completedAt: new Date(),
      },
    });
  } else {
    // 존재하지 않으면 생성
    return prisma.questCompletion.create({
      data: {
        userId,
        questId,
        isCompleted: true,
        completedAt: new Date(),
      },
    });
  }
};

// 퀘스트 완료 여부 + 보상 여부 조회
export const getQuestCompletion = async (userId, questId) => {
  return await prisma.questCompletion.findFirst({
    where: {
      userId: userId,
      questId: questId,
    },
  });
};

// 사용자에게 보상 지급
export const addUserPoint = async (userId, point, reason = '퀘스트 보상') => {
  await prisma.user.update({
    where: { id: userId },
    data: { point: { increment: point } },
  });

  await prisma.pointTransaction.create({
    data: {
      userId,
      change: point,
      reason,
    },
  });
};

// 보상 지급 상태 확인
export const findQuestCompletion = async (userId, questId) => {
  return await prisma.questCompletion.findFirst({
    where: {
      userId: userId,
      questId: questId,
    },
    select: {
      rewardClaimed: true,
    },
  });
}

// 보상 지급 상태 업데이트
export const markQuestRewardClaimed = async (userId, questId) => {
  return await prisma.questCompletion.updateMany({
    where: {
      userId: userId,
      questId: questId,
    },
    data: {
      rewardClaimed: true,
    },
  });
};

// 모든 사용자의 퀘스트 상태 초기화
export const resetAllQuestCompletions = async () => {
  return await prisma.questCompletion.updateMany({
    data: {
      isCompleted: false,
      rewardClaimed: false,
      progress : 0,
    },
  });
};

//회원가입시 quest_completion 생성
// 모든 퀘스트 ID만 가져오기
export const getAllQuestIds = async () => {
  const quests = await prisma.quest.findMany({
    select: { id: true }
  });
  return quests.map((quest) => quest.id);
};

// QuestCompletion 생성 (배열 형태로)
export const createQuestCompletions = async (questCompletions) => {
  return await prisma.questCompletion.createMany({
    data: questCompletions,
    skipDuplicates: true, // 중복 방지 (unique 제약조건 있을 경우)
  });
};

// 오늘 생성한 토론방 수
export const countUserRoomCreatesToday = async (userId) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return await prisma.battleRoom.count({
    where: {
      admin: userId,
      createdAt: {
        gte: today,
      },
    },
  });
};

// 오늘 보낸 채팅 수
export const countUserChatsToday = async (userId) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return await prisma.chatMessage.count({
    where: {
      userId,
      createdAt: {
        gte: today,
      },
    },
  });
};

// 오늘 아이템 구매 횟수
export const countUserItemBuysToday = async (userId) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return await prisma.userItem.count({
    where: {
      userId,
      acquiredAt: {
        gte: today,
      },
    },
  });
};

// 퀘스트 진행도만 업데이트
export const updateQuestProgress = async (userId, questId, progress) => {
  return await prisma.questCompletion.updateMany({
    where: { userId, questId },
    data: { progress },
  });
};

// 토론 참여 기록 확인
export const hasUserParticipatedInAnyRoom = async (userId) => {
  const count = await prisma.roomParticipant.count({
    where: {
      userId: userId,
    },
  });
  return count > 0;
};

//
export const hasUserClearedAllDailyQuests = async (userId) => {
  const completedCount = await prisma.questCompletion.count({
    where: {
      userId: userId,
      questId: { in: [1, 2, 3, 4, 5] },
      isCompleted: true,
    },
  });

  return completedCount === 5;
};