const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

function server() {
    browserSync.init({
        server: './dist'
    });

    gulp.watch('./src/sass/**/*.scss', gulp.series(css));
    gulp.watch('./src/js/*.js').on('change', browserSync.reload);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
}

function html() {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
}

function img() {
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}

function scripts() {
    return gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./dist/js/'))
}

function fonts() {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts/'))
}

function icons() {
    return gulp.src('./src/icons/**/*')
        .pipe(gulp.dest('./dist/icons/'))
}

function css() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./src/styles/'))
        .pipe(gulp.dest('./dist/styles/'))
        .pipe(browserSync.stream());
}

module.exports.start = gulp.series(html, css, fonts, scripts, icons, img, server);