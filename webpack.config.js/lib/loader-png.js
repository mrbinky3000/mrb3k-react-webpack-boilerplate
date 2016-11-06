"use strict";

module.exports = function pngLoader(path, limit) {
  return ({
    module: {
      loaders: [
        {
          test: /\.png$/,
          loader: 'url-loader',
          query: {
            limit: limit,
          },
          include: path,
        }
      ],
    },
  });
};
