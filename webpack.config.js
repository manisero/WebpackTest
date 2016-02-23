module.exports = {
	entry: {
		page1: './src/js/page1/main.js',
		page2: './src/js/page2/main.js'
	},
	output: {
		path: './wwwroot/js',
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
    devtool: 'source-map'
};
