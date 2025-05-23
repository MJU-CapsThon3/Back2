import dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import swaggerAutogen from "swagger-autogen";
import swaggerUiExpress from "swagger-ui-express";
import { verify } from "../src/middleware/jwt.js";
import { handleUserSignUp,
        handleLogin,
        handleUserInfo,
} from "./controllers/user.controller.js";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());                            // cors 방식 허용
app.use(express.static('public'));          // 정적 파일 접근
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(
    {},
    {
      swaggerOptions: {
        url: "/openapi.json",
      },
    }
  )
);

app.get("/openapi.json", async (req, res, next) => {
  // #swagger.ignore = true
  const options = {
    openapi: "3.0.0",
    disableLogs: true,
    writeOutputFile: false,
  };
  const outputFile = "/dev/null";
  const routes = ["./src/index.js"];
  const protocol = req.protocol; // http 또는 https
  const host = req.get("host");
  const doc = {
    info: {
      title: "2025-1 Cap",
      description: "2025년 캡스톤 프로젝트입니다.",
    },
    host: `${protocol}://${host}`,
    components: {
      securitySchemes: {
        Bearer: {
          type: "apiKey",
          in: "header",
          name: "Authorization", // Authorization 헤더로 전달
          description: "Bearer token을 사용한 인증",
        },
      },
    },
    security: [
      {
        Bearer: [], // 기본적으로 Bearer 인증을 적용
      },
    ],
  };

  const result = await swaggerAutogen(options)(outputFile, routes, doc);
  res.json(result ? result.data : null);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(verify);

// 회원가입 api
app.post("/users/signup", handleUserSignUp);

//로그인 api
app.post("/users/login", handleLogin);

//유저 정보를 불러오는 api
app.get("/users/info", handleUserInfo);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});