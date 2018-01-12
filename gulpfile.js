var path = require('path'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
minifyCSS = require('gulp-minify-css');

gulp.task('css', function () {
    gulp.src('./less/styles.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./static/css'))
        .pipe(minifyCSS({ keepBreaks: true }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./static/css'));
});

gulp.task('watchers', function () {
    gulp.watch('less/**/*.less', ['css']);
});

gulp.task('js', function () {
    gulp.src('./js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./static/js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./static/js'))
});

gulp.task('default', ['css', 'js', 'watchers']);