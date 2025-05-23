import { prisma } from "../db.config.js";


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

// finding user by email
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
