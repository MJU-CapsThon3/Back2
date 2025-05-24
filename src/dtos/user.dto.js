export const responseFromUser = (user) => {
  return {
    id: user.id,
    nickname: user.nickname,
    email: user.email,
    // … 기타 user 필드 …
    point: user.point,
    // prisma relation 쿼리를 통해 include 했다면 ranking도
    ranking: {
      rank: user.ranking?.rank,
      tier: user.ranking?.tier,
    }
  };
};

// 로그인 DTO
export const loginRequestDTO = (req) => {
  return {
    email: req.email,
    password: req.password,
  };
};