export const responseFromUser = (user) => {
  return {
    id: user.id,
    nickname: user.nickname,
    email: user.email,
    point: user.point,
  };
};

// 로그인 DTO
export const loginRequestDTO = (req) => {
  return {
    email: req.email,
    password: req.password,
  };
};

/**
 * 랭킹 리스트용 DTO 변환 함수
 * @param {Array} list
 */
export const responseFromRankingList = (list) => {
  return list.map(item => ({
    userId:       item.userId,
    nickname:     item.nickname,
    rank:         item.rank,
    previousRank: item.previousRank,
    tier:         item.tier,
    totalPoints:  item.totalPoints,
  }));
};

/**
 * 퀘스트 리스트용 DTO 변환 함수
 * @param {Array} list 
 */
export const responseFromQuestList = (list) => {
  return list.map(quest => {
    let statusText = "퀘스트 미완료";
    if (quest.isCompleted && !quest.rewardClaimed) {
      statusText = "퀘스트 완료";
    } else if (quest.isCompleted && quest.rewardClaimed) {
      statusText = "보상 수령";
    }

    return {
      id: quest.id,
      name: quest.name,
      description: quest.description,
      rewardPts: quest.rewardPts,      // 보상 포인트
      goal: quest.goal,             // 달성 목표 수치
      progress: quest.progress,     // 현재 진행도
      status: statusText,           // 미완료 | 완료 | 보상 수령
      createdAt: quest.createdAt,
    };
  });
}