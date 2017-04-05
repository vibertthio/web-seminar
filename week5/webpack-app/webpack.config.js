const path = require('path');
const webpack = require('webpack');

module.exports = {
  // devtool: 'cheap-eval-source-map',
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      use: [ // if multiple loaders:
        'style-loader',
        'css-loader',
      ],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
    }),
  ],
};
