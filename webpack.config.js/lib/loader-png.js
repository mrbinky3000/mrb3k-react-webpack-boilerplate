"use strict";

module.exports = function pngLoader(path, limit) {
  return ({
    module: {
      rules: [
        {
          test: /\.png$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: limit,
              name: 'assets/images/[hash:8].[ext]',
            },
          },
          include: path,
        }
      ],
    },
  });
};
