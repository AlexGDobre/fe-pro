const browserSync = require('browser-sync');
const {src,dest,parallel,series,watch}= require('gulp');
const htmlmin=require('gulp-htmlmin');
const jsmin =require('gulp-jsmin');
const rename=require('gulp-rename');
const sass=require('gulp-sass')(require('sass'));
const browsync = require('browser-sync').create();

const path={
  html:'sborka/',
  cssp:'sborka/styles/',
  js:'sborka/scripts/'
}

function minhtml(){
  return src('pre-sborka/*.html')
  .pipe(htmlmin({
    collapseWhitespace:true,
  }))
  .pipe(dest(path.html))
}

// Почему то не срабатывает компеляция!!! работает от vsc

// function sasstomin(){
//   return src('*.scss')
//   .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
//   .pipe(rename({suffix:'.min'}))
//   .pipe(dest(path.cssp))
// }

function cssminto(){
  return src('pre-sborka/styles/*.css')
  .pipe(rename({suffix:'.min'}))
  .pipe(dest(path.cssp))
}
function minjs(){
 return src(['pre-sborka/scripts/*.js'])
 .pipe(jsmin())
 .pipe(rename({suffix:'.min'}))
 .pipe(dest(path.js));
}
// Как исключить гулпфайл от наблюдения?

function watching(){
  browserSync.init({
    server:{
      baseDir:'./sborka',
      index:'testhtml.html'
    }
  });
  watch('pre-sborka/*.html', minhtml);
  watch('pre-sborka/scripts/*.js',minjs);
  // watch('*.sass',sasstomin);
  watch('pre-sborka/styles/*.css',cssminto);
  watch('sborka/**/*.*').on('change', browserSync.reload);
}

exports.default = watching;