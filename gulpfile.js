var gulp = require('gulp');
var concat = require('gulp-concat');
var cssnano     = require('gulp-cssnano');
var rename = require('gulp-rename');

var params = {
  out: 'PRODUCTION',
  htmlSrc: 'index.html'
};

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('build', ['html', 'css', 'copy-i', 'copy-f']);

gulp.task('html', function(){
  gulp.src(params.htmlSrc)
    .pipe(gulp.dest(params.out));
});

gulp.task('css', function() {
  gulp.src([ '*.css', 'Blocks/**/*.css'])
    .pipe(concat('style.css'))
    .pipe(gulp.dest(params.out));
});

gulp.task('copy-f', function() {
  gulp.src([ 'Fonts/*.*', 'Fonts/**/*.*'])
    .pipe(gulp.dest('PRODUCTION/Fonts'));
});

gulp.task('copy-i', function() {
  gulp.src(['Img/*.*'])
    .pipe(gulp.dest('PRODUCTION/Img'));
});

gulp.task('mini', function() {
  gulp.src([ '*.css', 'Blocks/**/*.css'])
    .pipe(concat('style.css'))
    .pipe(cssnano()) // Сжимаем
    .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
    .pipe(gulp.dest(params.out));
});
