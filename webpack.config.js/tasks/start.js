const PATHS = require('../lib/paths');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const start = {
  devtool: 'eval',
  devServer: {
    // contentBase -- It works without a content base config option so I think the default value is
    // the build directory.  I'm setting it here just in case future versions change the default.
    contentBase: PATHS.build + path.sep,
    historyApiFallback: true,
    hot: false,
    inline: true,

    // publicPath can be used to serve your content out of a subdirectory.  Keep in mind this means
    // you MAY have to change the publicPath in common.js -> output{} config options.
    //
    // Confusion:  The keyword "publicPath" is used in output{} config and in devServer{} config.
    // they are similar in concept but effect completly different things.  output{} essentially
    // appends a string to src paths in the generated HTML.  devServer{} serves all your files from
    // a virtual sub-directory on the server.  Using both of these options is handy if your
    // published final work on your production server resides in a sub-directory.  For example,
    // if you are deploying to github pages, github pages are served from a subdir.
    // publicPath: '/test/',


    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    // Parse host and port from env so this is easy to customize.
    host: process.env.HOST,
    port: process.env.PORT,
  },
  plugins: [
    // Setting DefinePlugin affects React library size!
    // This keeps all the bugs
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),

    // don't extract CSS when running the dev server (faster)
    new ExtractTextPlugin({
      filename: '[name][hash:5].css',
      disable: true
    }),
  ],

  module: {
    // lint the project prior to building the bundle.
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app,
      },
    ],
  },
};

module.exports = start;
