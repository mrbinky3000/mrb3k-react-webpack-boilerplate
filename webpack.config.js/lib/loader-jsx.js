"use strict";

const env = process.env.npm_lifecycle_event;

function getConfig(includePath, excludePath) {
  const config = {
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        // Set up jsx. This accepts js too thanks to RegExp
        {
          test: /\.jsx?$/,
          // Enable caching for improved performance during development
          // It uses default OS directory by default. If you need something
          // more custom, pass a path to it.  I.e. , babel?cacheDirectory=<path>
          loader: 'babel-loader',
          include: includePath,
          exclude: excludePath,
          options: {
            cacheDirectory: './.babel-cache',
          },
        },
      ],
    },
  };

  if (env === 'start') {
    // add linting preloader if running local dev server
    config.module.rules.unshift({
      enforce: 'pre',
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      include: includePath,
      exclude: excludePath,
    });
  }

  return config;
}



module.exports = function jsxLoader(includePath, excludePath) {
  return getConfig(includePath, excludePath);
};
