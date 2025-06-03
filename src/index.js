import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import http from "http";
import swaggerUiExpress from "swagger-ui-express";
import { Server as SocketIOServer } from "socket.io";
import { verify } from "./middleware/jwt.js";
import './cron-quest.js';

import {
  handleUserSignUp,
  handleLogin,
  handleUserInfo,
  handleGetTopRankings,
  handleGetDailyQuests,
  completeQuest,
  claimQuestReward,
  resetDailyQuests,
  handleBuyItem,
  handleAddItem,
  handleGetUserItems,
  handleGetShopItems,
  handleUpdateItem,
  //handleDeleteItem,

} from "./controllers/user.controller.js";
import {
  handleCreateRoom,
  handleJoinRoom,
  handleGetRoomInfo,
  handleGetRoomsInfo,
  handleStartBattle,
  handleGetChatHistory,
  handlePostChatMessage,
  handlePostVote,
  handleGetVoteHistory,
  handleEndBattle,
  handleGetFinalResult,
  handleChangeParticipantRole,
  handleGetRoomDetail,
  handleSetRoomTopics,
  handleGenerateRoomTopicsAI,
  handleUpdateTopics,
  handleLeaveRoom
} from "./controllers/chat.controller.js";
import { registerChatHandlers
} from "./socket/chat.socket.js";
import {
  handleFilterProfanity,
  handleAnalyzeSentiment,
  handleAnalyzeDebate,
  handleGenerateTopic,
} from "./controllers/ai.controller.js";

const swaggerFile = require("../swagger-output.json"); // JSON 파일 직접 불러오기

BigInt.prototype.toJSON = function () {
  return this.toString();
};

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:3000',
      'https://localhost:3000',
      'https://thiscatthatcat.shop',
      'https://13.209.12.236:3000',
      'https://api.thiscatthatcat.shop'
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // origin이 허용된 도메인 목록에 포함되거나, origin이 없을 경우(로컬 테스트 등)
      callback(null, true);
    } else {
      // origin이 허용되지 않으면 CORS 오류 발생
      callback(new Error('Not allowed by CORS'), false);
    }
  },
  credentials: true,                 // 자격 증명 허용
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
//app.options('/*', cors(corsOptions)); 

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Swagger UI 연결
app.use("/docs", 
  swaggerUiExpress.serve, 
  swaggerUiExpress.setup(swaggerFile, {
  swaggerOptions: {persistAuthorization: true,},
  })
);

// API 엔드포인트 등록
app.post("/users/signup", handleUserSignUp);
app.post("/users/login", handleLogin);

app.use(verify);

app.get("/users/info", handleUserInfo);
app.get("/rankings/top", handleGetTopRankings);
app.post("/battle/rooms", handleCreateRoom);
app.get("/battle/rooms",handleGetRoomsInfo);
app.get("/battle/rooms/:roomId", handleGetRoomInfo);
app.get("/battle/rooms/:roomId/detail", handleGetRoomDetail);
app.post("/battle/rooms/:roomId/participants", handleJoinRoom);
app.post("/battle/rooms/:roomId/participants/role", handleChangeParticipantRole);
app.post("/battle/rooms/:roomId/topics", handleSetRoomTopics);
app.post("/battle/rooms/:roomId/topics/ai", handleGenerateRoomTopicsAI);
app.post("/battle/rooms/:roomId/topics/update", handleUpdateTopics);
app.post("/battle/rooms/:roomId/start", handleStartBattle);
app.post("/battle/rooms/:roomId/leave", handleLeaveRoom);
app.get("/battle/rooms/:roomId/chat/messages", handleGetChatHistory);
app.post("/battle/rooms/:roomId/chat/messages", handlePostChatMessage);
app.post("/battle/rooms/:roomId/end", handleEndBattle);

app.post("/battle/rooms/:roomId/votes", handlePostVote);
app.get("/battle/rooms/:roomId/votes", handleGetVoteHistory);

app.get("/battle/rooms/:roomId/result", handleGetFinalResult);

app.post("/ai/filter", handleFilterProfanity);
app.post("/ai/analyze", handleAnalyzeSentiment);
app.post("/ai/analyze_debate", handleAnalyzeDebate);
app.post("/ai/generate_topic", handleGenerateTopic);

// Express 기반 HTTP 서버를 만들어 줍니다.
const httpServer = http.createServer(app);

// Socket.IO 서버 생성
const io = new SocketIOServer(httpServer, {
  cors: { origin: "*" },
});

// Socket.IO 이벤트 핸들러 등록
registerChatHandlers(io);

// 퀘스트 관련 추가한 부분
// 퀘스트 목록 조회
app.get("/quests/list", handleGetDailyQuests);
// 퀘스트 진행 상황 조회
app.post('/quests/status/:questId', completeQuest);
// 퀘스트 보상 받기
app.post('/quests/reward/:questId', claimQuestReward);
// 퀘스트 초기화
app.post('/quests/reset-daily', resetDailyQuests);

// 상점 아이템 구매 API
app.post("/shop/buy-item", handleBuyItem);
// 아이템 추가 API
app.post("/shop/items", handleAddItem);
// 유저가 소유한 아이템 목록 조회
app.get("/shop/my-items", handleGetUserItems);
// 상점 아이템 전체 조회
app.get("/shop/items", handleGetShopItems);
// 아이템 정보 수정 API
app.post("/shop/items/update", handleUpdateItem);
// 아이템 삭제 API
//app.delete("/shop/items/:itemId", handleDeleteItem);

// 최종 리스닝
httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });