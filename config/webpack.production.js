const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pkg =  require(path.resolve(__dirname, '../package.json'));
const common =  require('./webpack.common');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
  module: {
    rules: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader', 
        use: 'css-loader'
      })
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../layout/production.html'),
      title: 'Webpack template'
    }),
    new webpack.DefinePlugin({
      '__ROOTAPI__': JSON.stringify("http://localhost:8000")
    }),
    new ExtractTextPlugin({
      filename: 'static/css/[name].[hash:8].css',
      allChunks: true
    })
  ]
});