const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "./src/js"),
    publicPath: "/",
    hot: true,
    port: 3000,
  },

  entry: "./src/js/index.js",

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
