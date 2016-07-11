module.exports = function jsxLoader(path, excludePath) {
  return ({
    module: {
      loaders: [
        // Set up jsx. This accepts js too thanks to RegExp
        {
          test: /\.jsx?$/,
          // Enable caching for improved performance during development
          // It uses default OS directory by default. If you need something
          // more custom, pass a path to it.  I.e. , babel?cacheDirectory=<path>
          loader: 'babel',
          include: path,
          exclude: excludePath,
          query: {
            cacheDirectory: './.babel-cache',
          },
        },
      ],
    },
  });
};
