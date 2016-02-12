const path = require('path');
const basedir = process.cwd();
module.exports = {
	app: path.join(basedir, 'app'),
	build: path.join(basedir, 'build')
};
