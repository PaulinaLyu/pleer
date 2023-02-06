const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.export = () => {
  const filename = (env) => {
    return `[name].[contenthash].${env}`;
  };
  const plugins = () => {
    return [
      new HtmlWebpackPlugin({ template: "public/index.html" }),
      new CopyPlugin({
        patterns: [
          { from: "source", to: "dest" },
          //   {
          //     from: path.resolve(__dirname, "src", "favicon.ico"),
          //     to: path.resolve(__dirname, "dist"),
          //   },
        ],
      }),
    ];
  };
  return {
    context: path.resolve(__dirname, "src"),
    entry: "./index.js",
    output: {
      filename: filename("js"),
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    plugins: plugins(),
  };
};
