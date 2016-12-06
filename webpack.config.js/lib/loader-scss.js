"use strict";

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const combineLoaders = require('webpack-combine-loaders');
const extractCSS = new ExtractTextPlugin('[name].[id].[hash:5].css');
const getCssIdentName = require('../lib/cssIdentName.js');

module.exports = function scssLoader(paths) {
  return ({
    resolve: {
      extensions: ['.scss'],
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: extractCSS.extract({
            fallbackLoader: 'style-loader',
            loader: combineLoaders([
              {
                loader: 'css-loader',
                query: {
                  modules: 1,
                  importLoaders: 2,
                  localIdentName: getCssIdentName(),
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader',
                query: {
                  parser: 'postcss-scss',
                },
              },
              {
                loader: 'sass-loader',
                query: {
                  includePaths: paths,
                  sourceMap: true,
                },
              },
            ])
          }),
          include: paths,
        },
      ],
    },
    postcss: [
      autoprefixer,
    ],
    plugins: [
      extractCSS,
    ],
  });
};
