const gulp = require('gulp')

const serve = require('./gulp/tasks/serve')
const html = require('./gulp/tasks/html')
const styles = require('./gulp/tasks/styles')
const fonts = require('./gulp/tasks/fonts')
const imageMinify = require('./gulp/tasks/imageMinify')
const clean = require('./gulp/tasks/clean')
const lighthouse = require('./gulp/tasks/lighthouse')

function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
    cb()
  }
}

const dev = gulp.parallel(html, styles, fonts, imageMinify)

const build = gulp.series(clean, dev)

module.exports.start = gulp.series(setMode(), build, serve)
module.exports.build = gulp.series(setMode(true), build)

module.exports.lighthouse = gulp.series(lighthouse)
