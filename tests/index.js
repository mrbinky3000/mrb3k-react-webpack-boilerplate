// require all `test/components/**/index.js`
const testsContext = require.context('.', true, /\.jsx$/);

testsContext.keys().forEach(testsContext);

// require all `src/components/**/index.js`
const componentsContext = require.context('../app/components', true, /index\.js$/);

componentsContext.keys().forEach(componentsContext);
