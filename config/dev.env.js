'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_URL: '"http://board-api.sanaudon.com"'
  API_URL: '"http://localhost:8090"'
});
