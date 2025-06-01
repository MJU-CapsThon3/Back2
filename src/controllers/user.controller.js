import { StatusCodes } from "http-status-codes";
import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { checkFormat } from "../middleware/jwt.js";
import { BaseError } from "../errors.js";

import { userSignUp,
    loginService,
    userInfoService,
    topRankingService,
    buyItem,
    addItem,
    getUserItems,
    getAllShopItems,
    updateItem,
    //deleteItem,
 } from "../services/user.service.js";
import { loginRequestDTO,
  responseFromRankingList,
} from "../dtos/user.dto.js"

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

export const handleGetTopRankings = async (req, res, next) => {
    /*
    #swagger.summary = 'Top 랭킹 리스트 조회 API'
    #swagger.tags = ['Ranking']
    // 토큰 없이 접근 가능
    #swagger.responses[200] = {
      description: "Top  랭킹 리스트 조회 성공",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess:    { type: "boolean", example: true },
              code:         { type: "number",  example: 200 },
              message:      { type: "string",  example: "랭킹 리스트 조회 성공" },
              result: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    userId:       { type: "string",  example: "1" },
                    nickname:     { type: "string",  example: "치멘" },
                    rank:         { type: "number",  example: 1 },
                    previousRank: { type: "number",  nullable: true, example: null },
                    tier:         { type: "string",  example: "브론즈" },
                    totalPoints:  { type: "number",  example: 1500 }
                  }
                }
              }
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
              code:      { type: "string",  example: "SERVER_ERROR" },
              message:   { type: "string",  example: "서버 오류가 발생했습니다." },
              result:    { type: "object",  nullable: true, example: null }
            }
          }
        }
      }
    }
  */
  console.log("랭킹 리스트를 불러옵니다.");
  try {
    // 서비스 호출
    const rawList = await topRankingService();
    // DTO 변환
    const payload = responseFromRankingList(rawList);
    // 응답
    res.send(response(status.SUCCESS, payload));
  } catch (err) {
    console.log(err);
    res.send(response(BaseError));
  }
};

// 아이템 구매
export const handleBuyItem = async (req, res) => {
  /*
  #swagger.summary = '아이템 구매 API'
  #swagger.tags = ['Shop']
  #swagger.security = [{"BearerAuth": []}]
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            itemId: { type: "number", example: 1 }
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "아이템 구매 성공",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: true },
            code: { type: "number", example: 200 },
            message: { type: "string", example: "요청에 성공하였습니다." },
            result: {
              type: "object",
              properties: {
                message: { type: "string", example: "아이템을 성공적으로 구매했습니다." },
                remainPoint: { type: "number", example: 950 }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: "포인트 부족",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code: { type: "number", example: 400 },
            message: { type: "string", example: "포인트가 부족합니다." },
            result: { type: "object", nullable: true, example: null }
          }
        }
      }
    }
  }
  #swagger.responses[404] = {
    description: "아이템이 존재하지 않음",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code: { type: "number", example: 404 },
            message: { type: "string", example: "존재하지 않는 아이템입니다." },
            result: { type: "object", nullable: true, example: null }
          }
        }
      }
    }
  }
*/
  try {
    const userId = req.userId;
    const { itemId } = req.body;

    const result = await buyItem(userId, itemId);
    res.send(response(status.SUCCESS, result));
  } catch (err) {
    console.error(err);

    if (err.message === "존재하지 않는 아이템입니다.") {
      res.status(404).send(response(status.NOT_FOUND, { message: err.message }));
    } else if (err.message === "포인트가 부족합니다.") {
      res.status(400).send(response(status.BAD_REQUEST, { message: err.message }));
    } else {
      res.status(500).send(response(BaseError));
    }
  }
};

// 새로운 아이템 추가
export const handleAddItem = async (req, res) => {
  /*
    #swagger.summary = '아이템 추가 API'
    #swagger.tags = ['Shop']
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["name", "cost"],
            properties: {
              name: { type: "string", example: "멋진 아이템" },
              context: { type: "string", example: "이 아이템을 사용하면 멋있어집니다!" },
              cost: { type: "number", example: 300 }
            }
          }
        }
      }
    }
    #swagger.responses[200] = {
      description: "아이템 추가 성공",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: true },
              code: { type: "number", example: 200 },
              message: { type: "string", example: "아이템이 성공적으로 추가되었습니다." },
              result: {
                type: "object",
                properties: {
                  id: { type: "number", example: 1 },
                  name: { type: "string", example: "멋진 아이템" },
                  context: { type: "string", example: "이 아이템을 사용하면 멋있어집니다!" },
                  cost: { type: "number", example: 300 }
                }
              }
            }
          }
        }
      }
    }
  */

  try {
    const { name, context, cost } = req.body;

    if (!name || !cost) {
      return res.send(response(status.MEMBER_NOT_FOUND, { message: "name, cost는 필수입니다." }));
    }

    const newItem = await addItem({ name, context, cost });
    res.send(response(status.SUCCESS, newItem));
  } catch (err) {
    console.error(err);
    res.send(response(BaseError));
  }
};

// 유저가 소유한 아이템 목록 조회
export const handleGetUserItems = async (req, res) => {
  /*
    #swagger.summary = '유저 소유 아이템 목록 조회 API'
    #swagger.tags = ['Shop']
    #swagger.security = [{"BearerAuth": []}]
    #swagger.responses[200] = {
      description: "유저가 가진 아이템 목록 조회 성공",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: true },
              code: { type: "number", example: 200 },
              message: { type: "string", example: "요청에 성공하였습니다." },
              result: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "number", example: 1 },
                    name: { type: "string", example: "멋진 아이템" },
                    context: { type: "string", example: "이 아이템을 사용하면 멋있어집니다!" },
                    cost: { type: "number", example: 300 },
                    acquiredAt: { type: "string", example: "2025-05-30T10:15:30.000Z" },
                    isEquipped: { type: "boolean", example: false },
                  },
                },
              },
            },
          },
        },
      },
    }
  */
  try {
    const userId = req.userId;
    const items = await getUserItems(userId);
    res.send(response(status.SUCCESS, items));
  } catch (err) {
    console.error(err);
    res.send(response(BaseError));
  }
};

// 상점 아이템 전체 조회
export const handleGetShopItems = async (req, res) => {
  /*
    #swagger.summary = '상점 아이템 전체 조회 API'
    #swagger.tags = ['Shop']
    #swagger.responses[200] = {
      description: "아이템 목록 조회 성공",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: true },
              code: { type: "number", example: 200 },
              message: { type: "string", example: "요청에 성공하였습니다." },
              result: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "number", example: 1 },
                    name: { type: "string", example: "멋진 아이템" },
                    context: { type: "string", example: "이 아이템을 사용하면 멋있어집니다!" },
                    cost: { type: "number", example: 300 }
                  }
                }
              }
            }
          }
        }
      }
    }
  */
  try {
    const items = await getAllShopItems();
    res.send(response(status.SUCCESS, items));
  } catch (err) {
    console.error(err);
    res.send(response(BaseError));
  }
};

// 아이템 정보 수정
export const handleUpdateItem = async (req, res) => {
  /*
    #swagger.summary = '아이템 수정 API'
    #swagger.tags = ['Shop']
    #swagger.security = [{"BearerAuth": []}]
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["itemId"],
            properties: {
              itemId: { type: "number", example: 1 },
              name: { type: "string", example: "수정된 이름" },
              context: { type: "string", example: "수정된 설명" },
              cost: { type: "number", example: 200 }
            }
          }
        }
      }
    }
  */
  try {
    const { itemId, name, context, cost } = req.body;
    const updatedItem = await updateItem(itemId, { name, context, cost });
    res.send(response(status.SUCCESS, updatedItem));
  } catch (err) {
    console.error(err);
    res.send(response(BaseError));
  }
};

// 아이템 삭제
//export const handleDeleteItem = async (req, res) => {
  /*
    #swagger.summary = '아이템 삭제 API'
    #swagger.tags = ['Shop']
    #swagger.security = [{"BearerAuth": []}]
    #swagger.parameters['itemId'] = {
      in: 'path',
      description: '삭제할 아이템의 ID',
      required: true,
      schema: { type: 'integer', example: 1 }
    }
    #swagger.responses[200] = { description: "아이템 삭제 성공" }
  */
 /*
  try {
    const itemId = Number(req.params.itemId);
    if (isNaN(itemId)) {
      return res.status(400).send({
        isSuccess: false,
        code: "ITEM_ID_INVALID",
        message: "itemId는 숫자여야 합니다.",
        result: null
      });
    }

    await deleteItem(itemId);

    res.send({
      isSuccess: true,
      code: 200,
      message: "아이템 삭제 성공",
      result: null
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      isSuccess: false,
      code: "SERVER_ERROR",
      message: "서버 오류가 발생했습니다.",
      result: null
    });
  }
};
*/