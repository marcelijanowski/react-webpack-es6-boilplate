var path = require('path');
var pkg =  require(path.resolve(__dirname, '../package.json'));
var common =  require('webpack.common');

module.exports = {
  plugins: [
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
    proxy: {
      "**/*.xml": path.resolve(__dirname, '../data/jupiter.xml'),
    }
  }
};