const webpack = require("webpack");
const path = require("path");
const fse = require("fs-extra");
const { rimrafSync } = require("rimraf");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

class RunBeforeCompile {
  apply(compiler) {
    compiler.hooks.beforeCompile.tap("Clean dist", function () {
      rimrafSync("./dist");
    });
  }
}

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy assets", function () {
      fse.copySync("./src/assets", "./dist/assets");
    });
  }
}

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
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index-template.html",
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    }),
    new RunBeforeCompile(),
    new RunAfterCompile(),
  ],
  mode: "development",
  devServer: {
    port: 3050,
    static: "./dist",
    hot: true,
    watchFiles: "./src/index-template.html",
    historyApiFallback: true,
    open: true,
  },
};
