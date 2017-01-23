// From the documentation for postcss-loader
//
// module.exports = {
//   plugins: [
//     require('postcss-smart-import')({ /* ...options */ }),
//     require('precss')({ /* ...options */ }),
//     require('autoprefixer')({ /* ...options */ })
//   ]
// }


module.exports = {
  plugins: [
    require('autoprefixer')({})
  ]
}
