var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    eslint = require('gulp-eslint'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    prettyerror = require('gulp-prettyerror');

gulp.task('sass', function () {
  gulp.src('./SCSS/style.scss')
    .pipe(prettyerror())
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/css'))
});

gulp.task('scripts', ['eslint'], function () {
  gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./build/js'))
});

gulp.task('eslint', function() {
  return gulp.src(['./js/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('browser-sync', function () {
  browserSync.init({ 
    server: {
      baseDir: './'
    }
  });

gulp.watch(['./build/js/*.js', './build/css/*.css']).on('change', browserSync.reload);
});

gulp.task('watch', function( ) {
  gulp.watch('./js/*.js', ['scripts'])
  gulp.watch('./SCSS/*.scss', ['sass'])

});

gulp.task('default', ['watch', 'browser-sync']);

