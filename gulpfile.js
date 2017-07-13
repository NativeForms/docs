var gulp = require('gulp');  
var gulpLoadPlugins = require('gulp-load-plugins');

var $ = gulpLoadPlugins();

// Build the docs
gulp.task('build', function (cb) {
  $.gitbook('.', cb);
});

// Publishes the site to GitHub Pages
gulp.task('publish', () => {  
  console.log('Publishing to GH Pages');
  return gulp.src('./_book/**/*')
    .pipe($.ghPages({
      origin: 'origin',
      branch: 'gh-pages'
    }));
});