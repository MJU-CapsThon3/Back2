const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  openapi: "3.0.0", // ✅ 여기에만 version 정의
  info: {
    title: "2025-1 Cap",
    version: "1.0.0",
    description: "캡스톤 프로젝트 API 문서입니다.",
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
      url: "https://13.209.12.236:3000",
      description: "Public IP Server",
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [{ BearerAuth: [] }],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
  "./src/index.js",
  "./src/controllers/user.controller.js",
  "./src/controllers/chat.controller.js",
];

swaggerAutogen(outputFile, endpointsFiles, doc);
