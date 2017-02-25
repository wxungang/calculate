/**
 * Created by xiaogang on 2017/2/25.
 */
"use strict";
var gulp = require('gulp');
var yasuo = require('gulp-uglify');//压缩
var concat = require('gulp-concat');//合并
var clean = require('gulp-clean');//清空打包文件夹
var htmlreplace = require('gulp-html-replace');//替换html文件的引用（和合并合用）
var cleanCSS = require('gulp-clean-css');//CSS的压缩
var replace = require('gulp-batch-replace');//主要JS代码的替换（模拟开发时候的环境，用完替换删除）

gulp.task('default', ["clean","pageJs", "common","concat","html","css"], function () {
    // 将你的默认的任务代码放在这
    console.log("gulp 完成了！");
});

gulp.task("pageJs",["clean"], function () {
    //page js
    gulp.src(["./src/js/*.js","!./src/js/a.js","!./src/js/b.js"])
        .pipe(replace([
            [/@replaceStart[\w\W\s]*?@replaceEnd/g, '苦逼的开发环境...']
        ]))
        .pipe(uglify({
            compress: {
                // 移除console语句
                drop_console: true
            }
        }))
        .pipe(gulp.dest("./build/js"));
});

gulp.task("common",["clean"], function () {
    //common
    gulp.src(["./src/common/*.**"])
        .pipe(gulp.dest("./build/common"));
});

gulp.task("html", ["clean"],function () {
    //html
    gulp.src(["./src/html/*.**"])
        .pipe(htmlreplace({
            'common':{
                src:["../common/common.js"],
                tpl:'<script type="text/javascript" src="%s"></script>'
            },
            'js':{
                src:["../js/ab.js"],
                tpl:'<script type="text/javascript" src="%s"></script>'
            }
        }))
        .pipe(gulp.dest("./build/html"));
});

gulp.task("css",["clean"], function () {
    //common
    gulp.src(["./src/css/*.**"])
        .pipe(cleanCSS({
            compatibility: '*',
            advanced: false
        }))
        .pipe(gulp.dest("./build/css"));
});

gulp.task("concat", ["clean"],function () {
    console.log("开始合并文件");
    gulp.src(["./src/js/a.js","./src/js/b.js"])
        .pipe(concat('ab.js'))
        .pipe(yasuo({
            compress: {
                // 移除console语句
                drop_console: true
            }
        }))
    .pipe(gulp.dest("./build/js"));

    gulp.src(["./src/common/jquery-3.1.1.js","./src/common/vue.js"])
        .pipe(concat('common.js'))
        .pipe(yasuo({
            compress: {
                // 移除console语句
                drop_console: true
            }
        }))
        .pipe(gulp.dest("./build/common"));
});

//先清空 打包目录 和临时目录
gulp.task('clean', function () {
    console.log("clean");
    return gulp.src(['./build'], {read: false})
        .pipe(clean({force: true}));
});