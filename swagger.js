// import swaggerAutogen from "swagger-autogen";

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
const routes = [
  process.env.NODE_ENV === "production"
    ? "./dist/index.js"
    : "./src/index.js"
];

const doc = {
  // ← 이 줄을 추가
  openapi: "3.0.0",

  info: {
    title: "CAP",
    version: "1.0.0",    // (이건 API 버전)
  },

  servers: [
    {
      url: process.env.BASE_URL || "http://localhost:3000",
      description: "API Server",
    },
    {
      url: "https://thiscatthatcat.shop",
      description: "Production Domain",
    },
    {
      url: "http://13.209.12.236:3000",
      description: "Public IP Server",
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

  security: [{ BearerAuth: [] }],
};

swaggerAutogen(options)(outputFile, routes, doc);