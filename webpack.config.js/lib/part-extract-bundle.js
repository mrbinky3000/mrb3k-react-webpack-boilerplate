"use strict";

const webpack = require('webpack');

module.exports = function extractBundle(options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    // Define an entry point needed for splitting
    entry: entry,
    plugins: [
      // Extract bundle and manifest files.  Manifest is used for caching.
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest'],
      }),
    ],
  };
};
