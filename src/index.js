import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import './corn-job.js';
import './cron-quest.js';
import swaggerUiExpress from "swagger-ui-express";
const swaggerFile = require("../swagger-output.json"); // JSON 파일 직접 불러오기
import { verify } from "../src/middleware/jwt.js";

import {
  handleUserSignUp,
  handleLogin,
  handleUserInfo,
  handleGetTopRankings,
  handleGetDailyQuests,
  completeQuest,
  claimQuestReward,
  resetDailyQuests
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
  handleStartBattle,
} from "./controllers/chat.controller.js";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Swagger UI 연결
app.use("/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerFile, {
  swaggerOptions: {
    persistAuthorization: true,
  },
}));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(verify);

// API 엔드포인트 등록
app.post("/users/signup", handleUserSignUp);
app.post("/users/login", handleLogin);
app.get("/users/info", handleUserInfo);
app.get("/rankings/top", handleGetTopRankings);
app.post("/battle/rooms", handleCreateRoom);
app.get("/battle/rooms/:roomId", handleGetRoomInfo);
app.post("/battle/rooms/:roomId/participants", handleJoinRoom);
app.post("/battle/rooms/:roomId/start", handleStartBattle);

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


