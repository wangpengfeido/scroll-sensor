const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = webpackMerge(baseConfig, {
  output: {
    filename: '[name].common.js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    events: 'events',
  },
  mode: 'production',
  performance: {
    hints: false,
  },
  stats: {
    children: false,
  },
  optimization: {
    minimize: false,
  },
});

module.exports = config;
