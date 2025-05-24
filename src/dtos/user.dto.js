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