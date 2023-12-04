// webpack.dev.config.js
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const commonConfig = require("../webpack.config.js");

const devConfig = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    publicPath: "/", // This allows you to specify the base path for all the assets within your application.
    historyApiFallback: true, // will redirect 404s to /index.html.
    hot: true,
    // open: true,
    liveReload: true,
    // port: 8000,
  },
});

module.exports = devConfig;
