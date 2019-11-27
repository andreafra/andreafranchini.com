const { src, dest, series, parallel, watch } = require("gulp")
const stylus = require("gulp-stylus")
const uglyfy = require("gulp-uglyfly")
const pug = require("gulp-pug")
const clean = require("gulp-clean")
const bs = require("browser-sync").create()

runClean = (cb) => {
  return src("build/", {read: false})
    .pipe(clean())
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

runJS = () => {
  return src("src/js/**/*.js")
    //.pipe(uglyfy())
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

runAssets = () => {
  return src(["src/assets/**/*", "!src/assets/images/**/*", "!src/assets/fonts/**/*"])
    .pipe(dest("build/assets"))
}

runDeploy = () => {
  return src(["CNAME"])
    .pipe(dest("build/"))
}

watch("src/**/*", series(
    runStylus,
    runJS,
    runPug,
    runImages,
    runFonts,
    runAssets,
    bsReload
  )
)

const build = series(
  runClean,
  parallel(
    runStylus,
    runJS,
    runPug,
    runImages,
    runFonts,
    runDeploy,
    runAssets
  ),
)

exports.build = build

exports.deploy = series(
  runClean,
  runStylusAndCompress,
  runJS,
  runPug,
  runImages,
  runFonts,
  runDeploy,
  runAssets
)

exports.default = series(build, bsInit)
exports.clean = runClean
