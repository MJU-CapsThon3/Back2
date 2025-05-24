import { responseFromUser } from "../dtos/user.dto.js";
import {
  addUser,
  getUser,
  findUser,
  findEmail,
  userInfoRep,
  createInitialRanking,
} from "../repositories/user.repository.js";

import bcrypt from "bcrypt";
import { encrypt } from '../middleware/encrypt.js'; 
import { createJwt } from "../middleware/jwt.js";

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
  // 5) Ranking 초기 레코드 생성
  const initialPoints = 0;
  const initialTier = calculateTier(initialPoints);
  await createInitialRanking(userId, initialPoints, initialTier);

  // 6) 생성된 사용자 데이터 조회
  const user = await getUser(userId);

  // 7) DTO 포맷으로 변환하여 반환
  return responseFromUser(user);
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