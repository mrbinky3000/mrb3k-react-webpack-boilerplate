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
            name: 'assets/fonts/[name].[hash:8].[ext]',
          },
          include: path,
        },
      ],
    },
  });
};
