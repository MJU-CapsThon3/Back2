import { responseFromUser } from "../dtos/user.dto.js";
import {
  addUser,
  getUser,
  findUser,
  findEmail,
  userInfoRep,
  createInitialRanking,
  findAllUsersOrderedByPoints,
  findRankingByUserId,
  updateRankingById,
  getRankingByUserId,
  getTopRankings,
  checkQuestCondition,
  markQuestCompleted,
  getQuestCompletion,
  addUserPoint,
  markQuestRewardClaimed,
  resetAllQuestCompletions,
  getAllQuests,
  getAllQuestIds,
  createQuestCompletions
} from "../repositories/user.repository.js";

import bcrypt from "bcrypt";
import { encrypt } from '../middleware/encrypt.js'; 
import { createJwt } from "../middleware/jwt.js";

//퀘스트 추가한 점(변경점)
import { prisma } from "../db.config.js";
import { BaseError } from "../errors.js";

// 포인트에 따른 티어 계산 헬퍼 (예시)
const calculateTier = (points) => {
  if (points >= 4000) return '챌린저';
  if (points >= 3000) return '그랜드마스터';
  if (points >= 2000) return '마스터';
  if (points >= 1000) return '다이아';
  if (points >= 900) return '에메랄드';
  if (points >= 800) return '플레티넘';
  if (points >= 700) return '골드';
  if (points >= 600) return '실버';
  if (points >= 500) return '브론즈';
  return '아이언';
};

//하루에 한 번 전체 랭킹을 계산해서 previousRank, totalPoints, tier, rank 필드를 갱신하는 기능
export const refreshRankings = async () => {
  const users = await findAllUsersOrderedByPoints();

  for (let idx = 0; idx < users.length; idx++) {
    const { id: userId, point } = users[idx];
    const newRank = idx + 1;

    const ranking = await findRankingByUserId(userId);
    if (!ranking) {
      // 혹시 없는 경우 초기 생성 로직을 호출해도 됩니다.
      continue;
    }

    await updateRankingById(ranking.id, {
      previousRank: ranking.rank,
      totalPoints: point,
      tier: calculateTier(point),
      rank: newRank,
    });
  }

  console.log(`[${new Date().toISOString()}] Daily ranking refresh complete.`);
};

// 회원가입 service
export const userSignUp = async (req, res) => {
  // 1) 요청 바디에서 필요한 값 추출
   const {
     nickname,
     name,
     email,
     password,
     gender,
     birth,
     phoneNumber,
   } = req.body;
 
   // 2) 필수 항목 누락 검증
   if (
     !nickname ||
     !name ||
     !email ||
     !password ||
     !gender ||
     !birth ||
     !phoneNumber
   ) {
     // 필드가 하나라도 비어 있으면 실패 응답
     return { info: false };
   }
 
   // 3) 비밀번호 암호화
   const encryptedPassword = encrypt(password);
 
   // 4) repository를 통해 사용자 생성
   const userId = await addUser({
     nickname,
     name,
     email,
     password: encryptedPassword,
     gender,                           // ex) 'M' or 'F'
     birth: new Date(birth),           // ex) '1990-05-18'
     phoneNumber,        // repository 레이어에서 컬럼명으로 매핑
     profileImageUrl: null
   });
 
   if (!userId) {
     // 생성에 실패했을 때
     return null;
   }
 
   // 5) QuestCompletion 생성
   const questIds = await getAllQuestIds(); // Quest 테이블에서 questId 전체 조회
   const questCompletions = questIds.map((questId) => ({
     userId,
     questId,
     isCompleted: false,
   }));
   await createQuestCompletions(questCompletions); // QuestCompletion 테이블에 insert
   
   // 6) Ranking 초기 레코드 생성
   const initialPoints = 0;
   const initialTier = calculateTier(initialPoints);
   await createInitialRanking(userId, initialPoints, initialTier);
 
   // 7) 생성된 사용자 데이터 조회
   const user = await getUser(userId);
 
   // 8) 랭킹 정보 별도로 조회
   const ranking = await getRankingByUserId(userId);
 
   // 9) DTO 포맷으로 변환하여 반환
   const userDto = responseFromUser(user);
   userDto.ranking = {
     rank: ranking.rank,
     tier: ranking.tier,
   };
 
   return userDto;
 };

// 이메일 확인 service
const findEmailAlreadyExists = async (email) => {
  const user = await findEmail(email);
  return user;
};

// 로그인 전송 service
export const loginService = async (req) => {
  //console.log("loginService 요청 데이터:", req);
  if (await findEmailAlreadyExists(req.email)) {
    // 이메일이 존재하면
    const user = await findUser(req.email);

    if (bcrypt.compareSync(req.password, user.password)) {
      // 성공
      user.password = "hidden";
      console.log("로그인 성공");
      return createJwt(user);
    } else {
      // 실패
      console.log("password incorrect");
      return 2;
    }
  } else {
    // 이메일 x
    console.log("email doesn't exists");
    return 1;
  }
};

// 유저 정보 불러오는 service
export const userInfoService = async (user_id) => {
  const userInfo = await userInfoRep(user_id);
  userInfo.password = "hidden";
  return userInfo;
};

// Top 랭킹을 가져와서 사용
export const topRankingService = async (limit = 10) => {
  // repository에서 user.nickname 까지 include 해서 가져옴
  const rankings = await getTopRankings(limit);

  // 클라이언트에 줄 형태로 가공
  return rankings.map(r => ({
    userId:        r.userId,
    nickname:      r.user.nickname,
    rank:          r.rank,
    previousRank:  r.previousRank,
    tier:          r.tier,
    totalPoints:   r.totalPoints,
  }));
};

//퀘스트 관련 추가한 부분
export const getDailyQuestsService = async () => {
  // DB에서 퀘스트 리스트 전체를 가져옴
  const quests = await getAllQuests();
  return quests;
};

export const completeQuestIfEligible = async (userId, questId) => {
  const isEligible = await checkQuestCondition(userId, questId);

  if (!isEligible) {
    return { success: false, message: '퀘스트 조건을 만족하지 않습니다.' };
  }

  await markQuestCompleted(userId, questId);

  return { success: true, message: '퀘스트를 성공적으로 완료했습니다.' };
};

export const claimQuestRewardService = async (userId, questId) => {
  // 숫자 변환 및 유효성 검사
  const parsedUserId = Number(userId);
  const parsedQuestId = Number(questId);
  
  const questCompletion = await getQuestCompletion(parsedUserId, parsedQuestId);

  // 퀘스트 완료하지 않은 경우 → 에러 아님, 상태만 응답
  if (!questCompletion || !questCompletion.isCompleted) {
    return { reward: 0, status: 'not_completed', message: '퀘스트를 아직 완료하지 않았습니다.' };
  }

  // 이미 보상을 받은 경우 → 에러 아님, 상태만 응답
  if (questCompletion.rewardClaimed) {
    return { reward: 0, status: 'already_claimed', message: '이미 보상을 받았습니다.' };
  }

  const quest = await prisma.quest.findUnique({
    where: { id: parsedQuestId },
  });

  if (!quest) {
    throw new BaseError({code: 404, message: '퀘스트 정보를 찾을 수 없습니다.'});
  }

  await markQuestRewardClaimed(parsedUserId, parsedQuestId);
  await addUserPoint(parsedUserId, quest.rewardPts, `퀘스트 보상: ${quest.name}`);

  return { reward: quest.rewardPts };
};

export const resetDailyQuestsService = async () => {
  return await resetAllQuestCompletions();
};