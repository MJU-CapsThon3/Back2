import swaggerAutogen from "swagger-autogen";

const options = { openapi: "3.0.0" };
const outputFile = "swagger-output.json";
const routes = ["./src/index.js"]; // ✅ 실제 주석이 있는 파일

const doc = {
  info: { title: "CAP", version: "1.0.0" },
  servers: [{ url: "http://localhost:3000" }],
};

swaggerAutogen(options)(outputFile, routes, doc);
