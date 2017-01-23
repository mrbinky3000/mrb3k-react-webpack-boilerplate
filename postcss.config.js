// From the documentation for postcss-loader
//
// module.exports = {
//   plugins: [
//     require('postcss-smart-import')({ /* ...options */ }),
//     require('precss')({ /* ...options */ }),
//     require('autoprefixer')({ /* ...options */ })
//   ]
// }

// Even though postcss-loader recommends that we use a postcss.config.js file...
// I'd like to move this config back into our webpack config. however, the ExtractTextPlugin doesn't
// yet support the new Webpack 2 configuration API.  So this is the only way to get options and
// plugins into postcss-loader
module.exports = {
  plugins: [
    require('autoprefixer')({})
  ]
}
