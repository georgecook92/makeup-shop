var gulp = require('gulp');
var source = require('vinyl-source-stream');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var babel = require('gulp-babel');

var buffer = require('vinyl-buffer');

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
  gulp.watch("api/**/*.js", ['buildAPI']);
  gulp.watch("api/db/**/.js", ['buildAPI']);
});

gulp.task('default', ['buildAPI']);
