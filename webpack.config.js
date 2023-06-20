const currentTask = process.env.npm_lifecycle_event;

const webpack = require("webpack");
const path = require("path");
const fse = require("fs-extra");
const { rimrafSync } = require("rimraf");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

class RunBeforeCompile {
  apply(compiler) {
    compiler.hooks.beforeCompile.tap("Clean docs", function () {
      rimrafSync("./docs");
    });
  }
}

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy assets", function () {
      fse.copySync("./src/assets", "./docs/assets");
    });
  }
}

let scssRule = {
  test: /\.scss$/,
  use: ["css-loader", "sass-loader"],
};

let config = {
  entry: "./src/index.ts",
  module: {
    rules: [
      scssRule,
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
    alias: { "@": path.resolve(__dirname, "src") },
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
};

if (currentTask === "dev") {
  config.mode = "development";

  scssRule.use.unshift("vue-style-loader");

  config.output = {
    filename: "main.js",
    path: path.resolve(__dirname, "docs"),
  };

  config.devServer = {
    port: 3050,
    static: "./docs",
    hot: true,
    watchFiles: "./src/index-template.html",
    historyApiFallback: true,
    open: true,
  };
}

if (currentTask === "build") {
  config.mode = "production";

  scssRule.use.unshift(MiniCssExtractPlugin.loader);

  config.plugins.push(
    new MiniCssExtractPlugin({ filename: "styles.[chunkhash].css" })
  );

  config.output = {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "docs"),
  };
}

module.exports = config;
