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
      rules: [
        {
          test: /\.scss$/,
          loader: extractCSS.extract({
            fallbackLoader: 'style-loader',
            loader: [
              {
                loader: 'css-loader',
                options: {
                  modules: 1,
                  importLoaders: 2,
                  localIdentName: getCssIdentName(),
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  parser: 'postcss-scss',
                  plugins: [
                    autoprefixer
                  ],
                },
              },
              {
                loader: 'resolve-url',
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: paths,
                  sourceMap: true,
                },
              },
            ],
          }),
          include: paths,
        },
      ],
    },
    plugins: [
      extractCSS,
    ],
  });
};
