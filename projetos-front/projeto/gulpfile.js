const gulp = require('gulp');
const { series, parallel } = require('gulp');
const concat = require('gulp-concat'); // Para concatenar arquivos
const cleanCSS = require('gulp-clean-css'); // Para minificar CSS
const rename = require('gulp-rename'); // Para renomear arquivos
const uglify = require('gulp-uglify'); // Para minificar JS
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel'); // Para transpilar JS
const { event } = require('jquery');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

function tarefasCSS(cb) {
    gulp.src('./vendor/**/*.css') // Captura todos os arquivos CSS
        .pipe(concat('libs.css')) // Concatena todos os arquivos em libs.css
        .pipe(cleanCSS()) // Minifica o CSS
        .pipe(rename({ suffix: '.min' })) // Renomeia para libs.min.css
        .pipe(gulp.dest('./dist/css')); // Salva na pasta dist/css
    cb(); // Chama o callback para indicar que a tarefa foi concluída
}

function tarefaJS(callback) {
    gulp.src('./vendor/**/*.js') // Captura todos os arquivos JS
        .pipe(babel({ // Transpila os arquivos JS
            comments: false,
            presets: ['@babel/env'],
            ignore: [
                './vendor/jqueryui/jquery-ui.js',
                './vendor/fontawesome/js/all.js',
                './vendor/fontawesome/js/brands.js',
                './vendor/fontawesome/js/solid.js',
            ]
        }))
        .pipe(concat('libs.js')) // Concatena todos os arquivos em libs.js
        .pipe(uglify()) // Minifica o JS
        .pipe(rename({ suffix: '.min' })) // Renomeia para libs.min.js
        .pipe(gulp.dest('./dist/js')); // Salva na pasta dist/js
    callback(); // Chama o callback para indicar que a tarefa foi concluída
}

// POC - proof of concept
function tarefasHTML(callback) {
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
    callback(); // Chama o callback para indicar que a tarefa foi concluída
}

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change', process) //repete o processo quando alterar src
    gulp.watch('./src/**/*').on('change', reload)
})

// Registrando as tarefas

const process = series(tarefasHTML, tarefaJS, tarefasCSS);
exports.default = process