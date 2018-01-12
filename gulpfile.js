var path = require('path'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    Ractive = require('ractive'), //Precompiles html templates into JS objects.
    tap = require('gulp-tap');

gulp.task('templates', function () {
    gulp.src('./tpl/**/*.html')
        .pipe(tap(function (file, t) {
            var precompiled = Ractive.parse(file.contents.toString());
            precompiled = JSON.stringify(precompiled);
            file.contents = new Buffer('module.exports = ' + precompiled);
        }))
        .pipe(rename(function (path) {
            path.extname = '.js';
        }))
        .pipe(gulp.dest('./tpl'))
});

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

// gulp.task('js', function () {
//     gulp.src('./js/*.js')
//         .pipe(concat('scripts.js'))
//         .pipe(gulp.dest('./static/js'))
//         .pipe(uglify())
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(gulp.dest('./static/js'))
// });

gulp.task('js', function () {
    gulp.src('./js/app.js')
        .pipe(browserify()) // Makes it possible to have all JS dependencies in one entry point and help build / concatenate into one file. A good replacement for require.js
        .pipe(gulp.dest('./static/js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./static/js'))
});

gulp.task('default', ['css', 'js', 'templates', 'watchers']);