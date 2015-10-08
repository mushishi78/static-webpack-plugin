module.exports = function(render, done) {
  render({ path: 'index.html', contents: '<html>Index</html>' });
  render({ path: 'about/index.html', contents: '<html>About</html>' });
  done();
};
