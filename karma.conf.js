module.exports = function karmaConfig(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'tests/index.js',
    ],

    preprocessors: {
      // add webpack as preprocessor
      'app/**/*.jsx': ['webpack', 'sourcemap'],
      'tests/index.js': ['webpack'],
    },

    webpack: require('./webpack.config.js/index.js'),

    webpackMiddleware: {
      // please don't spam the console when running in karma!
      noInfo: true,
    },

    // Deprecated: Karma autoloads anything that starts with "karma-" as a plugin
    // plugins: [
    //   'karma-webpack',
    //   'karma-jasmine',
    //   'karma-sourcemap-loader',
    //   'karma-chrome-launcher',
    //   'karma-phantomjs-launcher',
    // ],

    // Deprecated: use .babel.rc instead
    // babelPreprocessor: {
    //   options: {
    //     presets: ['es2015', 'react'],
    //   },
    // },

    reporters: [
      'progress',
      'coverage',
    ],
    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: 'coverage/', subdir: '.'},
        {type: 'json', dir: 'coverage/', subdir: '.'},
        {type: 'text'},
      ],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};
