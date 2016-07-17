const PATHS = require('../lib/paths');
const merge = require('webpack-merge');
const resolve = require('../lib/resolve');
const jsonLoader = require('../lib/loader-json');
const jsxLoader = require('../lib/loader-jsx');
const svgLoader = require('../lib/loader-svg');
const scssLoader = require('../lib/loader-scss');
const woffLoader = require('../lib/loader-woff');
const ttfLoader = require('../lib/loader-ttf');
const eotLoader = require('../lib/loader-eot');

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
  jsxLoader([PATHS.app, PATHS.tests], PATHS.nodeModules),
  jsonLoader(),
  scssLoader(PATHS.app),
  svgLoader(PATHS.app),
  woffLoader(PATHS.app),
  ttfLoader(PATHS.app),
  eotLoader(PATHS.app)
);
