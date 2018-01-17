const path = require('path');

module.exports = {
  entry: ['babel-polyfill', 'react-hot-loader/patch', './index.js'],
  output: {
    path: path.resolve('static'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
};
