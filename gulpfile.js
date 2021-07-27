var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    minCss = require('gulp-minify-css'),
    del = require('del');

// target source scss
var input = {
    'sass': 
    [
        'src/sass/main.scss'
    ],
    'vendor': 
    [
        'src/sass/vendor/main.scss'
    ],
    'js':
    [
        'src/vendor/main.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery-migrate/dist/jquery-migrate.js',
        'node_modules/slick-slider/slick/slick.min.js',
        'node_modules/aos/dist/aos.js',
    ],
    'fonts' :
    [
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff',
        'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf',
    ]
};

// output css
var output = {
    'css': 'dist/fe/css',
    'vendor': 'dist/fe/vendor',
    'js': 'dist/fe/js',
    'fonts':'dist/fe/webfonts'
};

// gulp.task('default', ['styles', 'watch', 'clean']);
// run the watch task when gulp is called without arguments
// gulp.task('default', ['watch']);

// compile SCSS to CSS files
var prefixerOptions = {
    cascade: false
};

gulp.task('build-css', function () {
    return gulp.src(input.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(prefixerOptions))
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output.css))
        .pipe(minCss())
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('build-vendor', function () {
    return gulp.src(input.vendor)
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(prefixerOptions))
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output.vendor))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('build-js',function(){
    return gulp.src(input.js)
        .pipe(gulp.dest(output.js))
        .pipe(sourcemaps.write())
        .pipe(browserSync.stream(
            {stream: true}
        ));
    });

gulp.task('build-fonts',function(){
    return gulp.src(input.fonts)
        .pipe(gulp.dest(output.fonts))
        .pipe(sourcemaps.write())
        .pipe(browserSync.stream(
            {stream: true}
        ));
    });

// styles SCSS to CSS files
gulp.task('styles', () => {
    return gulp.src(input.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(output.css));
});

// watch SCSS to CSS files
gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', (done) => {
        gulp.series(['build-css'])(done);
    });
    gulp.watch('src/vendor/*.js', (done) => {
        gulp.series(['build-js'])(done);
    });
});

// clean CSS files
gulp.task('clean', () => {
    return del([
        'dist/fe/css/main.css',
        'dist/fe/js/main.js',
    ]);
});