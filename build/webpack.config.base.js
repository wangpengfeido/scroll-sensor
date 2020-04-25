const path = require('path');
module.exports = {
  entry: {
    'scroll-sensor': './src/scroll-sensor.ts',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.ts$/,
        use: [{ loader: 'ts-loader' }, { loader: 'eslint-loader' }],
      },
    ],
  },
};
