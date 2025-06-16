import { prisma } from "../db.config.js";
/**
 * point_transactions 테이블에서 userId별 change 합계를 구합니다.
 */
export const getUserPointSums = () => {
  return prisma.pointTransaction.groupBy({
    by: ["userId"],
    _sum: { change: true }
  });
};

/**
 * Ranking 테이블에 upsert
 * - 이미 있으면 totalPoints만 update
 * - 없으면 create (rank, previousRank, tier는 나중에 refresh에서 세팅)
 */
export const upsertRankingForUser = ({ userId, totalPoints }) => {
  return prisma.ranking.upsert({
    where: { userId },
    update: { totalPoints },
    create: {
      userId,
      totalPoints,
      rank: 0,
      previousRank: 0,
      tier: "아이언"
    }
  });
};

/**
 * 모든 ranking 레코드를 { userId, totalPoints, rank } 형태로 반환
 */
export const getAllRankings = () => {
  return prisma.ranking.findMany({
    select: {
      userId:      true,
      totalPoints: true,
      rank:        true
    }
  });
};

/**
 * ranking 필요 필드를 업데이트
 */
export const updateRankingFields = ({ userId, previousRank, rank, tier }) => {
  return prisma.ranking.update({
    where: { userId },
    data:  { previousRank, rank, tier }
  });
};

/** user.point 업데이트 */
export const updateUserPoint = ({ userId, point }) => {
  return prisma.user.update({
    where: { id: userId },
    data:  { point }
  });
};