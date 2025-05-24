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