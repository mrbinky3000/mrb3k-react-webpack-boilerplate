"use strict";

module.exports = function cssIdentName() {
  if (process.env.npm_lifecycle_event === 'build') {
    return '[hash:base64:5]';
  }
  return '[name]__[local]__[hash:base64:5]';
};
