import { prisma } from "../db.config.js";

// 랭킹 리스트를 위한 일정 주기 배치 작업
// 전체 사용자 목록을 포인트 내림차순으로 조회하는 함수
export const findAllUsersOrderedByPoints = async () => {
  return prisma.user.findMany({
    orderBy: { point: 'desc' },
    select: { id: true, point: true },
  });
};

// 특정 사용자의 랭킹 레코드를 조회하는 함수
export const findRankingByUserId = async (userId) => {
  return prisma.ranking.findUnique({ where: { userId } });
};

//랭킹 레코드를 업데이트 함수
export const updateRankingById = async (rankingId, data) => {
  return prisma.ranking.update({
    where: { id: rankingId },
    data,
  });
};

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


// 회원가입 직후 초기 랭킹 레코드를 생성하는 기능
export const createInitialRanking = async (userId, totalPoints, tier) => {
  try {
    // 1) 현재 랭킹 테이블에 몇 명이 있는지 센다
    const count = await prisma.ranking.count();

    // 2) 신규 회원은 맨 마지막 순위(count + 1)로 세팅
    const newRank = count + 1;

    return await prisma.ranking.create({
      data: {
        user:         { connect: { id: userId } },
        totalPoints,                 // 0점
        tier,                        // '아이언'
        previousRank: null,
        rank:         newRank,
      },
    });
  } catch (err) {
    throw new Error(`초기 랭킹 생성 중 오류: ${err}`);
  }
};


//특정 유저의 랭킹 정보 조회
export const getRankingByUserId = async (userId) => {
  try {
    const ranking = await prisma.ranking.findFirstOrThrow({
      where: { userId: userId },
    });
    return ranking;
  } catch (err) {
    throw new Error(`랭킹 조회 중 오류: ${err}`);
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


//Top 랭킹을 내림차순으로 조회합니다.
export const getTopRankings = async (limit) => {
  return prisma.ranking.findMany({
    take: limit,
    orderBy: { totalPoints: 'desc' },
    include: {
      user: {
        select: { nickname: true }
      }
    }
  });
};