var evaluate = require('eval');

function StaticWebpackPlugin(bundlePath, opts) {
  this.bundlePath = bundlePath;
  opts = opts || {};
  this.clean = 'clean' in opts ? opts.clean : true;
}

StaticWebpackPlugin.prototype.apply = function(compiler) {
  var self = this;

  compiler.plugin('emit', function(compilation, done) {
    var source = compilation.assets[self.bundlePath].source();
    var render = evaluate(source, self.bundlePath, undefined, true);
    render = render.default || render;

    if(self.clean) {
      delete compilation.assets[self.bundlePath];
    }

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
