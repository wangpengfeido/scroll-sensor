const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = webpackMerge(baseConfig, {
  output: {
    filename: '[name].js',
  },
  mode: 'development',
});

module.exports = config;
