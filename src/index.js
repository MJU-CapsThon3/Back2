import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import http from "http";
import swaggerUiExpress from "swagger-ui-express";
import { Server as SocketIOServer } from "socket.io";

import './corn-job.js';
import { verify } from "../src/middleware/jwt.js";
import {
  handleUserSignUp,
  handleLogin,
  handleUserInfo,
  handleGetTopRankings,
} from "./controllers/user.controller.js";
import {
  handleCreateRoom,
  handleJoinRoom,
  handleGetRoomInfo,
  handleStartBattle,
} from "./controllers/chat.controller.js";
import { registerChatHandlers
} from "./socket/chat.socket.js";

const swaggerFile = require("../swagger-output.json"); // JSON 파일 직접 불러오기

BigInt.prototype.toJSON = function () {
  return this.toString();
};

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
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

// Express 기반 HTTP 서버를 만들어 줍니다.
const httpServer = http.createServer(app);

// Socket.IO 서버 생성
const io = new SocketIOServer(httpServer, {
  cors: { origin: "*" },
});

// Socket.IO 이벤트 핸들러 등록
registerChatHandlers(io);

// 최종 리스닝
httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
