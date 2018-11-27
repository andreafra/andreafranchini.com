const { src, dest, series, parallel, watch } = require("gulp")
const stylus = require("gulp-stylus")
const uglyfy = require("gulp-uglyfly")
const pug = require("gulp-pug")
const clean = require("gulp-clean-dest")
const bs = require("browser-sync").create()

runClean = (cb) => {
  clean("build")
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
  return src("src/pug/**/*.pug")
    .pipe(pug())
    .pipe(dest("build/"))
}

runImages = () => {
  return src("src/assets/**/*")
    .pipe(dest("build/assets/"))
}

watch("src/**/*", series(
    parallel(
      runStylus,
      runUglyfy,
      runPug,
      runImages
    )
  ),
  bsReload
)

build = (cb) => {
  parallel(
    runStylus,
    runUglyfy,
    runPug,
    runImages
  )
  cb()
}

if (process.env.NODE_ENV === "production") {
  exports.build = series(
    runClean,
    parallel(
      runStylusAndCompress,
      runUglyfy,
      runPug,
      runImages
    )
  )
} else {
  exports.build = build
}

exports.default = series(bsInit, build)
