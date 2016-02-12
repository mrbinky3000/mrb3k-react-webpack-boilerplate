const PATHS = require('../lib/paths')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
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
