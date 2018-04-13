var path = require('path');
const merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

var pkg =  require(path.resolve(__dirname, '../package.json'));
var common =  require('webpack.common.js');
var webpack = require('webpack');


module.exports = merge(common, {
  externals: [
    "react",
    "react-dom"
  ],
  performance: {
    hints: "error"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash].min.js',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
  ]
});