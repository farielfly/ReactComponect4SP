import gulp from 'gulp';
import less from 'gulp-less';
import sourcemaps from 'gulp-sourcemaps';
import path from 'path';
import cssmin from 'gulp-minify-css';
import source from 'vinyl-source-stream';
import config from '../../config.js';
import concat from 'gulp-concat';
import del from 'del';
import replace from 'gulp-replace';
import es from 'event-stream';
import gulpconcat from 'gulp-concat';
import rename from 'gulp-rename';

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
    gulp.start('buildless-wp', 'buildless-layout', 'buildless-webglobal','concat-css');
}

gulp.task('buildless-wp', function () {    
    let streamArr = [];
    for (let webpart of config.webparts) {
        let srcs = new Set();
        if(!debug && !webpart.prod_output_css){
            continue;
        }
        for (let style of webpart.style) {
            srcs.add(path.join(config.rootpath, style));
        }
        let stream = buildless(Array.from(srcs), webpart.name + '.css',
            debug ? path.join(config.rootpath, webpart.output) : path.join(config.rootpath, config.prod_root, webpart.prod_output_css));
        streamArr.push(stream);
    }
    return es.merge(streamArr);
})


gulp.task('buildless-layout', function () {
    let srcs = new Set();
    for (let layout of config.layouts) {
        if (!debug && !layout.prod_include) {
            continue;
        }
        for (let style of layout.style) {
            srcs.add(path.join(config.rootpath, style));
        }
        buildless(Array.from(srcs), layout.name + '.css',
            debug ? path.join(config.rootpath, layout.output) : path.join(config.rootpath, config.prod_root, config.prod_webpartStyleoutput));
    }

})

gulp.task('buildless-webglobal', function () {
    let srcs = new Set();
    for (let web of config.webglobal) {
        if (!debug && !web.prod_include) {
            continue;
        }
        for (let style of web.style) {
            srcs.add(path.join(config.rootpath, style));
        }
        buildless(Array.from(srcs), web.name + '.css',
            debug ? path.join(config.rootpath, web.output) : path.join(config.rootpath, config.prod_root, web.prod_output));
    }
})

function buildless(srcs, name, dest) {
    var postcss = require('gulp-postcss');
    var precss = require('precss');
    var autoprefixer = require('autoprefixer');
    var cssnano = require('cssnano');

    del(path.join(dest, name), { force: true });
    return gulp.src(srcs)
        .pipe(concat(name))
        .pipe(less())
        .pipe(replace('../../dist/common/images/', debug? '../../dist/common/images/':config.replacepath))
        .pipe(postcss([precss, autoprefixer]))
        .pipe(cssmin())
        .on('error', handlerError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest));    
}

gulp.task('concat-css',['buildless-wp', 'buildless-layout', 'buildless-webglobal'],function(){
    if(!debug){
        for(let concat of config.concats.css){
            gulp.src(concat.src)
                .pipe(gulpconcat(path.join(config.rootpath, config.prod_root, config.prod_webpartScriptoutput, concat.name + '.tmp.css')))
                .pipe(rename(concat.name + '.css'))
                .pipe(gulp.dest(path.join(config.rootpath, config.prod_root, concat.output),{overwrite:true}));
        }
    }
})

gulp.task('watchless', function () {
    gulp.watch(config.config.src, ['buildless']);
})