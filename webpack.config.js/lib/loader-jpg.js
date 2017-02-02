"use strict";

module.exports = function pngLoader(path, limit) {
  return ({
    module: {
      rules: [
        {
          test: /\.jpg$/,
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
