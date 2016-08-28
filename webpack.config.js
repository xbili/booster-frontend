'use strict'

const webpack = require('webpack')
const path = require('path')

let debug = false
if (process.env.DEBUG) {
  debug = true
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      '__DEBUG__': debug
    })
  ],
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true,
    compress: true,
    quiet: false,
    noInfo: false,
    filename: 'bundle.js',
    publicPath: '/assets/',
    headers: { 'X-Custom-Header': 'yes' },
    stats: { colors: true, errorDetails: true }
  }
}

