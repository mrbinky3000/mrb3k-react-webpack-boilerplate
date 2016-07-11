const path = require('path');
const basedir = process.cwd();
module.exports = {
  app: path.join(basedir, 'app'),
  components: path.join(basedir, 'app', 'components'),
  build: path.join(basedir, 'build'),
  root: basedir,
};
