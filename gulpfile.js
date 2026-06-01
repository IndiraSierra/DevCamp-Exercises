var gulp = require('gulp');
var browsersync = require('browser-sync').create();
var reload = browsersync.reload;

// Static Server + watching scss/html files
gulp.task('serve', function() {        
    browsersync.init({
        server: {
            baseDir: "C:/Users/INSIGA/Documents/DevCamp/DevCamp-Exercises",
            index: "exercise6_home_page.html"
        }
    });
    gulp.watch("*.html").on('change', reload);  
});