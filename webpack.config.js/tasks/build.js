const path = require('path');
const PATHS = require('../lib/paths');
const Clean = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

// Load *package.json* so we can use `dependencies` from there
const pkg = require(path.join(process.cwd(),'package.json'));

module.exports = {
	// Define entry points needed for splitting
	entry: {
		app: PATHS.app,
		vendor:
			Object.keys(pkg.dependencies).filter(function(v) {
				// Exclude alt-utils as it won't work with this setup
				// due to the way the package has been designed
				// (no package.json main).
				return v !== 'alt-utils';
			})
	},
	output: {
		path: PATHS.build,
		filename: '[name].[chunkhash].js',
		chunkFilename: '[chunkhash].js'
	},
	module: {
		loaders: [
			// Extract CSS during build
			{
				test: /\.s{0,1}css$/,
				// If you want to pass more loaders to the ExtractTextPlugin,
				// you should use ! syntax. Example:
				// ExtractTextPlugin.extract('style', 'css!autoprefixer-loader')
				loader: ExtractTextPlugin.extract('style','css','sass'),
				include: PATHS.app
			}
		]
	},
	plugins: [
		// Clean out the build directory
		new Clean([PATHS.build], {
			verbose: false, // Don't write logs to console
			root: process.cwd()
		}),

		// output extracted CSS to a file
		new ExtractTextPlugin('styles.[chunkhash].css'),

		// Extract vendor and manifest files
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),

		// Setting DefinePlugin affects React library size!
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')

			// You can set this to JSON.stringify('development') for our
			// developement target to force NODE_ENV to development mode
			// no matter what
		}),

		// minify code
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
};
