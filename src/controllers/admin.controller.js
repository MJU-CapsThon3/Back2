import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { checkFormat } from "../middleware/jwt.js";
import { BaseError } from "../errors.js";
import {
  syncRankingService,
  refreshRankingsService,
  syncUserPointsService
} from "../services/admin.service.js";
/**
  #swagger.summary = '관리자용: 전체 포인트 → 랭킹 totalPoints 동기화 API'
  #swagger.security = [{ "BearerAuth": [] }]
  #swagger.tags = ['Admin']
  #swagger.responses[200] = {
    description: "동기화 성공",
    schema: {
      isSuccess: true,
      code: 200,
      message: "success!",
      result: {
        syncedCount: 10   // 동기화된 유저 수
      }
    }
  }
  #swagger.responses[500] = {
    description: "서버 오류",
    schema: {
      isSuccess: false,
      code: "COMMON000",
      message: "서버 에러, 관리자에게 문의 바랍니다.",
      result: null
    }
  }
*/
export const handleSyncRanking = async (req, res) => {
  try {
    const count = await syncRankingService();
    return res.send(response(status.SUCCESS, { syncedCount: count }));
  } catch (err) {
    console.error("🔴 handleSyncRanking 오류:", err);
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

/**
  #swagger.summary = '관리자용: 랭킹 순위·이전순위·티어 최신화 API'
  #swagger.security = [{ "BearerAuth": [] }]
  #swagger.tags = ['Admin']
  #swagger.responses[200] = {
    description: "랭킹 최신화 성공",
    schema: {
      isSuccess: true,
      code: 200,
      message: "success!",
      result: {
        refreshedCount: 10   // 갱신된 레코드 수
      }
    }
  }
  #swagger.responses[500] = {
    description: "서버 오류",
    schema: {
      isSuccess: false,
      code: "COMMON000",
      message: "서버 에러, 관리자에게 문의 바랍니다.",
      result: null
    }
  }
*/
export const handleRefreshRankings = async (req, res) => {
  try {
    const count = await refreshRankingsService();
    return res.send(response(status.SUCCESS, { refreshedCount: count }));
  } catch (err) {
    console.error("🔴 handleRefreshRankings 오류:", err);
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

/**
  #swagger.summary = '관리자용: 랭킹 totalPoints → 유저 point 동기화 API'
  #swagger.security = [{ "BearerAuth": [] }]
  #swagger.tags = ['Admin']
  #swagger.responses[200] = {
    description: "유저 포인트 동기화 성공",
    schema: {
      isSuccess: true,
      code: 200,
      message: "success!",
      result: { syncedCount: 10 }
    }
  }
*/
export const handleSyncUserPoints = async (req, res) => {
  try {
    const count = await syncUserPointsService();
    return res.send(response(status.SUCCESS, { syncedCount: count }));
  } catch (err) {
    console.error("🔴 handleSyncUserPoints 오류:", err);
    return res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};