'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');

var handleErrors = function handleErrors () {
    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);

    this.emit('end');
};

gulp.task('styles', function () {
    var autoprefixer = require('gulp-autoprefixer');
    var sass = require('gulp-sass');

    return gulp.src('styles/main.scss')
        .pipe(sass())
        .on('error', handleErrors)
        .pipe(autoprefixer())
        .pipe(gulp.dest('styles'));
});

gulp.task('watch', function () {
    gulp.watch(['styles/**/*.scss'], ['styles']);
});

gulp.task('start', ['styles', 'watch']);
gulp.task('default', ['start']);
