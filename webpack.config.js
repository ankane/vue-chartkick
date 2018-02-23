var webpack = require("webpack")
var path = require("path")

module.exports = {
  entry: {
    "vue-chartkick": "./src/index.js",
    "vue-chartkick.min": "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ],
  externals: {
    "vue": "Vue",
    "chartkick": "Chartkick"
  }
}
