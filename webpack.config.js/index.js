const merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;
const common = require('./tasks/common');
const start = require('./tasks/start');
const test = require('./tasks/test');
const build = require('./tasks/build');


switch (TARGET) {
	case 'test':
	case 'tdd':
		module.exports = merge(common, test);
		break;
	case 'build':
	case 'stats':
		module.exports = merge(common, build);
		break;
	default:
		module.exports = merge(common, start);
}
