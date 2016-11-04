var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify',function(){
    browserify('src/js/main.js')     //resolve require statement and combine all code of different require module into a single one.
        .transform('reactify')      //resolve jsx to normal javascript.
        .bundle()                  //bundle it
        .pipe(source('main.js')) 
        .pipe(gulp.dest('dist/js'))
});


//copying everything to dist location
gulp.task('copy',function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'));
});


//it is declaring which task to do first after change and continuously checking is there any change.
gulp.task('default',['browserify','copy'],function(){
    return gulp.watch('src/**/*.*',['browserify','copy']);
});
