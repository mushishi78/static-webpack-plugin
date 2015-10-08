Static Webpack Plugin
=====================

Very simple static-site generator powered by webpack.

Install
-------

``` console
$ npm install --save-dev static-webpack-plugin
```

Usage
-----

### webpack.config.js

``` javascript
var StaticWebpackPlugin = require('static-webpack-plugin');

module.exports = {
  entry: {
    'client': './client.js',
    'static': './static.js'
  },
  output: {
    path: './public',
    filename: '[name].js',
    libraryTarget: 'umd' /* IMPORTANT - must be requirable */
  },
  plugins: [new StaticWebpackPlugin('static.js')]
};
```

### static.js

``` javascript
module.exports = function(render, done) {
  render({ path: 'index.html', output: '<html>Hello</html>' });
  render({ path: 'about/index.html', output: '<html>About</html>' });
  done();
};
```
