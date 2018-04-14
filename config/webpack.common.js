var path = require('path');
var pkg =  require(path.resolve(__dirname, '../package.json'));
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.jsx')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/chunk-[name].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [{
            loader: "style-loader" 
        }, {
            loader: "css-loader", options: {
            sourceMap: true
          },
        }, {
            loader: "sass-loader" , options: {
              sourceMap: true
          },
        }]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../layout/index.html'),
      title: 'Webpack template'
    })
  ]
  
};