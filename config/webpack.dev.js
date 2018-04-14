const path = require('path');
const pkg =  require(path.resolve(__dirname, '../package.json'));
const common =  require('./webpack.common');
const DashboardPlugin = require('webpack-dashboard/plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  plugins: [
    new DashboardPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    port: 9000,
    hot: true,
    proxy: {
      "**/*.xml": path.resolve(__dirname, '../data/jupiter.xml'),
    }
  }
});