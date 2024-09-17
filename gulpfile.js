import gulp from 'gulp';
import { deleteAsync } from 'del';
import gulpif from 'gulp-if';
import browserSync from 'browser-sync';
import fileInclude from "gulp-file-include";
import htmlmin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import webp from 'gulp-webp';
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
import svgmin from 'gulp-svgmin';
import svgSprite from "gulp-svg-sprite";
import webpackStream from 'webpack-stream';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

const sass = gulpSass(dartSass);

let isProd = process.argv.includes('--build');

const clean = () => {
  return deleteAsync('dist');
}

const htmlMinify = () => {
  return gulp
    .src('src/*.html')
    .pipe(plumber(
      notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
}

const styles = () => {
  return gulp
    .src(['src/sass/**/*.scss', 'src/sass/normalize.css'])
    .pipe(plumber(
      notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false,
      grid: true,
      overrideBrowserslist: ["last 5 versions"]
    }))
    .pipe(gulpif(isProd, cleanCSS({
      level: 2
    })))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
};

const images = () => {
  return gulp
    .src([
      'src/img/**.jpg',
      'src/img/**.png',
      'src/img/**.gif',
      'src/img/**.jpeg',
      'src/img/*.svg',
      'src/img/**/*.jpg',
      'src/img/**/*.png',
      'src/img/**/*.jpeg'
    ], { encoding: false })
    .pipe(imagemin([
      gifsicle({ interlaced: true }),
      mozjpeg({ quality: 85, progressive: true }),
      optipng({ optimizationLevel: 2 }),
      svgo({
        plugins: [
          {
            name: 'removeViewBox',
            active: true
          },
          {
            name: 'cleanupIDs',
            active: false
          }
        ]
      })
    ]))
    .pipe(gulpif(/\.(jpg|jpeg|png)$/, webp()))
    .pipe(gulp.dest('dist/img'))
}

const resources = () => {
  return gulp
    .src('src/resources/**', { encoding: false })
    .pipe(gulp.dest('dist'))
}

const svgSprites = () => {
  return gulp
    .src('src/img/svg/**.svg')
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: '../sprite.svg'
        }
      },
    }))
    .pipe(gulp.dest('dist/img'))
}

const scripts = () => {
  return gulp
    .src('src/js/*.js')
    .pipe(plumber(
      notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(webpackStream({
      mode: isProd ? 'production' : 'development',
      output: {
        filename: 'script.js',
      },
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: "defaults"
                }]
              ]
            }
          }
        }]
      },
      optimization: {
        minimize: isProd,
      },
    }))
    .on('error', function (err) {
      console.error('WEBPACK ERROR', err);
      this.emit('end');
    })
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
}

const watcher = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    notify: false,
    port: 3000,
  });

  gulp.watch('src/sass/**/*.scss', styles);
  gulp.watch('src/**/*.pug', htmlMinify);
  gulp.watch('src/img/*.{jpg,jpeg,png,gif,svg}', images);
  gulp.watch('src/img/**/*.{jpg,jpeg,png,gif}', images);
  gulp.watch('src/img/svg/**.svg', svgSprites);
  gulp.watch('src/resources/**', resources);
  gulp.watch('src/js/**/*.js', scripts);
}

const dev = gulp.series(clean, scripts, styles, resources, images, svgSprites, htmlMinify, watcher);
const build = gulp.series(clean, scripts, styles, resources, images, svgSprites, htmlMinify);

export { dev }
export { build }

gulp.task('default', dev);
