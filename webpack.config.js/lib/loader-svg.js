"use strict";

const combineLoaders = require('webpack-combine-loaders');

module.exports = function svgLoader(paths) {
  return ({
    resolve: {
      extensions: ['.svg',]
    },
    module: {
      loaders: [
        {
          test: /\.svg$/,
          loader: combineLoaders([
            {
              loader: 'babel',
            },
            {
              loader: 'svg-react',
            },
            {
              loader: 'string-replace',
              query: {
                // this is a bugfix because react complains about the xmlns attribute.  Its not
                // a valid attribute according to react.  React devs also say it's not needed
                // for svg.
                search: ' xmlns="http://www.w3.org/2000/svg"',
                replace: '',
              },
            },
          ]),
          include: paths,
        },
      ],
    },
  });
};
