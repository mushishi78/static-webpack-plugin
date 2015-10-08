var StaticWebpackPlugin = require('./index.js');

module.exports = {
  entry: './example',
  output: {
  	filename: 'example.js',
    path: './public',
    libraryTarget: 'umd'
  },
  devServer: { contentBase: './public' },
  plugins: [new StaticWebpackPlugin('example.js')]
};
