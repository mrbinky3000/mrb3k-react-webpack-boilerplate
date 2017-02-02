"use strict";

module.exports = function ttfLoader(path) {
  return ({
    module: {
      rules: [
        // ttf files
        {
          test: /\.ttf$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[hash:8].[ext]',
            },
          },
          include: path,
        },
      ],
    },
  });
};
