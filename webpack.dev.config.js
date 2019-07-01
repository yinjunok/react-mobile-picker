const path = require("path");
const os = require("os");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./example/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    libraryTarget: "umd",
    pathinfo: false
  },
  devtool: "cheap-module-eval-source-map",

  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, "example"),
          path.resolve(__dirname, "src")
        ],
        use: ["babel-loader", "react-hot-loader/webpack"]
      },
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, "example"),
          path.resolve(__dirname, "src")
        ],
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          }, {
            loader: "postcss-loader"
          }, {
            loader: "less-loader"
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "dll"),
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./example/template.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require("./dll/vendor-manifest.json")
    })
  ]
};
