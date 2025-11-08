/* eslint-disable no-undef */
const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  plugins: [],
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
