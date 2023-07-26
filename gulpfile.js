/**
 *   Gulp with TailwindCSS - An CSS Utility framework build setup with SCSS
 *   Author : Manjunath G
 *   URL : manjumjn.com | lazymozek.com
 *   Twitter : twitter.com/manju_mjn
 **/

/*
  Usage:
  1. npm install //To install all dev dependencies of package
  2. npm run dev //To start development and server for live preview
  3. npm run prod //To generate minifed files for live server
*/

const { src, dest, watch, series, parallel } = require('gulp');
const clean = require('gulp-clean'); //For Cleaning build/dist for fresh export
const options = require('./config'); //paths and other options from config.js
const browserSync = require('browser-sync').create();
const replace = require('gulp-replace');

const sass = require('gulp-sass')(require('sass')); //For Compiling SASS files
const postcss = require('gulp-postcss'); //For Compiling tailwind utilities with tailwind config
const concat = require('gulp-concat'); //For Concatinating js,css files
const uglify = require('gulp-terser'); //To Minify JS files
const imagemin = require('gulp-imagemin'); //To Optimize Images
const mozjpeg = require('imagemin-mozjpeg'); // imagemin plugin
const pngquant = require('imagemin-pngquant'); // imagemin plugin
const purgecss = require('gulp-purgecss'); // Remove Unused CSS from Styles
const logSymbols = require('log-symbols'); //For Symbolic Console logs :) :P
const includePartials = require('gulp-file-include'); //For supporting partials if required

//Load Previews on Browser on dev
function livePreview(done) {
  browserSync.init({
    server: {
      baseDir: options.paths.dist.base,
    },
    port: options.config.port || 5000,
  });
  done();
}

// Triggers Browser reload
function previewReload(done) {
  console.log('\n\t' + logSymbols.info, 'Reloading Browser Preview.\n');
  browserSync.reload();
  done();
}

//Development Tasks
function devHTML() {
  return src(`${options.paths.src.base}/**/*.html`)
    .pipe(includePartials())
    .pipe(dest(options.paths.dist.base));
}

function devStyles() {
  const tailwindcss = require('tailwindcss');
  const autoprefixer = require('autoprefixer');
  return src(`${options.paths.src.css}/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([tailwindcss(options.config.tailwindjs), autoprefixer()]))
    .pipe(concat({ path: 'style.css' }))
    .pipe(dest(options.paths.dist.css));
}

function devScripts() {
  return src([
    `${options.paths.src.js}/libs/**/*.js`,
    `${options.paths.src.js}/**/*.js`,
    `!${options.paths.src.js}/**/external/*`,
  ])
    .pipe(concat({ path: 'scripts.js' }))
    .pipe(dest(options.paths.dist.js));
}

function devImages() {
  return src(`${options.paths.src.img}/**/*`).pipe(
    dest(options.paths.dist.img)
  );
}

// function devImages() {
//   return src(`${options.paths.src.img}/**/*`).pipe(
//     dest(options.paths.dist.img)
//   );
// }

function devFonts() {
  return src(`${options.paths.src.fonts}/**/*`).pipe(
    dest(options.paths.dist.fonts)
  );
}

function devThirdParty() {
  return src(`${options.paths.src.thirdParty}/**/*`).pipe(
    dest(options.paths.dist.thirdParty)
  );
}

function watchFiles() {
  watch(
    `${options.paths.src.base}/**/*.{html,php}`,
    series(devHTML, devStyles, previewReload)
  );
  watch(
    [options.config.tailwindjs, `${options.paths.src.css}/**/*.scss`],
    series(devStyles, previewReload)
  );
  watch(`${options.paths.src.js}/**/*.js`, series(devScripts, previewReload));
  watch(`${options.paths.src.img}/**/*`, series(devImages, previewReload));
  watch(`${options.paths.src.fonts}/**/*`, series(devFonts, previewReload));
  watch(
    `${options.paths.src.thirdParty}/**/*`,
    series(devThirdParty, previewReload)
  );
  console.log('\n\t' + logSymbols.info, 'Watching for Changes..\n');
}

function devClean() {
  console.log(
    '\n\t' + logSymbols.info,
    'Cleaning dist folder for fresh start.\n'
  );
  return src(options.paths.dist.base, { read: false, allowEmpty: true }).pipe(
    clean()
  );
}

//Production Tasks (Optimized Build for Live/Production Sites)
function prodHTML() {
  return src(`${options.paths.src.base}/**/*.{html,php}`)
    .pipe(includePartials())
    .pipe(dest(options.paths.build.base));
}

function prodGitHTML() {
  return src(`${options.paths.src.base}/**/*.{html,php}`)
    .pipe(includePartials())
    .pipe(replace('../../', './'))
    .pipe(replace('./../', './'))
    .pipe(replace('<script src="./js/scripts.js"></script>', 
    '<script src="./js/libs.js"></script><script src="./js/scripts.js"></script>'))
    .pipe(dest(options.paths.docs.base));
}



function prodStyles() {
  const tailwindcss = require('tailwindcss');
  const autoprefixer = require('autoprefixer');
  const cssnano = require('cssnano');
  return src(`${options.paths.src.css}/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(
      postcss([
        tailwindcss(options.config.tailwindjs),
        autoprefixer(),
        cssnano(),
      ])
    )
    .pipe(concat({ path: 'style.css' }))
    .pipe(
      purgecss({
        ...options.config.purgecss,
        defaultExtractor: (content) => {
          // without arbitray selectors
          // const v2Regex = /[\w-:./]+(?<!:)/g;
          // with arbitray selectors
          const v3Regex = /[(\([&*\])|\w)-:./]+(?<!:)/g;
          const broadMatches = content.match(v3Regex) || [];
          const innerMatches =
            content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
          return broadMatches.concat(innerMatches);
        },
      })
    )
    .pipe(replace('../../', '../'))
    .pipe(dest(options.paths.build.css));
}

function prodGitStyles() {
  const tailwindcss = require('tailwindcss');
  const autoprefixer = require('autoprefixer');
  const cssnano = require('cssnano');
  return src(`${options.paths.src.css}/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(
      postcss([
        tailwindcss(options.config.tailwindjs),
        autoprefixer(),
        cssnano(),
      ])
    )
    .pipe(concat({ path: 'style.css' }))
    .pipe(
      purgecss({
        ...options.config.purgecss,
        defaultExtractor: (content) => {
          // without arbitray selectors
          // const v2Regex = /[\w-:./]+(?<!:)/g;
          // with arbitray selectors
          const v3Regex = /[(\([&*\])|\w)-:./]+(?<!:)/g;
          const broadMatches = content.match(v3Regex) || [];
          const innerMatches =
            content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
          return broadMatches.concat(innerMatches);
        },
      })
    )
    .pipe(replace('../../', '../'))
    .pipe(dest(options.paths.docs.css));
}

function prodScripts() {
  return src([
    `${options.paths.src.js}/libs/**/*.js`,
    `${options.paths.src.js}/**/*.js`,
  ])
    .pipe(concat({ path: 'scripts.js' }))
    .pipe(uglify())
    .pipe(dest(options.paths.build.js));
}

function prodGitLibsScripts() {
  return (
    src([`${options.paths.src.js}/libs/**/*.js`])
      .pipe(concat({ path: 'libs.js' }))
      // .pipe(uglify())
      .pipe(dest(options.paths.docs.js))
  );
}

function prodGitDevScripts() {
  return (
    src([`${options.paths.src.js}/scripts/**/*.js`])
      .pipe(concat({ path: 'scripts.js' }))
      // .pipe(uglify())
      .pipe(dest(options.paths.docs.js))
  );
}

function prodImages() {
  const pngQuality = Array.isArray(options.config.imagemin.png)
    ? options.config.imagemin.png
    : [0.7, 0.7];
  const jpgQuality = Number.isInteger(options.config.imagemin.jpeg)
    ? options.config.imagemin.jpeg
    : 70;
  const plugins = [
    pngquant({ quality: pngQuality }),
    mozjpeg({ quality: jpgQuality }),
  ];

  return src(options.paths.src.img + '/**/*')
    .pipe(imagemin([...plugins]))
    .pipe(dest(options.paths.build.img));
}

function prodGitImages() {
  const pngQuality = Array.isArray(options.config.imagemin.png)
    ? options.config.imagemin.png
    : [0.7, 0.7];
  const jpgQuality = Number.isInteger(options.config.imagemin.jpeg)
    ? options.config.imagemin.jpeg
    : 70;
  const plugins = [
    pngquant({ quality: pngQuality }),
    mozjpeg({ quality: jpgQuality }),
  ];

  return src(options.paths.src.img + '/**/*')
    .pipe(imagemin([...plugins]))
    .pipe(dest(options.paths.docs.img));
}

function prodFonts() {
  return src(`${options.paths.src.fonts}/**/*`).pipe(
    dest(options.paths.build.fonts)
  );
}

function prodGitFonts() {
  return src(`${options.paths.src.fonts}/**/*`).pipe(
    dest(options.paths.docs.fonts)
  );
}

function prodThirdParty() {
  return src(`${options.paths.src.thirdParty}/**/*`).pipe(
    dest(options.paths.build.thirdParty)
  );
}

function prodGitThirdParty() {
  return src(`${options.paths.src.thirdParty}/**/*`).pipe(
    dest(options.paths.docs.thirdParty)
  );
}

function prodClean() {
  console.log(
    '\n\t' + logSymbols.info,
    'Cleaning build folder for fresh start.\n'
  );
  return src(options.paths.build.base, { read: false, allowEmpty: true }).pipe(
    clean()
  );
}

function prodGitClean() {
  console.log(
    '\n\t' + logSymbols.info,
    'Cleaning build folder for fresh start.\n'
  );
  return src(options.paths.docs.base, { read: false, allowEmpty: true }).pipe(
    clean()
  );
}

function buildFinish(done) {
  console.log(
    '\n\t' + logSymbols.info,
    `Production build is complete. Files are located at ${options.paths.build.base}\n`
  );
  done();
}

exports.default = series(
  devClean, // Clean Dist Folder
  parallel(devStyles, devScripts, devImages, devFonts, devThirdParty, devHTML), //Run All tasks in parallel
  livePreview, // Live Preview Build
  watchFiles // Watch for Live Changes
);

exports.prod = series(
  prodClean, // Clean Build Folder
  parallel(
    prodStyles,
    prodScripts,
    prodImages,
    prodHTML,
    prodFonts,
    prodThirdParty
  ), //Run All tasks in parallel
  buildFinish
);

exports.prodGithub = series(
  prodGitClean, // Clean Build Folder
  parallel(
    prodGitStyles,
    prodGitLibsScripts,
    prodGitDevScripts,
    prodGitImages,
    prodGitHTML,
    prodGitFonts,
    prodGitThirdParty
  ), //Run All tasks in parallel
  buildFinish
);
