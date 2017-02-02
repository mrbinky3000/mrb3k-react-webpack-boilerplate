"use strict"

module.exports = function woffLoader(path, limit) {
  return ({
    module: {
      rules: [
        // woff files
        {
          test: /\.woff2?$/,
          use: {
            loader: 'url',
            options: {
              // url loader will inline anything smaller than limit bytes below.
              // mimetype seems like an undocumented query option for url loader (check the code)
              // it's optional and used just in case.
              limit: limit,
              mimetype: 'application/font-woff',
              // if bigger than the limit, the following properties are passed to file-loader
              // and file-loader does the loading instead.
              name: 'assets/fonts/[hash:8].[ext]',
            },
          },
          include: path,
        },
      ],
    },
  });
};
