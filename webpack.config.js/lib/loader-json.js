module.exports = function jsonLoader(paths) {
  return ({
    module: {
      loaders: [
        {
          test: /\.json$/,
          loaders: ['json-loader'],
          include: paths,
        },
      ],
    },
  });
};
