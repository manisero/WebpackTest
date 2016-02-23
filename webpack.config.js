module.exports = {
	entry: {
		page1: __dirname + '/src/js/page1/main.js',
		page2: __dirname + '/src/js/page2/main.js'
	},
	output: {
		path: __dirname + '/wwwroot/js',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.css'],
		alias: {
			css: __dirname +'/src/css'
		}
	},
    devtool: 'source-map'
};
