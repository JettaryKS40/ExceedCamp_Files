var path = require('path');
var webpack = require('webpack');

module.exports = {
<<<<<<< bfc0a31bc37ad04f514615c134018e0e4bc71a7a
	entry: './main.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
      },
			{
				test: path.join(__dirname, 'es6'),
				loader: 'babel-loader'
			}
    ]
	},
=======
  entry: './main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
>>>>>>> initial project
};
