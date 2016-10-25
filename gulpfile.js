var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var babel = require('gulp-babel');

var buffer = require('vinyl-buffer');

// REACT STUFF
gulp.task('browserify', function() {
  var b = browserify({
    entries: ['src/app.js'], // entry file
    debug: true
  });
  b.transform("babelify", {presets: ["es2017", "es2015", "react"]}); // use the babelify transform

  return b.bundle()
 .pipe(source('bundle.js'))
 .pipe(buffer())
 .pipe(plumber(function(err) {
   console.log('browserfy error', err);
   this.emit('end');
 }))
 .pipe(sourcemaps.init())
 .pipe(uglify())
 .pipe(concat('bundle.js'))
 .pipe(sourcemaps.write())
 .pipe(gulp.dest('./dist'))
 .pipe(livereload())
});

// API STUFF

gulp.task('buildAPI', function() {
  return gulp.src('api/**/**/*.js')
  .pipe(plumber(function(err) {
    console.log('API ERROR', err);
    this.emit('end');
  }))
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['es2015', 'es2017',]
  }))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./dist/API'))
  .pipe(livereload())
});

gulp.task('watch', function() {
  gulp.watch("src/**/*.js", ['browserify']);
  gulp.watch("api/**/*.js", ['buildAPI']);
  gulp.watch("api/db/**/.js", ['buildAPI']);
});

gulp.task('default', ['buildAPI', 'browserify']);
