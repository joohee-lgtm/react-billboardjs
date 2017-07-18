"use strict";

const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const portscanner = require('portscanner');

const config = {
	context: __dirname + "/",
	entry: {
		"sample" : path.resolve(__dirname, "./src/sample.js"),
	},
	output: {
		publicPath : "/demo/",
		path: path.join(__dirname, "/demo"),
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
	devtool: "cheap-module-source-map",
	devServer: {
		contentBase: __dirname + '/',
		hot: true,
		inline: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

const portPromise = new Promise(function(resolve, reject){
	portscanner.findAPortNotInUse(port, port + 10, host, function(error, port) {
		// Status is 'open' if currently in use or 'closed' if available
		config.devServer.port = port;
		config.devServer.host = host;
		resolve(config);
	});
});

module.exports = portPromise;