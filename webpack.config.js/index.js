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

process.env.BABEL_ENV = TARGET;

switch (TARGET) {
  case 'test':
  case 'test:watch':
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
