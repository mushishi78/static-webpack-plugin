var evaluate = require('eval');

function StaticWebpackPlugin(bundlePath) {
  this.bundlePath = bundlePath;
}

StaticWebpackPlugin.prototype.apply = function(compiler) {
  var self = this;

  compiler.plugin('emit', function(compilation, done) {
    var source = compilation.assets[self.bundlePath].source();
    var render = evaluate(source, self.bundlePath, undefined, true);
    render(addToAssets(compilation.assets), done);
  });
};

function addToAssets(assets) {
  return function(filename, contents) {
    assets[filename] = {
      source: function() { return contents; },
      size:   function() { return contents.length; }
    };
  };
}

module.exports = StaticWebpackPlugin;
