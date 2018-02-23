var webpack = require("webpack")
var path = require("path")

module.exports = {
  entry: {
    "react-chartkick": "./src/index.js",
    "react-chartkick.min": "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ],
  externals: {
    vue: {
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
      root: "Vue"
    },
    chartkick: {
      commonjs: "chartkick",
      commonjs2: "chartkick",
      amd: "chartkick",
      root: "Chartkick"
    }
  }
}
