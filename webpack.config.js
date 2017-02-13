const path = require('path')
const webpack = require('webpack')

const PATHS = {
  demo: path.join(__dirname, './demo/index.js'),
  built: path.join(__dirname, './demo')
}

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    PATHS.demo
  ],
  output: {
    path: PATHS.built,
    filename: 'compiled.js',
  },
  module: {
    rules: [
      { test: /\.js$/, use: [{ loader: 'babel-loader' }] }
    ]
  }
}
