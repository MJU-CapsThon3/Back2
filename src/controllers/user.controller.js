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
    resetDailyQuestsService,
    checkGoalProgress
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

// 퀘스트 부분
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
                  name: { type: "string", example: "첫번째 퀘스트" },
                  description: { type: "string", example: "퀘스트 상세 설명" },
                  rewardPts: { type: "integer", example: 50 },
                  goal: { type: "integer", example: 1 },
                  progress: { type: "integer", example: 1 },
                  status: { type: "string", example: "진행 상태" },
                  createdAt: { type: "string", format: "date-time", example: "2025-05-31T00:00:00.000Z" },
                  rewardClaimed: {type: "boolean", example: "true"},
                  isCompleted: {type: "boolean", example: "true"}
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
        const rawList = await getDailyQuestsService(req.userId);
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
  
  export const handleCompleteQuest = async (req, res) => {
  /*
  #swagger.summary = '퀘스트 완료 API'
  #swagger.tags = ['Quest']
  #swagger.security = [{ "BearerAuth": [] }]
  #swagger.parameters['questId'] = {
    in: 'path',
    description: '완료를 시도할 퀘스트 ID',
    required: true,
    type: 'integer',
    example: 1
  }

  #swagger.responses[200] = {
    description: '퀘스트 진행도 증가 및 완료 여부',
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: true },            
            message: { type: "string", example: "퀘스트를 성공적으로 완료했습니다." },
            code: { type: "number", example: 200 },
            reward: { type: "integer", example: 100 },
            result: {
              type: "object",
              properties: {
                status: {
                  type: "string",
                  description: "퀘스트 처리 상태",
                  enum: ["progressed", "goal_reached", "no_change"],
                  example: "goal_reached"
                },
                questId: { type: "integer", example: 1 },
                isCompleted: { type: "boolean", example: true },
                progress: { type: "integer", example: 5 },
                goal: { type: "integer", example: 5 }
              },
              example: {
                status: "goal_reached",
                questId: 1,
                isCompleted: true,
                progress: 5,
                goal: 5
              }
            }
          }
        }
      }
    }
  }

  #swagger.responses[400] = {
    description: '퀘스트 미완료 혹은 보상 이미 수령',
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code: { type: "string", example: "ALREADY_CLAIM_REWARD" },
            message: { type: "string", example: "이미 보상을 받았습니다." },
            result: { type: "string", example: "already_claimed" }
          }
        }
      }
    }
  }

  #swagger.responses[404] = {
    description: '존재하지 않는 퀘스트',
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            isSuccess: { type: "boolean", example: false },
            code: { type: "string", example: "QUEST_NOT_EXIST" },
            message: { type: "string", example: "존재하지 않는 퀘스트입니다." },
            result: { type: "string", example: "not_existed" }
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
      console.log("퀘스트 진행 상태를 확인합니다");
      const token = await checkFormat(req.get("Authorization"));
      if(token !== null) {
        //토큰 이상 없음
        //서비스 호출
  
        const questId = parseInt(req.params.questId);
        if(isNaN(questId) || questId < 1 || questId > 6) {
          return res.send(response(status.QUEST_NOT_EXIST));
        }

        // 오직 퀘스트 진행도만 증가 혹은 완료 처리만 담당
        const checkQuestClear = await completeQuestIfEligible(req.userId, questId);

        if(checkQuestClear.status === 'not_yet_cleared') {
          return res.send(response(status.INCOMPLETE, checkQuestClear.status));
        } 

        return res.status(200).json({
          isSuccess: checkQuestClear.success,
          message: checkQuestClear.message,
          result: {
            status: checkQuestClear.status, // ex: "progressed", "goal_reached"
            questId,
            isCompleted: checkQuestClear.isCompleted,
            progress: checkQuestClear.progress,
            goal: checkQuestClear.goal,
          }
        });
      } else {
        //토큰 이상감지
        res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: '서버 오류 발생' });
    }
  };
  
  export const handleClaimQuestReward = async (req, res) => {
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
        if(questId > 6) {
          return res.send(response(status.QUEST_NOT_EXIST));
        }
        const result = await claimQuestRewardService(req.userId, questId);

        if (result.status === 'already_claimed') {
          return res.send(response(status.ALREADY_CLAIM_REWARD, result.status));
        } else if(result.status === 'not_completed') {
          return res.send(response(status.INCOMPLETE, result.status));
        } else if(result.status === 'not_existed') {
          return res.send(response(status.QUEST_NOT_EXIST, result.status));
        } 

        return res.status(200).json({
          isSuccess: true, 
          code: 200, message: '보상을 성공적으로 받았습니다.', 
          reward: result.reward,
          result: {
            reward: result.reward,
            rewardClaimed: result.rewardClaimed,
          },
        });
      } else {
        //토큰 이상감지
        res.send(response(status.TOKEN_FORMAT_INCORRECT, null));
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: '서버 오류 발생' });
    }
  };
  
  //퀘스트 초기화
  export const handleResetDailyQuests = async (req, res) => {
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
      });
    } catch (err) {
      cconsole.error(err);
      res.status(500).json({ success: false, message: '서버 오류 발생' });
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
  #swagger.responses[401] = {
    description: "토큰 형식 오류",
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
      return res.status(401).send(response(status.TOKEN_FORMAT_INCORRECT));
    }
    const userId = req.userId;
    const { itemId } = req.body;

    const result = await buyItem(userId, itemId);
    res.send(response(status.SUCCESS, result));
  } catch (err) {
    console.error(err);

    if (err.message === "존재하지 않는 아이템입니다.") {
      res.status(404).send(response(status.ITEM_NOT_FOUND, null));
    } else if (err.message === "포인트가 부족합니다.") {
      res.status(400).send(response(status.INSUFFICIENT_POINTS, null));
    } else {
      res.status(500).send(response(status.INTERNAL_SERVER_ERROR, null));
    }
  }
};

// 새로운 아이템 추가
export const handleAddItem = async (req, res) => {
  /*
    #swagger.summary = '아이템 추가 API'
    #swagger.tags = ['Shop']
    #swagger.security = [{"BearerAuth": []}]
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["id", "name", "price", "category"],
            properties: {
              name: { type: "string", example: "커스텀 팀 아이콘" },
              price: { type: "number", example: 11500 },
              icon: { type: "string", example: "<svg .../>" },
              category: { type: "string", example: "팀 아이콘" }
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
              code: { type: "string", example: "200" },
              message: { type: "string", example: "success!" },
              result: {
                type: "object",
                properties: {
                  name: { type: "string", example: "커스텀 팀 아이콘" },
                  price: { type: "number", example: 11500 },
                  icon: { type: "string", example: "<svg .../>" },
                  category: { type: "string", example: "팀 아이콘" }
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
              message: { type: "string", example: "아이템 name, price, category는 필수입니다." },
              result: { type: "object", nullable: true }
            }
          }
        }
      }
    }
    #swagger.responses[401] = {
      description: "토큰 형식 오류",
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
      return res.status(401).send(response(status.TOKEN_FORMAT_INCORRECT));
    }

    const { name, category, icon, price } = req.body;

    if (!name || !category || !price) {
      return res.status(400).send(response(status.ITEM_PARAM_REQUIRED, null));
    }

    const newItem = await addItem({ name, category, icon, price });
    res.send(response(status.SUCCESS, newItem));
  } catch (err) {
    console.error(err);
    res.status(500).send(response(status.INTERNAL_SERVER_ERROR, null));
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
                    name: { type: "string", example: "커스텀 팀 아이콘" },
                    category: { type: "string", example: "팀 아이콘" },
                    icon: { type: "string", example: "<svg .../>" },
                    price: { type: "number", example: 11500 },
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
    #swagger.responses[401] = {
      description: "토큰 형식 오류",
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
      return res.status(401).send(response(status.TOKEN_FORMAT_INCORRECT));
    }
    const userId = req.userId;
    const items = await getUserItems(userId);
    res.send(response(status.SUCCESS, items));
  } catch (err) {
    console.error(err);
    res.status(500).send(response(status.INTERNAL_SERVER_ERROR, null));
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
                    name: { type: "string", example: "커스텀 팀 아이콘" },
                    category: { type: "string", example: "팀 아이콘" },
                    icon: { type: "string", example: "<svg .../>" },
                    price: { type: "number", example: 11500 }
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
    res.status(500).send(response(status.INTERNAL_SERVER_ERROR, null));
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
              category: { type: "string", example: "팀 아이콘" },
              icon: { type: "string", example: "<svg .../>" },
              price: { type: "number", example: 12000 }
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
                  itemId: { type: "number", example: 1 },
                  name: { type: "string", example: "수정된 이름" },
                  category: { type: "string", example: "팀 아이콘" },
                  icon: { type: "string", example: "<svg .../>" },
                  price: { type: "number", example: 12000 }
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
    const { itemId, name, category, icon, price } = req.body;

    if (!itemId || isNaN(itemId)) {
      return res.status(400).send(response(status.PARAMETER_IS_WRONG, null));
    }

    const updatedItem = await updateItem(itemId, { name, category, icon, price });
    res.send(response(status.SUCCESS, updatedItem));
  } catch (err) {
    console.error(err);
    res.status(500).send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};
