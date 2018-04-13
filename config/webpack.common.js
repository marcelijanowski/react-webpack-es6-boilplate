var path = require('path');
var pkg =  require(path.resolve(__dirname, '../package.json'));
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.jsx'),
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[hash:8].js',
    publicPath: ''
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../layout/index.html'),
      title: 'Webpack template'
    })
  ]
  
};