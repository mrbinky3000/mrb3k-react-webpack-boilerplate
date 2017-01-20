const PATHS = require('../lib/paths');
const Clean = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const extractBundle = require('../lib/part-extract-bundle');
const pkg = require('../../package.json');
const merge = require('webpack-merge');

const config = {
  devtool: 'source-map',
  output: {
    path: PATHS.build,
    filename: '[name].[hash:5].js'
  },

  plugins: [
    // Clean out the build directory
    new Clean([PATHS.build], {
      verbose: false, // Don't write logs to console
      root: process.cwd(),
    }),

    // note: webpack.optimize.OccurrenceOrderPlugin is now loaded by default in Webpack 2

    // note: webpack.optimize.DedupePlugin() was removed from Webpack 2,

    // output extracted CSS to a file
    new ExtractTextPlugin('[name].[id].[hash:5].css'),

    // Setting DefinePlugin affects React library size!
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),

    // minify code
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        collapse_vars: true,
        drop_console: true,
        pure_getters: true,
        warnings: false,
      },
    }),
  ],
};

module.exports = merge(
  config,
  extractBundle({
    name: 'vendor',
    // load all dependencies into the vendor chunk.
    entries: Object.keys(pkg.dependencies),
  })
);
