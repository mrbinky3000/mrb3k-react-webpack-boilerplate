const path = require('path');
const PATHS = require('../lib/paths');
const merge = require('webpack-merge');
const jsxLoader = require('../lib/loader-jsx');
const scssLoader = require('../lib/loader-scss');
const jsonLoader = require('../lib/loader-json');
const svgLoader = require('../lib/loader-svg');
const woffLoader = require('../lib/loader-woff');
const ttfLoader = require('../lib/loader-ttf');
const eotLoader = require('../lib/loader-eot');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = {
  resolve: {
    extensions: [''],

    // note: ESLint can't figure out root and aliases, so turn off import/no-unresolved in .eslintrc
    root: [PATHS.root],

		// you can use these aliases to namespace your import statements.  Add more here if you need
		// them.  For example: you have a file located at 'things/transport/cars/corvette.js'
		// and you want to shorten your import statement while providing a useful namespace, you can
		// set an alias here.  So an alias to 'cars' means you can just write
		// import corvette from 'cars/corvette.js';
		// alias name: ABSOLUTE PATH
    alias: {
      rootdir: PATHS.root,
      components: PATHS.components,
    },
  },

  // Some project dependencies have an issue when being extracted into a vendor chunk.
  // this corrects a common bug.
  // https://github.com/josephsavona/valuable/issues/9
  // https://github.com/pugjs/pug-loader/issues/8#issuecomment-55568520
  // and others.
  node: {
    fs: "empty"
  },

  entry: {
    app: path.join(PATHS.app, 'index.jsx'),
  },

  output: {
    path: PATHS.build,
    filename: '[name].js',
    // publicPath in output forces webpack to append a string to the front of each src path.
    // So if public path was "/bob/" then all script tags would have a source of "/bob/[script].js"
    // Be carefull with this.  caused me headaches.  Turns out I didn't need it.
    // publicPath: path.join(PATHS.build, 'bundle/'),
    chunkFilename: '[name].[id].[hash:5].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      appMountId: 'app',
      inject: false,
      template: 'templates/default.ejs',
      title: 'New Tab',
    }),
  ],
};


module.exports = merge(
  common,
  jsxLoader([PATHS.app, PATHS.tests], `${process.cwd()}/node_modules`),
  scssLoader(PATHS.app),
  jsonLoader([PATHS.app, PATHS.tests]),
  svgLoader(PATHS.app),
  woffLoader(PATHS.app),
  ttfLoader(PATHS.app),
  eotLoader(PATHS.app)
);
