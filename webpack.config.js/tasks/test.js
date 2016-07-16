const PATHS = require('../lib/paths');
const merge = require('webpack-merge');
const resolve = require('../lib/resolve');
const loaderJson = require('../lib/loader-json');
const loaderJsxTesting = require('../lib/loader-jsx-testing');

const test = {
  entry: {}, // karma will set this
  output: {}, // karma will set this
  devtool: 'inline-source-map',
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
