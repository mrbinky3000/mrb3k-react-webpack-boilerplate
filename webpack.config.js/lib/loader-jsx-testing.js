module.exports = function jsxLoaderTesting(paths) {
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
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
}
