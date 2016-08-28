'use strict'

const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.config')

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, config.devServer)

server.listen(8080, 'localhost', function() {
  console.log('Webpack dev server running on http://localhost:8080/webpack-dev-server')
})

