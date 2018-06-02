const path = require('path');
const pkg =  require(path.resolve(__dirname, '../package.json'));
const common =  require('./webpack.common');
const DashboardPlugin = require('webpack-dashboard/plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
  plugins: [
    new DashboardPlugin(),
    new webpack.DefinePlugin({
      '__ROOT_API__': JSON.stringify("https://hacker-news.firebaseio.com/v0")
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    port: 9000,
    hot: true,
    overlay: true,
    open: true
  }
});