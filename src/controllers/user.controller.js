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
    getDailyQuestsService,
    getUserQuestProgress,
    getQuestsGoal,
    isRewardReceived,
    completeQuestIfEligible,
    claimQuestRewardService,
    resetDailyQuestsService
 } from "../services/user.service.js";
import { loginRequestDTO,
  responseFromRankingList,
  responseFromQuestList
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

// 퀘스트 관련 추가한 부분
export const handleGetDailyQuests = async (req, res) => {
  /*
    #swagger.summary = '전체 일일 퀘스트 목록 조회 API'
    #swagger.tags = ['Quest']
    #swagger.security = [{ "BearerAuth": [] }]
  
    #swagger.responses[200] = {
      description: '퀘스트 목록 조회 성공',
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: true },
              code: { type: "number", example: 200 },
              message: { type: "string", example: "성공" },
              result: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "integer", example: 1 },
                    name: { type: "string", example: "첫 번째 퀘스트" },
                    description: { type: "string", example: "퀘스트 상세 설명" },
                    type: { type: "string", example: "daily" },
                    rewardPts: { type: "integer", example: 100 },
                    createdAt: { type: "string", format: "date-time", example: "2025-05-31T00:00:00.000Z" }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    #swagger.responses[401] = {
      description: '토큰 형식 오류',
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: false },
              code: { type: "string", example: "TOKEN_FORMAT_INCORRECT" },
              message: { type: "string", example: "토큰 형식이 올바르지 않습니다." },
              result: { type: "object", nullable: true, example: null }
            }
          }
        }
      }
    }
  
    #swagger.responses[500] = {
      description: '서버 오류',
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: false },
              code: { type: "string", example: "SERVER_ERROR" },
              message: { type: "string", example: "서버 오류 발생" },
              result: { type: "object", nullable: true, example: null }
            }
          }
        }
      }
    }
  */
    try {
      console.log("퀘스트 정보를 불러옵니다.");
    
      const token = await checkFormat(req.get("Authorization"));
      if(token !== null) {
        // 토큰 이상 없음
        // 서비스 호출
        const rawList = await getDailyQuestsService();
        // DTO 변환
        const payload = responseFromQuestList(rawList);
        res.send(response(status.SUCCESS, payload));
      } else {
        res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
      }
    } catch (err) {
      console.error(err);
      res.send(response(BaseError));
    }
  };
  
  export const completeQuest = async (req, res) => {
  /*
  #swagger.summary = '퀘스트 완료 처리 API'
  #swagger.description = 'JWT 토큰에서 유저 정보를 추출하고, 퀘스트 ID에 대한 완료 처리를 수행합니다.'
  #swagger.tags = ['Quest']
  #swagger.security = [{ "BearerAuth": [] }]

  #swagger.parameters['questId'] = {
    in: 'path',
    description: '완료할 퀘스트의 ID',
    required: true,
    type: 'number',
    example: 1
  }

  #swagger.responses[200] = {
    description: "퀘스트 완료 성공",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            success: { type: "boolean", example: true },
            message: { type: "string", example: "퀘스트를 성공했습니다." },
            result: {
              type: "object",
              properties: {
                questId: { type: "number", example: 1 },
                isCompleted: { type: "boolean", example: true },
                progress: { type: "number", example: 1 }
              }
            }
          }
        }
      }
    }
  }

  #swagger.responses[400] = {
    description: "보상 이미 수령함, 목표치 달성, 또는 퀘스트 조건 불충족",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            success: { type: "boolean", example: false },
            message: {
              type: "string",
              oneOf: [
                { example: "이미 보상을 수령한 퀘스트입니다." },
                { example: "이미 목표치를 달성했습니다." },
                { example: "퀘스트 조건을 만족하지 않습니다." }
              ]
            },
            result: {
              oneOf: [
                { type: "object", nullable: true, example: null },
                {
                  type: "object",
                  properties: {
                    progress: { type: "number", example: 5 },
                    goal: { type: "number", example: 5 }
                  }
                }
              ]
            }
          }
        }
      }
    }
  }

  #swagger.responses[401] = {
    description: "토큰 없음",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            success: { type: "boolean", example: false },
            message: { type: "string", example: "토큰이 없습니다." },
            result: { type: "object", nullable: true, example: null }
          }
        }
      }
    }
  }

  #swagger.responses[403] = {
    description: "유효하지 않은 토큰",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            success: { type: "boolean", example: false },
            message: { type: "string", example: "유효하지 않은 토큰입니다." },
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
            success: { type: "boolean", example: false },
            message: { type: "string", example: "서버 오류 발생" },
            result: { type: "object", nullable: true, example: null }
          }
        }
      }
    }
  }
*/
    try {
      console.log("퀘스트 진행 상태를 확인합니다");
      const token = await checkFormat(req.get("Authorization"));
      if(token !== null) {
        //토큰 이상 없음
        //서비스 호출
  
        const questId = parseInt(req.params.questId);
        
        // 1. 보상 수령 여부 확인
        const alreadyCompleted = await isRewardReceived(req.userId, questId);
        if (alreadyCompleted) {
          return res.status(400).json({
            success: false,
            message: "이미 보상을 수령한 퀘스트입니다.",
            result: null,
          });
        }
        
        // 2. 퀘스트 진행도와 목표치 비교
        const progress = await getUserQuestProgress(req.userId, questId);
        const goal = await getQuestsGoal(questId);

        if (progress === goal) {
          return res.status(400).json({
            success: false,
            message: "이미 목표치를 달성했습니다.",
            result: {
              progress,
              goal,
            },
          });
        }
        
        // 3. 퀘스트 성공 여부 확인 및 진행도 상승
        res.status(200).json(await completeQuestIfEligible(req.userId, questId));
      } else {
        //토큰 이상감지
        res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: '서버 오류 발생' });
    }
  };
  
  export const claimQuestReward = async (req, res) => {
  /*
    #swagger.summary = '퀘스트 보상 수령 API'
    #swagger.tags = ['Quest']
    #swagger.security = [{ "BearerAuth": [] }]
    #swagger.parameters['body'] = {
      in: 'body',
      description: '퀘스트 보상 요청 정보',
      required: true,
      schema: {
        type: 'object',
        properties: {
          userId: {
            type: 'integer',
            example: 1,
            description: '유저 ID'
          },
          questId: {
            type: 'integer',
            example: 2,
            description: '보상을 받을 퀘스트 ID'
          }
        },
        required: ['userId', 'questId']
      }
    }
    #swagger.responses[200] = {
      description: '보상 수령 성공',
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: true },
              code: { type: "number", example: 200 },
              message: { type: "string", example: "보상을 성공적으로 받았습니다." },
              result: { 
                type: "object",
                example: {
                  reward: 100
                }
              }
            }
          }
        }
      }
    }
    #swagger.responses[400] = {
      description: '잘못된 요청 (퀘스트 미완료, 이미 보상 수령, 잘못된 파라미터 등)',
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: false },
              code: { type: "number", example: 400 },
              message: { 
                type: "string", 
                example: "퀘스트를 완료하지 않았습니다." 
              },
              result: { type: "object", nullable: true, example: null }
            }
          }
        }
      }
    }
    #swagger.responses[401] = {
      description: '토큰 형식 오류',
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: false },
              code: { type: "string", example: "TOKEN_FORMAT_INCORRECT" },
              message: { type: "string", example: "토큰 형식이 올바르지 않습니다." },
              result: { type: "object", nullable: true, example: null }
            }
          }
        }
      }
    }
    #swagger.responses[500] = {
      description: '서버 오류',
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: false },
              code: { type: "string", example: "SERVER_ERROR" },
              message: { type: "string", example: "서버 오류 발생" },
              result: { type: "object", nullable: true, example: null }
            }
          }
        }
      }
    }
  */
    try {
      console.log("퀘스트 보상 상태를 확인합니다");
      const token = await checkFormat(req.get("Authorization"));
      if (token !== null) {
        //토큰 이상 없음
        //서비스 호출
        const questId = parseInt(req.params.questId);
        const result = await claimQuestRewardService(req.userId, questId);
        if (result.status === 'not_completed' || result.status === 'already_claimed') {
          return res.status(200).json(response({ isSuccess: false, code: 200, message: result.message }, result));
        }
        return res.status(200).json(response({ isSuccess: true, code: 200, message: '보상을 성공적으로 받았습니다.' }, result));
      } else {
        //토큰 이상감지
        res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
      }
    } catch (err) {
      if (err instanceof BaseError) {
        return res.status(err.data.code).json({
          success: false,
          message: err.data.message
        });
      }
      console.error(err);
      res.status(500).json({ success: false, message: '서버 오류 발생' });
    }
  };
  
  //퀘스트 초기화
  export const resetDailyQuests = async (req, res) => {
    /*
    #swagger.summary = '일일 퀘스트 초기화 API'
    #swagger.tags = ['Quest']
    #swagger.description = '매일 자정마다 모든 사용자의 퀘스트 완료 및 보상 상태를 초기화합니다.'
  
    #swagger.responses[200] = {
      description: '일일 퀘스트 초기화 성공',
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: true },
              code: { type: "number", example: 200 },
              message: { type: "string", example: "일일 퀘스트가 초기화되었습니다." },
              result: { type: "object", nullable: true, example: null }
            }
          }
        }
      }
    }
  
    #swagger.responses[500] = {
      description: '서버 오류로 초기화 실패',
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: false },
              code: { type: "number", example: 500 },
              message: { type: "string", example: "서버 오류로 퀘스트 초기화에 실패했습니다." },
              result: { type: "object", nullable: true, example: null }
            }
          }
        }
      }
    }
   */
    try {
      console.log("퀘스트를 초기화합니다");
      await resetDailyQuestsService();
      res.status(200).json({
        isSuccess: true,
        code: 200,
        message: '일일 퀘스트가 초기화되었습니다.',
        result: null,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        isSuccess: false,
        code: 500,
        message: '서버 오류로 퀘스트 초기화에 실패했습니다.',
        result: null,
      });
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
            code: { type: "string", example: "200" },
            message: { type: "string", example: "success!" },
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
            code: { type: "string", example: "SHOP4001" },
            message: { type: "string", example: "포인트가 부족합니다." },
            result: { type: "object", nullable: true }
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
            code: { type: "string", example: "SHOP4041" },
            message: { type: "string", example: "존재하지 않는 아이템입니다." },
            result: { type: "object", nullable: true }
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
            code: { type: "string", example: "COMMON000" },
            message: { type: "string", example: "서버 에러, 관리자에게 문의 바랍니다." },
            result: { type: "object", nullable: true }
          }
        }
      }
    }
  }
  */
  try {
    const token = await checkFormat(req.get("Authorization"));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT));
    }
    const userId = req.userId;
    const { itemId } = req.body;

    const result = await buyItem(userId, itemId);
    res.send(response(status.SUCCESS, result));
  } catch (err) {
    console.error(err);

    if (err.message === "존재하지 않는 아이템입니다.") {
      res.send(response(status.ITEM_NOT_FOUND, null));
    } else if (err.message === "포인트가 부족합니다.") {
      res.send(response(status.INSUFFICIENT_POINTS, null));
    } else {
      res.send(response(status.INTERNAL_SERVER_ERROR, null));
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
    #swagger.responses[400] = {
      description: "아이템 추가 실패 - 필수값 누락",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: false },
              code: { type: "string", example: "SHOP4002" },
              message: { type: "string", example: "아이템 이름과 가격은 필수입니다." },
              result: { type: "object", nullable: true }
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
              code: { type: "string", example: "COMMON000" },
              message: { type: "string", example: "서버 에러, 관리자에게 문의 바랍니다." },
              result: { type: "object", nullable: true }
            }
          }
        }
      }
    }
  */

  try {
    const token = await checkFormat(req.get("Authorization"));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT));
    }
    const { name, context, cost } = req.body;

    if (!name || !cost) {
      return res.send(response(status.ITEM_PARAM_REQUIRED, null));
    }

    const newItem = await addItem({ name, context, cost });
    res.send(response(status.SUCCESS, newItem));
  } catch (err) {
    console.error(err);
    res.send(response(status.INTERNAL_SERVER_ERROR, null));
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
              code: { type: "string", example: "200" },
              message: { type: "string", example: "success!" },
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
                    isEquipped: { type: "boolean", example: false }
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
              code: { type: "string", example: "COMMON000" },
              message: { type: "string", example: "서버 에러, 관리자에게 문의 바랍니다." },
              result: { type: "object", nullable: true }
            }
          }
        }
      }
    }
  */
  try {
    const token = await checkFormat(req.get("Authorization"));
    if (!token) {
      return res.send(response(status.TOKEN_FORMAT_INCORRECT));
    }
    const userId = req.userId;
    const items = await getUserItems(userId);
    res.send(response(status.SUCCESS, items));
  } catch (err) {
    console.error(err);
    res.send(response(status.INTERNAL_SERVER_ERROR, null));
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
              code: { type: "string", example: "200" },
              message: { type: "string", example: "success!" },
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
    #swagger.responses[500] = {
      description: "서버 오류",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: false },
              code: { type: "string", example: "COMMON000" },
              message: { type: "string", example: "서버 에러, 관리자에게 문의 바랍니다." },
              result: { type: "object", nullable: true }
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
    res.send(response(status.INTERNAL_SERVER_ERROR, null));
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
    #swagger.responses[200] = {
      description: "아이템 수정 성공",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: true },
              code: { type: "string", example: "200" },
              message: { type: "string", example: "success!" },
              result: {
                type: "object",
                properties: {
                  id: { type: "number", example: 1 },
                  name: { type: "string", example: "수정된 이름" },
                  context: { type: "string", example: "수정된 설명" },
                  cost: { type: "number", example: 200 }
                }
              }
            }
          }
        }
      }
    }
    #swagger.responses[400] = {
      description: "잘못된 요청 (itemId가 없거나 숫자가 아님)",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              isSuccess: { type: "boolean", example: false },
              code: { type: "string", example: "DATABASE4001" },
              message: { type: "string", example: "쿼리 실행 시 전달되는 파라미터가 잘못되었습니다. 파라미터 개수 혹은 파라미터 형식을 확인해주세요." },
              result: { type: "object", nullable: true }
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
              code: { type: "string", example: "COMMON000" },
              message: { type: "string", example: "서버 에러, 관리자에게 문의 바랍니다." },
              result: { type: "object", nullable: true }
            }
          }
        }
      }
    }
  */
  try {
    const { itemId, name, context, cost } = req.body;

    if (!itemId || isNaN(itemId)) {
      return res.send(response(status.PARAMETER_IS_WRONG, null));
    }

    const updatedItem = await updateItem(itemId, { name, context, cost });
    res.send(response(status.SUCCESS, updatedItem));
  } catch (err) {
    console.error(err);
    res.send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};
