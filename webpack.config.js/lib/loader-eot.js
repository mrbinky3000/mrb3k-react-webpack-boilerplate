"use strict";

module.exports = function eotLoader(path) {
  return ({
    module: {
      rules: [
        // eot files
        {
          test: /\.eot$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[hash:8].[ext]',
            },
          },
          include: path,
        },
      ],
    },
  });
};
