/**
 * gulpfile.js
 *
 * Created by sinrin on 2018/4/16.
 */


const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');          //文件名命名
const requirejsOptimize = require('gulp-requirejs-optimize');

gulp.task('rjs', () => {
    return gulp.src('src/main.js')
        .pipe(requirejsOptimize({
            name: 'src/main',
            // out: 'main-bundle.js',
            mainConfigFile: 'src/main.js',
            exclude: ['ELEMENT'],//不打包,
            optimize: "none",
            baseUrl: './'
        }))
        .pipe(babel({
            "presets": [["env", {
                "targets": {
                    "chrome": 64
                }
            }
            ], ["minify"]],
        }))
        .on('error', err => {
            console.log(err.message);
            this.end();
        })
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('src'))
});