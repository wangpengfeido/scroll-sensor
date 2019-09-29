const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = webpackMerge(baseConfig, {
  output: {
    filename: '[name].min.js',
  },
  mode: 'production',
});

module.exports = config;
