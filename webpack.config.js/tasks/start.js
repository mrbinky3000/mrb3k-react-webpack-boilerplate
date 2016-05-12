const PATHS = require('../lib/paths');
const webpack = require('webpack');


module.exports = {
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
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
