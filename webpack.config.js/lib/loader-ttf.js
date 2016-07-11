module.exports = function ttfLoader(path) {
  return ({
    module: {
      loaders: [
        // ttf files
        {
          test: /\.ttf$/,
          loader: 'file',
          query: {
            name: 'font/[hash].[ext]',
          },
          include: path,
        },
      ],
    },
  });
};
