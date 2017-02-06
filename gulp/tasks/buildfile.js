import gulp from 'gulp';
import config from '../../config.js';

gulp.task('buildfile', function () {
    gulp.start('buildimage', 'buildfont');
})

gulp.task('buildimage', function () {
    for (let image of config.images) {
         gulp.src(image.src)
            .pipe(gulp.dest(image.output));
    }
})

gulp.task('buildfont', function () {
    return gulp.src(config.font.src)
      .pipe(gulp.dest(config.font.output));
})