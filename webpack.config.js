const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"), // 경로 안정성을 위해 path.resolve 사용
  entry: {
    app: "./index.js", // ✅ context가 src이므로 상대 경로
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        type: "json", // ✅ JSON 파일을 ES6 import/export로 불러오기 허용
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json"], // ✅ import 시 확장자 생략 허용
  },
  target: "node",
  externalsPresets: {
    node: true,
  },
  externals: [nodeExternals()],
};
