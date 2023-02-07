const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  const dist = "dist";
  const filename = (env) => {
    return `[name].[contenthash].${env}`;
  };
  const plugins = () => {
    return [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public/index.html") }),
      new CopyPlugin({
        patterns: [
          // { from: "public", to: "dist" },
          {
            from: path.resolve(__dirname, "public", "favicon.png"),
            to: path.resolve(__dirname, dist),
          },
        ],
      }),
      new MiniCssExtractPlugin(),
    ];
  };
  return {
    context: path.resolve(__dirname, "src"),
    entry: { main: "./index.js" },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `[name].[contenthash].bundle.js`,
      clean: true,
    },
    plugins: plugins(),
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [[require("postcss-preset-env")]],
                },
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
  };
};
