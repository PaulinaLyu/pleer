const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common.js");

module.exports = merge(commonConfig(), {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 5000,
    open: true,
    hot: true,
    watchFiles: "./",
  },
});
