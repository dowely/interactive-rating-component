const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  mode: "development",
  devServer: {
    port: 3050,
    static: "./",
    hot: true,
    liveReload: false,
    historyApiFallback: true,
    open: true,
    host: "0.0.0.0",
  },
};
