"use strict";

module.exports = function gifLoader(path, limit) {
  return ({
    module: {
      rules: [
        {
          test: /\.gif$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: limit,
              name: 'assets/images/[name].[hash:8].[ext]',
            },
          },
          include: path,
        },
      ],
    },
  });
};
