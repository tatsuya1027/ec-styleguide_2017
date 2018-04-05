var gulp = require('gulp');
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "../" // ルートとなるディレクトリを指定
        },
        tunnel: "styleguide"
    });
    gulp.watch("../**/*.html").on("change", reload);
    gulp.watch("../**/*.css").on("change", reload);
    gulp.watch("../**/*.js").on("change", reload);
});
