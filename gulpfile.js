'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


gulp.task('watch', function(){
	gulp.watch('dev/styles/styles.scss', ['styles'])
});

gulp.task('styles', function(){
	return gulp.src('dev/styles/styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(concat('style.css'))
		.pipe(gulp.dest('public/styles/'))
		.pipe(reload({stream: true}));
});

gulp.task('browser-sync', () => {
  browserSync.init({
    server: './public'  
  })
});

gulp.task('default', ['styles','watch']);