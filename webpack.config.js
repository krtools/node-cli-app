let webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/main.js',
	context: __dirname,
	devtool: 'source-map',
	target: 'node',
	output: {
		filename: 'main.dist.js',
		libraryTarget: 'commonjs'
	},
	module: {
		loaders: [{
				test: /\.js$/i,
				loader: 'babel',
				include: [
					path.resolve(__dirname, 'src'),
					// add node_modules/<module> here for those not being uglify-friendly
				]
			}
		]
	},
	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false,
		setImmediate: false
	},
	externals: [
		'./sync.config'
	],
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false,
			},
			compress: {
				warnings: false
			}
		})
	]
};
