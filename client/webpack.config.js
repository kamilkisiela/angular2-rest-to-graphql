var path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.css']
  },
  module: {
    loaders: [{
        test: /\.ts$/, 
        exclude: /node_modules/, 
        loader: 'ts-loader'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style!css'
    }]
  }
};