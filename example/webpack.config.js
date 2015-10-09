var StaticWebpackPlugin = require('../index.js');

module.exports = {
  entry: './static',
  output: {
  	filename: 'static.js',
    path: './public',
    libraryTarget: 'umd'
  },
  plugins: [new StaticWebpackPlugin('static.js')]
};
