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

/**
 * 회원가입 직후 초기 랭킹 레코드를 생성하는 기능
 * @param {bigint} userId
 * @param {number} totalPoints
 * @param {string} tier
 */
export const createInitialRanking = async (userId, totalPoints, tier) => {
  try {
    return await prisma.ranking.create({
      data: {
        // 1) relation 연결: user 테이블의 id 와 매핑
        user: { connect: { id: userId } },

        // 2) 스칼라 필드
        totalPoints,
        tier,
        previousRank: null,

        // 3) rank는 NOT NULL 이기 때문에 임시값(0)으로 세팅
        rank: 0,
      },
    });
  } catch (err) {
    throw new Error(`초기 랭킹 생성 중 오류: ${err}`);
  }
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

// 이메일 찾는 기능
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
