const path               = require('path');
const webpack            = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const SRC_DIR          = './src/';
const DIST_DIR         = './dist/';
const NODE_MODULES_DIR = './node_modules/';

module.exports = {
	entry: {
		'polyfills': SRC_DIR + 'polyfills.ts',
		'vendor': SRC_DIR + 'vendor.ts',
		'app': SRC_DIR + 'main.ts'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	output: {
		path: path.resolve(DIST_DIR),
		publicPath: '/',
		filename: '[name].[hash].js',
		chunkFilename: '[id].[hash].chunk.js'
	},
	module: {
		rules: [
			{
                test: /\.ts$/,
                exclude: path.resolve(NODE_MODULES_DIR),
				loaders: [
					{
						loader: 'ts-loader',
						options: { 
							configFile: 'tsconfig.json'
						}
					}
				]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
            }
		]
	},
	plugins: [
		new CleanWebpackPlugin([DIST_DIR]),

		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
			template: SRC_DIR + 'index.html'
		})
	]
};
