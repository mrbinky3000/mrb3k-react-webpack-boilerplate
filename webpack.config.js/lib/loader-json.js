"use strict";

module.exports = function jsonLoader(paths) {
  return {
    // json-loader no longer needed in Webpack 2.  Webapack will do this automatically.
    //
    // resolve: {
    //   extensions: ['.json'],
    // },
    // module: {
    //   rules: [
    //     {
    //       test: /\.json$/,
    //       loaders: ['json-loader'],
    //       include: paths,
    //     },
    //   ],
    // },
  };
};
