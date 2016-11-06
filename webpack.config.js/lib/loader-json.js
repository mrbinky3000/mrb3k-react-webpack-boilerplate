"use strict";

module.exports = function jsonLoader(paths) {
  return ({
    resolve: {
      extensions: ['.json'],
    },
    module: {
      loaders: [
        {
          test: /\.json$/,
          loaders: ['json-loader'],
          include: paths,
        },
      ],
    },
  });
};
