const path = require('path')
const webpack = require('webpack')

const PATHS = {
  src: path.join(__dirname, './src/index.js'),
  built: path.join(__dirname, './built')
}

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    PATHS.src
  ],
  output: {
    path: PATHS.built,
    filename: 'index.js',
  },
  module: {
    rules: [
      { test: /\.js$/, use: [{ loader: 'babel-loader' }] }
    ]
  }
}
