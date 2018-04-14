const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pkg =  require(path.resolve(__dirname, '../package.json'));
const common =  require('./webpack.common');
const webpack = require('webpack');


module.exports = merge(common, {
  optimization: {
    splitChunks: {
      chunks: "async",
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../layout/production.html'),
      title: 'Webpack template'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
});