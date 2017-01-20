"use strict";

module.exports = function svgLoader(paths) {
  return ({
    resolve: {
      extensions: ['.svg']
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'svg-react-loader',
            },
            {
              loader: 'string-replace-loader',
              options: {
                // this is a bugfix because react complains about the xmlns attribute.  Its not
                // a valid attribute according to react.  React devs also say it's not needed
                // for svg.
                search: ' xmlns="http://www.w3.org/2000/svg"',
                replace: '',
              },
            },
          ],
          include: paths,
        },
      ],
    },
  });
};
