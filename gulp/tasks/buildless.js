import gulp from 'gulp';
import less from 'gulp-less';
import sourcemaps from 'gulp-sourcemaps';
import path from 'path';
import cssmin from 'gulp-minify-css';
import source from 'vinyl-source-stream';
import config from '../../config.js';
import concat from 'gulp-concat';
import del from 'del';

function handlerError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('buildless', function () {
    gulp.start('buildless-wp', 'buildless-layout', 'buildless-common');
})

gulp.task('buildless-wp', function () {
    let srcs = new Set();

    for (let webpart of config.webparts) {
        srcs.add(path.join(config.rootpath, webpart.style));
    }
    buildless(Array.from(srcs),
        'webparts.css',
        path.join(config.rootpath, config.webpartStyleoutput));
})


gulp.task('buildless-layout', function () {
    for (let layout of config.layouts) {
        buildless([path.join(config.rootpath, layout.style)],
            layout.bundlecss,
            path.join(config.rootpath, config.layoutStyleoutput, layout.name));
    }
})

gulp.task('buildless-common', function(){
    for (let common of config.common) {
        buildless([path.join(config.rootpath, common.style)],
            common.bundlecss,
            path.join(config.rootpath, config.commonStyleoutput));
    }
})

function buildless(srcs, name, dest) {
    var postcss = require('gulp-postcss');
    var precss = require('precss');
    var autoprefixer = require('autoprefixer');
    var cssnano = require('cssnano');

    del(path.join(dest, name));
    gulp.src(srcs)
        .pipe(concat(name))
        .pipe(less())
        .pipe(postcss([precss, autoprefixer]))
        .pipe(cssmin())
        .on('error', handlerError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest));
}

gulp.task('watchless', function () {
    gulp.watch(config.config.src, ['buildless']);
})