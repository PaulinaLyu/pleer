const { merge } = require("webpack-merge");
const ESLintPlugin = require("eslint-webpack-plugin");
const commonConfig = require("./webpack.config.common.js");

module.exports = merge(commonConfig(), {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    watchFiles: "./",
  },
  plugins: [new ESLintPlugin()],
});
