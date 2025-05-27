import swaggerAutogen from "swagger-autogen";

// const options = { openapi: "3.0.0" };
// const outputFile = "swagger-output.json";
// const routes = ["./src/index.js"]; // ✅ 실제 주석이 있는 파일

// const doc = {
//   info: { title: "CAP", version: "1.0.0" },
//   servers: [{ url: "http://localhost:3000" }],
// };

// swaggerAutogen(options)(outputFile, routes, doc);

import swaggerAutogen from "swagger-autogen";

const options = { openapi: "3.0.0" };
const outputFile = "swagger-output.json";
// 프로덕션에선 dist/index.js, 로컬에선 src/index.js
const routes = [
  process.env.NODE_ENV === "production"
    ? "./dist/index.js"
    : "./src/index.js"
];

const doc = {
  info: { title: "CAP", version: "1.0.0" },
  servers: [
    {
      // 배포시 ENV로 설정해줄 도메인(예: https://api.my-domain.com)
      url: process.env.BASE_URL || "http://localhost:3000",
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: "Bearer 토큰을 사용한 인증",
      },
    },
  },
  // 전역으로 모든 엔드포인트에 lock 아이콘을 붙임
  security: [{ BearerAuth: [] }],
};

swaggerAutogen(options)(outputFile, routes, doc);