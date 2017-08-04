var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');
browserSync = require('browser-sync');

gulp.task('styles', function(){
 return gulp.src('./app/assets/styles/styles.css')
 .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
 .pipe(gulp.dest('./app/temp/styles'))
 .pipe(browserSync.stream());
});

gulp.task('watch', function(){

  browserSync.init({
          server: "./app"
      });

  watch('./app/assets/**/*.css', function(){
    gulp.start('styles');
  });
  watch('./app/*html').on('change', browserSync.reload);
});
