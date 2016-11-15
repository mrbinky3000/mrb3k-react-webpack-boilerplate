const PATHS = require('../lib/paths');
const merge = require('webpack-merge');
const resolve = require('../lib/resolve');
const jsonLoader = require('../lib/loader-json');
const jsxLoader = require('../lib/loader-jsx');
const scssLoader = require('../lib/loader-scss');
const svgLoader = require('../lib/loader-svg');
const woffLoader = require('../lib/loader-woff');
const ttfLoader = require('../lib/loader-ttf');
const eotLoader = require('../lib/loader-eot');
const pngLoader = require('../lib/loader-png');
const jpgLoader = require('../lib/loader-jpg');
const gifLoader = require('../lib/loader-gif');
const test = {
  entry: {}, // karma will set this
  output: {}, // karma will set this
  // Uncomment if we ever decide to force a test before build as
  // part of some continuous intergration setup. Until that happens,
  // sourcemaps are superfluous to testing.
  // devtool: 'inline-source-map',
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
  eotLoader(PATHS.app),
  pngLoader(PATHS.app, 2500),
  jpgLoader(PATHS.app, 2500),
  gifLoader(PATHS.app, 2500)
);
