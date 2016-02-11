const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

// Load *package.json* so we can use `dependencies` from there
const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

const HtmlWebpackPlugin = require('html-webpack-plugin');

const Clean = require('clean-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.BABEL_ENV = TARGET;

const common = {
	// Entry accepts a path or an object of entries
	// The build chapter contains an example of the latter.
	entry: PATHS.app,
	// Add resolve.extensions.
	// '' is needed to allow imorts without an extension.
	// Note the .'s before extensions as it will fail to match without !!!
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		// Output using entry name
		filename: '[name].js'
	},
	module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
				loaders: ['eslint'],
				// define an include so we check just the files we need
				include: PATHS.app
			}
		],
		loaders: [
			// Set up jsx. This accepts js too thanks to RegExp
			{
				test: /\.jsx?$/,
				// Enable caching for improved performance during development
				// It uses default OS directory by default. If you need something
				// more custom, pass a path to it.  I.e. , babel?cacheDirectory=<path>
				loaders: ['babel?cacheDirectory'],
				include: PATHS.app
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'node_modules/html-webpack-template/index.ejs',
			title: 'Kanban app',
			appMountId: 'app',
			inject: false
		})
	]
};

// Default configuration
if (TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'source-map',
		devServer: {
			contentBase: PATHS.build,

			// Enable history API fallback so HTML5 History API based
			// routing works. This is a good default that will come
			// in handy in more complicated setups
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,

			// Display only errors to reduce the amount of output.
			stats: 'errors-only',

			// Parse host and port from env so this is easy to customize.
			host: process.env.HOST,
			port: process.env.PORT
		},
		module: {
			loaders: [
				//Define development specific CSS setup
				{
					test: /\.css$/,
					loaders: ['style', 'css'],
					include: PATHS.app
				}
			]
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	});
}

if (TARGET === 'test' || TARGET === 'tdd') {
	module.exports = merge(common, {
		entry: {}, // karma will set this
		output: {}, // karma will set this
		devtool: 'inline-source-map',
		resolve: {
			alias: {
				'app': PATHS.app
			}
		},
		module: {
			preLoaders: [
				{
					test: /\.jsx?$/,
					loaders: ['isparta-instrumenter'],
					include: PATHS.app
				}
			],
			loaders: [
				{
					test: /\.jsx?$/,
					loaders: ['babel?cacheDirectory'],
					include: PATHS.app
				}
			]
		}
	});
}

if (TARGET === 'build' || TARGET === 'stats') {
	module.exports = merge(common, {
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
					test: /\.css$/,
					// If you want to pass more loaders to the ExtractTextPlugin,
					// you should use ! syntax. Example:
					// ExtractTextPlugin.extract('style', 'css!autoprefixer-loader')
					loader: ExtractTextPlugin.extract('style','css'),
					include: PATHS.app
				}
			]
		},
		plugins: [
			// Clean out the build directory
			new Clean([PATHS.build], {
				verbose: false // Don't write logs to console
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
	});
}




