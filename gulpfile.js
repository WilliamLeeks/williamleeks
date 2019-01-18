var gulp           = require('gulp'),
	concat         = require('gulp-concat'),
	uglify         = require('gulp-uglify'),
	rename         = require('gulp-rename'),
	sass           = require('gulp-sass'),
	postcss        = require('gulp-postcss'),
	autoprefixer   = require('autoprefixer'),
	cssnano        = require('cssnano'),
	browserSync    = require('browser-sync').create();
 
var config = {
	scripts: [
		// Any Custom Scripts
		'assets/js/src/*.js',
	]
};
 
gulp.task('scripts', function() {
	return gulp.src(config.scripts)
			.pipe(concat('scripts.js'))
			.pipe(uglify())
			.pipe(rename({ extname: '.min.js' }))
			.pipe(gulp.dest('assets/js'))
			.pipe(browserSync.stream());
});
 
gulp.task('sass', function () {
	return gulp.src('assets/scss/*.scss')
			.pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(gulp.dest('assets/css'));
});

gulp.task('css', function () {
	var processors = [
		autoprefixer({browsers: ['last 3 versions', 'ie 8', 'ie 9']}),
		cssnano(),
	];
	return gulp.src('assets/css/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('assets/css'))
		.pipe(browserSync.stream());
});
 
gulp.task('watch', function () {
	browserSync.init({
		server: {
            baseDir: "./"
        }
	});

	gulp.watch(['**/*.html']).on('change', browserSync.reload);
	gulp.watch('assets/scss/**/*.scss', ['sass']);
	gulp.watch('assets/js/src/*.js', { interval: 1000 }, ['scripts']);
	gulp.watch('assets/css/*.css', ['css']);
});
 
gulp.task('default', ['watch']);
