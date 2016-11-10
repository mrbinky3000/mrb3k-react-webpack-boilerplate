"use strict";

module.exports = function ttfLoader(path) {
  return ({
    module: {
      loaders: [
        // ttf files
        {
          test: /\.ttf$/,
          loader: 'file',
          query: {
            name: 'assets/fonts/[hash:8].[ext]',
          },
          include: path,
        },
      ],
    },
  });
};
