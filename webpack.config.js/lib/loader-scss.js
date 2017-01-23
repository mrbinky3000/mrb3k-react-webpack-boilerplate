"use strict";

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');
const extractCSS = new ExtractTextPlugin({
  filename: '[name].[id].[hash:5].css',
  allChunks: true,
});
const getCssIdentName = require('../lib/cssIdentName.js');

module.exports = function scssLoader(includePaths) {
  return ({
    resolve: {
      extensions: ['.css', '.scss'],
    },
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          include: includePaths,
          // the ExtractTextPlugin doesn't yet understand the new Webpack 2 loader [] syntax, so
          // I'm using combineLoaders() and the old "query" property instead of the new "options"
          // property to convert our objects into a loader string.  So, for example, combineLoaders
          // will convert the sass-loader object below into:
          // sass-loader?includePaths=...&sourceMap=1
          //
          // NOTE: keep an eye on ExtractTextPlugin.  When they fix this, we'll have to update.
          loader: extractCSS.extract({
            fallbackLoader: 'style-loader',
            loader: combineLoaders([
                {
                  loader: 'css-loader',
                  query: {
                    modules: 1,
                    importLoaders: 3,
                    localIdentName: getCssIdentName(),
                    sourceMap: true,
                  }
                },
                {
                  loader: 'postcss-loader',
                  // all other options should be set in postcss.config.js until ExtractTextPlugin
                  // supports the new Webpack 2 api
                  query: {
                    parser: 'postcss-scss',
                  },
                },
                {
                  loader: 'resolve-url-loader'
                },
                {
                  loader: 'sass-loader',
                  query: {
                    includePaths: includePaths,
                    sourceMap: true,
                  },
                }
              ])
          }),
        },
      ],
    },
    plugins: [
      extractCSS,
    ]
  });
};
