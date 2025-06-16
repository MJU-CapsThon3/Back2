import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { prisma } from "../db.config.js";
import {
  getUserPointSums,
  upsertRankingForUser,
  getAllRankings,
  updateRankingFields,
  updateUserPoint
} from "../repositories/admin.repository.js";

/** 포인트에 따른 티어 계산 헬퍼 */
const calculateTier = (points) => {
  if (points >= 4000) return "챌린저";
  if (points >= 3000) return "그랜드마스터";
  if (points >= 2000) return "마스터";
  if (points >= 1000) return "다이아";
  if (points >= 900)  return "에메랄드";
  if (points >= 800)  return "플레티넘";
  if (points >= 700)  return "골드";
  if (points >= 600)  return "실버";
  if (points >= 500)  return "브론즈";
  return "아이언";
};

/**
 * 사용자별 누적 포인트를 ranking.totalPoints에 동기화
 * @returns {Promise<number>} 동기화된 레코드 수
 */
export const syncRankingService = async () => {
  const sums = await getUserPointSums();
  let count = 0;
  for (const { userId, _sum } of sums) {
    let total = _sum.change ?? 0;
    total = total < 0 ? 0 : total;    // 음수면 0으로
    await upsertRankingForUser({ userId, totalPoints: total });
    count++;
  }
  return count;
};

/**
 * ranking 테이블의 rank, previousRank, tier을 재계산
 * @returns {Promise<number>} 갱신된 레코드 수
 */
export const refreshRankingsService = async () => {
  const rankings = await getAllRankings(); 
  // 총포인트 내림차순으로 정렬
  const sorted = [...rankings].sort((a, b) => b.totalPoints - a.totalPoints);

  let updatedCount = 0;
  for (let i = 0; i < sorted.length; i++) {
    const rec       = sorted[i];
    const newRank   = i + 1;
    const prevRank  = rec.rank;
    const newTier   = calculateTier(rec.totalPoints);
    await updateRankingFields({
      userId:       rec.userId,
      previousRank: prevRank,
      rank:         newRank,
      tier:         newTier
    });
    updatedCount++;
  }
  return updatedCount;
};

/**
 *  ranking.totalPoints → user.point 동기화
 */
export const syncUserPointsService = async () => {
  const rankings = await getAllRankings();
  let count = 0;

  for (const rec of rankings) {
    // 음수 포인트가 있을 경우 0으로 고정
    const clamped = rec.totalPoints < 0 ? 0 : rec.totalPoints;
    await updateUserPoint({ userId: rec.userId, point: clamped });
    count++;
  }

  return count;
};