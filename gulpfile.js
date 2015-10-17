var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var svgSprite = require('gulp-svg-sprite');

gulp.task('default', ['minjs']);

gulp.task('minjs', function() {
  return gulp.src('./script/script.js')
    .pipe(uglify({preserveComments: 'some', mangle: true}))
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('./script'));
});
