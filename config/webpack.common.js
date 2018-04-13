var path = require('path');
var pkg =  require(path.resolve(__dirname, '../package.json'));

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/index.jsx'),
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[hash:8].js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
  
};