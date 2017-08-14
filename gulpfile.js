/* eslint-disable */
const gulp      = require('gulp');
const gutil     = require('gulp-util');
const uglify    = require('gulp-uglify');
const concat    = require('gulp-concat');
const rev       = require('gulp-rev');
const imagemin  = require('gulp-imagemin');
const replace   = require('gulp-replace');
const spritesmith = require('gulp.spritesmith');
const cleanCSS = require('gulp-clean-css');

gulp.task('concat', () => {
  gulp.src([
    './src/js/vue.min.js',
    './src/js/vue-router.min.js',
    './src/js/vue-resource.min.js'
  ])
      .pipe(uglify())
      .pipe(concat('library.js'))
      .pipe(gulp.dest('./webapp/dist/js'));
});
gulp.task('cleanCSS', () => {
  gulp.src('./webapp/dist/css/guest.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('./webapp/dist/css/'))
});
gulp.task('default', ['concat', 'cleanCSS']);
