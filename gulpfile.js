var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
    gulp.src([
        './css/bootstrap.min.css',
        './css/supersized.css"',
        './css/donsun.css'
    ])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dist/'));

    gulp.src([
        './js/jquery.js',
        './js/bootstrap.min.js',
        './js/animations.js',
        './js/jquery.easing.min.js',
        './js/classie.js',
        './js/jqBootstrapValidation.js',
        './js/jquery.flexslider.js',
        './js/supersized.3.2.7.min.js',
        './js/appear.js',
        './js/scrollReveal.js',
        './js/velocity.min.js',
        './js/velocity.ui.min.js',
        './js/contact_me.js',
        './js/donsun.js'
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});