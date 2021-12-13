'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"staging"',
  URL: '"hogehoge"',
  API_ENDPOINT: '"hogehoge"',
  CLIENT_ENV: '"staging"'
})
