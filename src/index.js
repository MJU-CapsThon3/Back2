import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import './corn-job.js';
import swaggerUiExpress from "swagger-ui-express";
const swaggerFile = require("../swagger-output.json"); // JSON 파일 직접 불러오기
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
