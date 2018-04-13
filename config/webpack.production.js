const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const pkg =  require(path.resolve(__dirname, '../package.json'));
const common =  require('./webpack.common');
const webpack = require('webpack');


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
    })
  ]
});