module.exports = function jsxLoaderTesting(paths) {
  return({
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loader: 'babel',
          exclude: paths,
          query: {
            cacheDirectory: './.babel-cache',
          },
        },
      ],
    },
  });
}
