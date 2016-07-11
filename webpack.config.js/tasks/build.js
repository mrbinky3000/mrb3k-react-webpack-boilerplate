const PATHS = require('../lib/paths');
const Clean = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
  },

  plugins: [
    // Clean out the build directory
    new Clean([PATHS.build], {
      verbose: false, // Don't write logs to console
      root: process.cwd(),
    }),

    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),

    // output extracted CSS to a file
    new ExtractTextPlugin('[name].[id].[hash:5].css'),

    // Extract vendor and manifest files
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),

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
