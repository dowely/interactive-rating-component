const webpack = require("webpack");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

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
        loader: "ts-loader",
        exclude: /node_modules/,
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    }),
  ],
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
