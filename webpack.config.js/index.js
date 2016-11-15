"use strict";

const merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;
const common = require('./tasks/common');
const start = require('./tasks/start');
const test = require('./tasks/test');
const build = require('./tasks/build');
const deploy = require('./tasks/deploy');
const validate = require('webpack-validator');
let config = {};

// Babel has it's own environment property that is used by the .babelrc
// file to load specific babel plugins.  If we're testing, we load some
// plugins. If it's a production build, load other plugins.  Dev, yet other.
//
// We're setting the default BABEL_ENV to match the name of the npm script
// that we ran to launch webpack.  So, if we had a script named "bob" in
// the package.json file, BABEL_ENV would be called "bob" and any plugins
// listed in .babelrc under "bob" would be loaded.
process.env.BABEL_ENV = TARGET;

switch (TARGET) {
  case 'test':
  case 'test:watch':
    process.env.BABEL_ENV = 'test';
    module.exports = validate(test);
    break;
  case 'build':
    config = merge(common, build);
    module.exports = validate(config);
    break;
  case 'deploy':
    config = merge(common, deploy);
    module.exports = validate(config);
    break;
  case 'stats':
    config = merge(common, build);
    module.exports = validate(config, {
      quiet: true,
    });
    break
  default:
    config = merge(common, start);
    module.exports = validate(config);
}
