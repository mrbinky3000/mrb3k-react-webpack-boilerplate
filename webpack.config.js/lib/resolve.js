"use strict";

const PATHS = require('./paths');

module.exports = function resolve() {
  return ({
    resolve: {
      extensions: [''],

      // note: ESLint can't figure out root and aliases, so turn off import/no-unresolved in
      // .eslintrc
      root: [PATHS.root],

      // you can use these aliases to namespace your import statements.  Add more here if you need
      // them.  For example: you have a file located at 'things/transport/cars/corvette.js'
      // and you want to shorten your import statement while providing a useful namespace, you can
      // set an alias here.  So an alias to 'cars' means you can just write
      // import corvette from 'cars/corvette.js';
      // alias name: ABSOLUTE PATH
      alias: {
        rootdir: PATHS.root,
        components: PATHS.components,
      },
    },
  });
};
