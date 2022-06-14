const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src('src/sass/**/*.+(scss|sass)')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({
        prefix: "",
        suffix: ".min",
      }))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 version'], 
        grid: true
        }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() { 
    gulp.watch('src/sass/**/*.+(scss|sass)', gulp.parallel('styles'))
    gulp.watch('src/*.html').on('change', browserSync.reload)
});

gulp.task('defoult', gulp.parallel('watch','server','styles'));