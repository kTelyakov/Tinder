let gulp = require('gulp')
let fs = require('fs')
let sass = require('gulp-sass')
let combiner = require('stream-combiner2').obj
let autoprefixer = require('gulp-autoprefixer')
let notify = require('gulp-notify')
let rename = require('gulp-rename')
let browserSync = require('browser-sync').create()
let reload = browserSync.reload
let jade = require('gulp-jade')

gulp.task('serve', function() {
	browserSync.init({
		open: false,
		notify: false,
		watchOptions: {
	        usePolling: true
	    },
		server: {
			baseDir: "./public"
		}
	})
})



gulp.task('scss', function(callback) {
    combiner(
        gulp.src('./public/scss/index.scss'),
        sass(),
        autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }),
        rename('main.css'),
        gulp.dest('./public/css'),
        browserSync.stream()
    ).on('error', notify.onError({
        "sound": false,
    }))
    callback()
});

gulp.task('watch', function() {
    gulp.watch([
        './public/scss/*.scss',
        './public/scss/**/*.scss'
    ], gulp.parallel('scss'))

    browserSync.watch('./public/jade/**/*.jade').on('change', function(){
        combiner(
            gulp.src('./public/jade/**/*.jade'),
            jade(),
            gulp.dest('./public'),
            browserSync.stream()
        ).once('error', notify.onError({
            "sound": false,
        }))
    })
})

gulp.task('dev', gulp.parallel('serve', 'watch'))
