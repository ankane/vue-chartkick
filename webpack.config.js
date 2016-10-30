var webpack = require("webpack")

module.exports = {
  entry: {
    "vue-chartkick": "./index.js",
    "vue-chartkick.min": "./index.js"
  },
  output: {
    path: "./dist",
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
