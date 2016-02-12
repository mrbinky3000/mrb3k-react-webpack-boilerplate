[![Dependency Status](https://david-dm.org/mrbinky3000/mrb3k-react-webpack-boilerplate.svg)](https://david-dm.org/mrbinky3000/mrb3k-react-webpack-boilerplate#info=dependencies) [![devDependency Status](https://david-dm.org/mrbinky3000/mrb3k-react-webpack-boilerplate/dev-status.svg)](https://david-dm.org/mrbinky3000/mrb3k-react-webpack-boilerplate#info=devDependencies)

# React SPA Boiler Plate
This is a starting point for my React Single Page Applications.  Many thanks to the book SurviveJS - Webpack and React by Juho Vepsäläinen.

## Getting Started
- make your own blank repo on github.  Do not add Readme, .gitignore or liscence files to avoid conflicts
- clone this repository to your local machine
- cd to that directory in a terminal
- use git to remove my repository as the remote destination https://help.github.com/articles/removing-a-remote/
- use git to add your repo as the new remote https://help.github.com/articles/adding-a-remote/
- git add .
- git commit -m "boiler plate initialized"
- git push origin master
- npm install

Take it from there.

## ES6 Ready
Uses Babel to polyfill tomorrow's ES6 features for use in today's browsers.  Configure in .babelrc


## Scripts

### `npm run test`
Use Karma, PhantomJS, and Expect to execute any file in the app directory that ends in _test.jsx  Generates coverage reports using Isparta-Instrumenter.

### `npm run tdd`
Run the same tests as `npm run test` but continues to watch your project and run tests after each save.

### `npm run lint`
Lints the project.  Can be customized by updating .eslintrc and .eslintignore

### `npm run build`
Lint, build and minify production level code using Webpack.

### `npm run start`
Start a local development server on port 8080.  Uses the Hot Module Replacement Package to update code in the view on the fly.  (Doesn't react when updating class constructors.  Sometimes just stops working.  Bleeding edge, man!)

### `npm run stats`
Capture timing information for each module. It generates stats that can be analyzed by http://webpack.github.io/analyse/.  You can install that analyse tool on a local webserver if you are concerned about security.

### `npm run deploy`
Publishes your app to your repository's github page.  More information on how to find and use your github page here: https://pages.github.com/

### `npm run flow`
Uses the static type checker Flow, to test any file with `/* @flow */` in the first line.  The goal of Flow is to find errors in JavaScript code with little programmer effort. Flow relies heavily on type inference to find type errors even when the program has not been annotated - it precisely tracks the types of variables as they flow through the program.  More info: http://flowtype.org/


