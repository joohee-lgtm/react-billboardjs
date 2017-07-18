"use strict";

const webpack = require('webpack');
const path = require('path');

const config = {
	context: __dirname + "/",
	entry: {
		"react.c3" : path.resolve(__dirname, "./src/index.js")
	},
	output: {
		publicPath : "/dist/",
		path: path.join(__dirname, "/dist"),
		filename: "[name].bundle.js",
		libraryTarget: "umd"
	},
	module: {
		rules : [{
			test: [/(\.js)$/, /(\.jsx)$/],
			exclude: /(node_modules)/,
			include: path.join(__dirname, 'src'),
			loader: "babel-loader",
			query : {
				presets: ['es2015', 'react']
			}
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devtool: "source-map",
	externals: [
		{
			'c3': {
				root: 'c3',
				commonjs2: 'c3',
				commonjs: 'c3',
				amd: 'c3',
				umd: 'c3'
			}
		},
		{
			'd3': {
				root: 'd3',
				commonjs2: 'd3',
				commonjs: 'd3',
				amd: 'd3',
				umd: 'd3'
			}
		},
		{
			'react-dom': {
				root: 'ReactDOM',
				commonjs2: 'react-dom',
				commonjs: 'react-dom',
				amd: 'react-dom',
				umd: 'react-dom'
			}
		},
		{
			'react': {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react'
			}
		},
		{
			'moment': {
				root: 'moment',
				commonjs2: 'moment',
				commonjs: 'moment',
				amd: 'moment'
			}
		}
	],
	plugins : [
		//new UglifyJSPlugin({
		//  sourceMap : true
		//})
	]
};

module.exports = config;