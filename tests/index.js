// Don't delete me.  I'm the entry point for tests used by Karma.  Without me your coverage reports
// will most likely always show 100% coverage, or 0% coverage.

// require all `test/components/**/index.js`
const testsContext = require.context('.', true, /\.jsx$/);

testsContext.keys().forEach(testsContext);

// require all `src/components/**/index.js`
const componentsContext = require.context('../app/components', true, /index\.js$/);

componentsContext.keys().forEach(componentsContext);
