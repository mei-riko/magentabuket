var gulp = require("gulp"),
  pug = require("gulp-pug"),
  changed = require('gulp-changed'),
  cleanCSS = require('gulp-clean-css'),
  plumber = require("gulp-plumber"),

  uglify = require("gulp-uglify"),
  notify = require("gulp-notify"),
  webpack = require("webpack"),
  webpackStream = require('webpack-stream'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  concat = require('gulp-concat');

  gulp.task('browser-sync', function () {
    browserSync.init({
      server: {
        baseDir: './public',
      }
    })
  });
  
  
  gulp.task('html', function () {
    return gulp.src('./src/*.pug')
      .pipe(changed('public', { extension: '.html' }))
      .pipe(plumber())
      .pipe(pug({ pretty: true }).on('error', notify.onError()))
      .pipe(browserSync.stream())
      .pipe(gulp.dest('./public/'))
      .on('end', browserSync.reload);
  });
  
  gulp.task('css', function () {
    return gulp.src(['./src/css/*.scss'])
      .pipe(changed('public', { extension: '.css' }))
      .pipe(plumber())
      .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 5 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('./public/css/'))
      .on('end', browserSync.reload);
  });
  
  gulp.task('watch', function () {
    gulp.watch(['./src/*.pug'], gulp.parallel('html'));
    gulp.watch(['./src/css/*.scss'], gulp.parallel('css'));
  });
  
  
  gulp.task('default', gulp.parallel('html', 'css', 'watch', 'browser-sync' ) );