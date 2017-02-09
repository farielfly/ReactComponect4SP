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

let debug = false;

gulp.task('buildless-dev', function () {
    debug = true;
    build();
});

gulp.task('buildless', function () {
    build();
});

function build() {
    gulp.start('buildless-wp', 'buildless-layout', 'buildless-common');
}

gulp.task('buildless-wp', function () {
    let srcs = new Set();

    for (let webpart of config.webparts) {
        if(!debug&&!webpart.prod_include) continue;
        srcs.add(path.join(config.rootpath, webpart.style));
    }
    buildless(Array.from(srcs),
        'webparts.css',
        debug?path.join(config.rootpath, config.webpartStyleoutput):path.join(config.rootpath, config.prod_root, config.prod_webpartStyleoutput));
})


gulp.task('buildless-layout', function () {
    for (let layout of config.layouts) {
        if(!debug&&!layout.prod_include) continue;
        buildless([path.join(config.rootpath, layout.style)],
            layout.bundlecss,
            debug?path.join(config.rootpath, config.layoutStyleoutput, layout.name):path.join(config.rootpath, config.prod_root, layout.output));
    }
})

gulp.task('buildless-common', function(){
    for (let common of config.common) {
        if(!debug&&!common.prod_include) continue;
        buildless([path.join(config.rootpath, common.style)],
            common.bundlecss,
           debug? path.join(config.rootpath, config.commonStyleoutput):path.join(config.rootpath, config.prod_root, config.prod_commonStyleoutput));
    }
})

function buildless(srcs, name, dest) {
    var postcss = require('gulp-postcss');
    var precss = require('precss');
    var autoprefixer = require('autoprefixer');
    var cssnano = require('cssnano');

    del(path.join(dest, name),{force:true});
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