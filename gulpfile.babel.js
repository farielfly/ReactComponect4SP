var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

requireDir('./gulp/tasks', { recurse: true });

gulp.task('build-dev', function () {
    gulp.start('buildjs', 'buildless', 'buildfile');
});

