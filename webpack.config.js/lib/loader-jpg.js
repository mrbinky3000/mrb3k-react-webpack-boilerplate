module.exports = function pngLoader(path, limit) {
  return ({
    module: {
      loaders: [
        {
          test: /\.jpg$/,
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
