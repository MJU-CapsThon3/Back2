export const responseFromUser = (body) => {
    return {
    };
};

// 로그인 DTO
export const loginRequestDTO = (req) => {
  return {
    email: req.email,
    password: req.password,
  };
};