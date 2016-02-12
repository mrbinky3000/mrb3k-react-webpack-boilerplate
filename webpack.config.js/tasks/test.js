const PATHS = require('../lib/paths');

module.exports = {
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
};
