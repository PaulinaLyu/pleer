const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  const dist = "dist";
  const plugins = () => {
    return [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "public", "favicon.png"),
            to: path.resolve(__dirname, dist),
          },
          // {
          //   from: path.resolve(__dirname, "assets", "images"),
          //   to: path.resolve(__dirname, dist, "images"),
          // },
          // {
          //   from: path.resolve(__dirname, "assets", "icons"),
          //   to: path.resolve(__dirname, dist, "icons"),
          // },
          // {
          //   from: path.resolve(__dirname, "assets", "sounds"),
          //   to: path.resolve(__dirname, dist, "sounds"),
          // },
        ],
      }),
      new MiniCssExtractPlugin(),
      new webpack.ProgressPlugin(),
    ];
  };
  return {
    context: path.resolve(__dirname, "src"),
    entry: { main: path.resolve(__dirname, "src", "index.js") },
    output: {
      filename: `[name].[contenthash].bundle.js`,
      assetModuleFilename: "assets/[name][ext]",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    // output: {
    //   path: path.resolve(__dirname, "dist"),
    //   filename: `[name].[contenthash].bundle.js`,
    //   clean: true,
    // },
    resolve: {
      extensions: [".js"],
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
          generator: {
            filename: "fonts/[name][ext]",
          },
        },
        {
          test: /\.(jpe?g|png|webp|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.svg$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/icons/[name][ext]",
          },
        },
        {
          test: /\.mp3$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/sounds/[name][ext]",
          },
        },
      ],
    },
  };
};
