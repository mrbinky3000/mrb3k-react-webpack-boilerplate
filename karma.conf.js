module.exports = function karmaConfig(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'tests/**/*.jsx',
    ],

    preprocessors: {
      // add webpack as preprocessor
      'app/**/*.jsx': ['webpack', 'sourcemap'],
      'tests/**/*.jsx': ['webpack', 'sourcemap'],
    },

    webpack: require('./webpack.config.js/index.js'),

    webpackServer: {
      // please don't spam the console when running in karma!
      noInfo: true,
    },

    // plugins: [
    //   'karma-webpack',
    //   'karma-jasmine',
    //   'karma-sourcemap-loader',
    //   'karma-chrome-launcher',
    //   'karma-phantomjs-launcher',
    // ],

    // babelPreprocessor: {
    //   options: {
    //     presets: ['es2015', 'react'],
    //   },
    // },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  });
};
