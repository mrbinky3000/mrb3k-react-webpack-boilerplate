"use strict";

module.exports = function eotLoader(path) {
  return ({
    module: {
      loaders: [
        // eot files
        {
          test: /\.eot$/,
          loader: 'file',
          query: {
            name: 'font/[hash].[ext]',
          },
          include: path,
        },
      ],
    },
  });
};
