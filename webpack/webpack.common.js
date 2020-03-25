const path = require("path");
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: ["eslint-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets"
          }
        }
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      context: path.resolve(__dirname, "../src/styles"),
      files: "**/*.scss",
      failOnError: false,
      quiet: false
    })
  ]
};
