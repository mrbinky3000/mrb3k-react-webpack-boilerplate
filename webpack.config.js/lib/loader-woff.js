"use strict"

module.exports = function woffLoader(path, limit) {
  return ({
    module: {
      loaders: [
        // woff files
        {
          test: /\.woff$/,
          loader: 'url',
          query: {
            // url loader will inline anything smaller than limit bytes below.
            // mimetype seems like an undocumented query option for url loader (check the code)
            // it's optional and used just in case.
            limit: limit,
            mimetype: 'application/font-woff',
            // if bigger than the limit, the following properties are passed to file-loader
            // and file-loader does the loading instead.
            name: 'font/[hash].[ext]',
          },
          include: path,
        },
      ],
    },
  });
};
