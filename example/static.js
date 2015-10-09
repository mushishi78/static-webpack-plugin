module.exports = function(render, done) {
  render('index.html', '<html>Index</html>');
  render('about/index.html', '<html>About</html>');
  done();
};
