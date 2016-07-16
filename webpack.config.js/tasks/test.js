const PATHS = require('../lib/paths');
const merge = require('webpack-merge');
const resolve = require('../lib/resolve');
const loaderJson = require('../lib/loader-json');
const loaderJsxTesting = require('../lib/loader-jsx-testing');

const test = {
  entry: {}, // karma will set this
  output: {}, // karma will set this
  devtool: 'inline-source-map',
  module: {
    preLoaders: [
        // transpile all files except testing sources with babel as usual
        {
          test: /\.jsx?$/,
          exclude: [
            PATHS.components,
            PATHS.nodeModules,
          ],
          loader: 'babel',
          query: {
            cacheDirectory: './.babel-cache',
          },
        },
        // transpile and instrument only testing sources with isparta
        {
          test: /\.jsx?$/,
          include: PATHS.components,
          loader: 'isparta',
        }
    ],
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};

module.exports = merge(
  test,
  resolve(),
  loaderJsxTesting(),
  loaderJson()
);
