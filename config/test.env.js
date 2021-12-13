'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  URL: '"./"',
  API_ENDPOINT: '"localhost:8080"',
  CLIENT_ENV: '"development"'
})
