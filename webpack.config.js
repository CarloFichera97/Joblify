const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "index.bundle.js",
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
    ],
    devServer: {
      port: 3010,
      watchContentBase: true,

      historyApiFallback: true,
    },
    devtool: "inline-cheap-module-source-map", //"source-map",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
  };
};
