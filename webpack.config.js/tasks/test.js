const PATHS = require('../lib/paths');
const merge = require('webpack-merge');

const test = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.svg', '.json'],
    root: [PATHS.root],
    alias: {
      rootdir: PATHS.root,
      components: PATHS.components,
    },
  },
  entry: {}, // karma will set this
  output: {}, // karma will set this
  devtool: 'inline-source-map',
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};

module.exports = test;
