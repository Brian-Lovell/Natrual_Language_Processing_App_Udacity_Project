const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/client/index.js',
  output: {
    libraryTarget: 'var',
    library: 'Client'
    // filename: 'main.js',
    // path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html"
    })
  ]
};