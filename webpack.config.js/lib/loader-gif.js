"use strict";

module.exports = function gifLoader(path, limit) {
  return ({
    module: {
      loaders: [
        {
          test: /\.gif$/,
          loader: 'url-loader',
          query: {
            limit: limit,
            name: 'assets/images/[name].[hash:8].[ext]',
          },
          include: path,
        },
      ],
    },
  });
};
