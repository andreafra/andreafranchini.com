const { src, dest, series, parallel, watch } = require("gulp")
const stylus = require("gulp-stylus")
const uglyfy = require("gulp-uglyfly")
const pug = require("gulp-pug")
const clean = require("gulp-clean-dest")
const bs = require("browser-sync").create()

runClean = (cb) => {
  clean("build/")
  cb()
}

bsInit = (cb) => {
  bs.init({
    server: {
      baseDir: "./build"
    }
  })
  cb()
}

bsReload = (cb) => {
  bs.reload()
  cb()
}

runStylus = () => {
  return src("src/stylus/**/*.styl")
    .pipe(stylus())
    .pipe(dest("build/css/"))
}

runStylusAndCompress = () => {
  return src("src/stylus/**/*.styl")
    .pipe(stylus({compress: true}))
    .pipe(dest("build/css/"))
}

runUglyfy = () => {
  return src("src/js/**/*.js")
    .pipe(uglyfy())
    .pipe(dest("build/js/"))
}

runPug = () => {
  return src("src/pug/pages/*.pug")
    .pipe(pug())
    .pipe(dest("build/"))
}

runImages = () => {
  return src("src/assets/images/**/*")
    .pipe(dest("build/assets/images"))
}

runFonts = () => {
  return src("src/assets/fonts/**/*")
    .pipe(dest("build/assets/fonts"))
}

watch("src/**/*", series(
    runStylus,
    runUglyfy,
    runPug,
    runImages,
    runFonts,
    bsReload
  )
)

const build = series(
  runClean,
  parallel(
    runStylus,
    runUglyfy,
    runPug,
    runImages,
    runFonts
  ),
)

exports.build = build

if (process.env.NODE_ENV === "production") {
  exports.build = series(
    runClean,
    parallel(
      runStylusAndCompress,
      runUglyfy,
      runPug,
      runImages,
      runFonts
    )
  )
}

exports.default = series(build, bsInit)
exports.clean = runClean
