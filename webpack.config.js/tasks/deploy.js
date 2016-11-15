const PATHS = require('../lib/paths');
const build = require('./build');
const pkg = require('../../package.json');
const merge = require('webpack-merge');

const config = {
  output: {
    publicPath: `/${pkg.name}/`,
  },
};

module.exports = merge(
  build,
  config
);
