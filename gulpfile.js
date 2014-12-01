var gulp = require('gulp');
var vinyl_source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task( 'compile js', function(){
	var bundler = browserify( './scripts/index.js', {
		transform: ['browserify-shim']
	});
	var stream = bundler
		.bundle()
		.pipe( vinyl_source('index.js') )
		.pipe( gulp.dest('./compiled') );
	return stream;
});

gulp.task( 'default', ['compile js'] );