import { StatusCodes } from "http-status-codes";
import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { checkFormat } from "../middleware/jwt.js";
import { BaseError } from "../errors.js";

import { userSignUp,
    loginService,
    userInfoService,
 } from "../services/user.service.js";
import { loginRequestDTO } from "../dtos/user.dto.js"

// 회원가입
export const handleUserSignUp = async (req, res, next) => {
/*
  #swagger.summary = '회원 가입 API'
  #swagger.tags = ['User']
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          required: ["nickname","name","email","password","gender","birth","phoneNumber"],
          properties: {
            nickname:   { type: "string", example: "nickname" },
            name:       { type: "string", example: "John Doe" },
            email:      { type: "string", example: "user@example.com" },
            password:   { type: "string", example: "password123" },
            gender:     { type: "string", example: "M" },
            birth:      { type: "string", format: "date", example: "1990-05-18" },
            phoneNumber:{ type: "string", example: "010-1234-5678" }
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "회원 가입 성공 응답",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: true },
            code:      { type: "number",  example: 200 },
            message:   { type: "string",  example: "회원 가입이 성공적으로 완료되었습니다." },
            result: {
              type: "object",
              properties: {
                id:       { type: "string", example: "1" },
                nickname: { type: "string", example: "nickname" },
                email:    { type: "string", example: "user@example.com" },
                point:    { type: "number", example: 0 },
                ranking: {
                  type: "object",
                  properties: {
                    rank: { type: "number", example: 1 },
                    tier: { type: "string", example: "아이언" }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: "회원 가입 실패 응답 (필수 값 누락)",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code:      { type: "string",  example: "MEMBER_NOT_FOUND" },
            message:   { type: "string",  example: "필수 항목이 누락되었습니다." },
            result:    { type: "object",  nullable: true, example: null }
          }
        }
      }
    }
  }
  #swagger.responses[409] = {
    description: "회원 가입 실패 응답 (이메일 중복)",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code:      { type: "string",  example: "EMAIL_ALREADY_EXIST" },
            message:   { type: "string",  example: "이미 사용 중인 이메일입니다." },
            result:    { type: "object",  nullable: true, example: null }
          }
        }
      }
    }
  }
*/
  try {
    console.log("회원가입을 요청했습니다!");
    const user = await userSignUp(req, res);
    if (user === null) {
      res.send(response(status.EMAIL_ALREADY_EXIST, null));
    } else if (user.info === false) {
      res.send(response(status.MEMBER_NOT_FOUND, null));
    } else {
      res.send(response(status.SUCCESS, user));
    }
  } catch (err) {
    console.error(err)
  }
};

// 로그인
export const handleLogin = async (req, res, next) => {
/*
  #swagger.summary = '로그인 API'
  #swagger.tags = ['User']
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            email: { type: "string", example: "user@example.com" },
            password: { type: "string", example: "password123" }
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "로그인 성공 응답",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: true },
            code: { type: "number", example: 200 },
            message: { type: "string", example: "로그인 성공" },
            result: {
              type: "object",
              properties: {
                token: { type: "string", example: "jwt-token-string" },
                user: {
                  type: "object",
                  properties: {
                    id: { type: "string", example: "1" },
                    email: { type: "string", example: "user@example.com" },
                    status: { type: "string", example: "active" }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: "로그인 실패 (이메일 미존재)",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code: { type: "string", example: "LOGIN_ID_NOT_EXIST" },
            message: { type: "string", example: "등록되지 않은 이메일입니다." },
            result: { type: "object", nullable: true, example: null }
          }
        }
      }
    }
  }
  #swagger.responses[401] = {
    description: "로그인 실패 (비밀번호 불일치)",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code: { type: "string", example: "LOGIN_PASSWORD_WRONG" },
            message: { type: "string", example: "비밀번호가 일치하지 않습니다." },
            result: { type: "object", nullable: true, example: null }
          }
        }
      }
    }
  }
*/

      try {
    console.log("로그인");
    const result = await loginService(loginRequestDTO(req.body));
    if (result === 1) {
      // ID = EMAIL
      res.send(response(status.LOGIN_ID_NOT_EXIST, null));
    } else if (result === 2) {
      // if login fail by password incorrect
      res.send(response(status.LOGIN_PASSWORD_WRONG, null));
    } else {
      // if login success
      res.send(response(status.SUCCESS, result));
    }
  } catch (err) {
    console.log(err);
    res.send(response(BaseError));
  }
};

// 유저 정보 불러오기
export const handleUserInfo = async (req, res) => {
/*
  #swagger.summary = '유저 정보 불러오기 API'
  #swagger.tags = ['User']
  #swagger.security = [{
    "BearerAuth": []
  }]
  #swagger.responses[200] = {
    description: "유저 정보 성공 응답",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: true },
            code: { type: "number", example: 200 },
            message: { type: "string", example: "유저 정보 조회 성공" },
            result: {
              type: "object",
              properties: {
                id: { type: "string", example: "1" },
                email: { type: "string", example: "user@example.com" },
                nickname: { type: "string", example: "nickname" },
                name: { type: "string", example: "John Doe" },
                status: { type: "string", example: "active" },
                profileImageUrl: { type: "string", nullable: true, example: null },
                createdAt: { type: "string", format: "date", example: "2021-05-12" },
                updatedAt: { type: "string", format: "date", example: "2021-06-15" }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: "잘못된 토큰 포맷",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code: { type: "string", example: "TOKEN_FORMAT_INCORRECT" },
            message: { type: "string", example: "토큰 포맷이 올바르지 않습니다." },
            result: { type: "object", nullable: true, example: null }
          }
        }
      }
    }
  }
  #swagger.responses[500] = {
    description: "서버 오류",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code: { type: "string", example: "SERVER_ERROR" },
            message: { type: "string", example: "서버 오류가 발생했습니다." },
            result: { type: "object", nullable: true, example: null }
          }
        }
      }
    }
  }
*/

  console.log("유저 정보를 불러옵니다.");
  try {
    console.log("유저 정보를 불러옵니다.");
    //console.log(req.get("Authorization"));
    const token = await checkFormat(req.get("Authorization"));
    //console.log(token, ":test");
    if (token !== null) {
      // 토큰 이상없음
      res.send(response(status.SUCCESS, await userInfoService(req.userId)));
    } else {
      // 토큰 이상감지
      res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
    }
  } catch (err) {
    console.log(err);
    res.send(response(BaseError));
  }
};