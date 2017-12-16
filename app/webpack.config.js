var debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack')
module.exports = {
	context: __dirname,
	devtool: debug ? "inline-sourcemap" : null,
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		publicPath: '/static/',
		filename: './bundle.js'
	},
	devServer: {
		port: 8080,
		contentBase: './public',
		compress: true,
	},
	module: {
		loaders: [{
			test: /.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['env', 'react', 'stage-0'],
				plugins: ['transform-decorators-legacy']
			}
		}]
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],
}
