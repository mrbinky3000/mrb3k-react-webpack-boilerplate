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

    // OccurrenceOrderPlugin seems to cause issues with CommonsChunkPlugin.
    // For now, these two options seem incompatible.  After doing tests, there really
    // wasn't much gained on small projects with this option anyway.  You might see
    // a difference on larger ones, perhaps?
    // https://github.com/webpack/webpack/issues/959
    //
    // Since upgrading to webpack 2 beta, this seems to work again.
    // This option is now on probation for now
    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.DedupePlugin(),

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
        dead_code: true, // tree shaking?
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
