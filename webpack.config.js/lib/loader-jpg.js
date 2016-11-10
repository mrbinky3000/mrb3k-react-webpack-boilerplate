"use strict";

module.exports = function pngLoader(path, limit) {
  return ({
    module: {
      loaders: [
        {
          test: /\.jpg$/,
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
