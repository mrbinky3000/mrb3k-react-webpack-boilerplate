
[![Dependency Status](https://david-dm.org/mrbinky3000/mrb3k-react-webpack-boilerplate.svg)](https://david-dm.org/mrbinky3000/mrb3k-react-webpack-boilerplate#info=dependencies) [![devDependency Status](https://david-dm.org/mrbinky3000/mrb3k-react-webpack-boilerplate/dev-status.svg)](https://david-dm.org/mrbinky3000/mrb3k-react-webpack-boilerplate#info=devDependencies)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# React SPA Boilerplate
This is a starting point for my React Single Page Applications.  Many thanks to the book SurviveJS - Webpack and React by Juho Vepsäläinen.

### What is this?
This is a blank ReactJS project with all the tooling created and ready for you to use from day one. I've done all the busy work of creating and testing a [webpack](https://webpack.github.io/) configuration for you.  Copy it to your computer and then start creating components in the app folder and, if needed, put tests in the tests folder. Use this for rapid prototyping, one-offs, experiments, or start building a web app.  I will keep this repo updated as I continue to learn more react, webpack and other technologies.  Future versions may include a react-native variant for building native apps.

You really only need to know [React](https://facebook.github.io/react/) to get started.  If you plan on writing tests, you'll need to know [Enzyme](https://github.com/airbnb/enzyme).


## Getting Started
Here's how to use this SPA boiler plate for your next project.  First, answer this question, are you
going to use github as a repo for your code?

### Using Github as a Repo for YOUR project
- Make your own blank repo on Github via https://github.com/new and DO NOT add Readme, .gitignore or license files to avoid conflicts
- clone this repository to your local machine
- change the name of the folder from `mrb3k-react-webpack-boilerplate` to YOUR github project name.
- in a terminal, cd to the directory you just renamed
- use git to remove my repository as the remote destination https://help.github.com/articles/removing-a-remote/
- use git to add your repo as the new remote https://help.github.com/articles/adding-a-remote/
- `git add -A`
- `git commit -m "boiler plate initialized"`
- `git push origin master`
- `npm install`
Take it from there.

### Not Using a Repo?
- Copy this repo to your computer.
- `npm install`
Start workin'

## ES6 Ready
Uses [Babel](https://babeljs.io/) to polyfill tomorrow's ES6 features for use in today's browsers.  Configure in .babelrc


## Scripts

### `npm run test`
Run tests using [Karma](https://karma-runner.github.io/1.0/index.html), Jasmine, and [Enzyme](https://github.com/airbnb/enzyme) (created by the folks at Airbnb) Generates code coverage reports using [Isparta](https://github.com/douglasduteil/isparta).

### `npm run test:watch`
Run the same tests as `npm run test` but continues to watch your project and run tests after each update to a test file.

### `npm run lint`
Lints the project.  Can be customized by updating .eslintrc and .eslintignore

### `npm run build`
Lint, build, bundle, and minify production level code using [webpack](https://webpack.github.io/).

### `npm run start`
Start a local development server on port 8080.  Uses Webpack's [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) plugin to update code in the view on the fly.  HMRE is still relatively new.  It works great with single page applications. Is fantastic at updating styles.  However you still occasionally need to manually refresh a page by hand when updating JavaScript.

### `npm run stats`
Capture timing information for each module. It generates stats that can be analyzed by http://webpack.github.io/analyse/.  Run this task.  It will create a stats.json file in the root of your project folder.  Visit the Analyse link above and upload your stats.json file.  Please note that the stats.json file does contain bits of your code. You can install that Analyse tool on a local web server if you are concerned about security.

### `npm run deploy`
Publishes your app to your repository's github page.  More information on how to find and use your github page here: https://pages.github.com/


> Written with [StackEdit](https://stackedit.io/).
