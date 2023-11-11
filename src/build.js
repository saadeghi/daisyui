const { execSync } = require("child_process")

execSync("node_modules/.bin/postcss --config src/base src/base/*.css --base src --dir dist")
execSync("cat dist/base/*.css > dist/base.css")
execSync("node_modules/.bin/prejss-cli dist/base.css --format commonjs")
execSync(
  "node_modules/.bin/postcss --config src/utilities/global src/utilities/global/*.css --base src --dir dist"
)
execSync("cat dist/utilities/global/*.css > dist/utilities.css")
execSync("node_modules/.bin/prejss-cli dist/utilities.css --format commonjs")
execSync(
  "node_modules/.bin/postcss --config src/utilities/unstyled src/utilities/unstyled/*.css --base src --dir dist",
  { stdio: [] }
)
execSync("cat dist/utilities/unstyled/*.css > dist/utilities-unstyled.css")
execSync("node_modules/.bin/prejss-cli dist/utilities-unstyled.css --format commonjs")
execSync(
  "node_modules/.bin/postcss --config src/utilities/styled src/utilities/styled/*.css --base src --dir dist",
  { stdio: [] }
)
execSync("cat dist/utilities/styled/*.css > dist/utilities-styled.css")
execSync("node_modules/.bin/prejss-cli dist/utilities-styled.css --format commonjs")
execSync(
  "node_modules/.bin/postcss --config src/components src/components/**/*.css --base src --dir dist"
)
execSync("cat dist/components/unstyled/*.css > dist/unstyled.css")
execSync("cat dist/components/unstyled/*.css dist/components/styled/*.css > dist/styled.css")
execSync("node_modules/.bin/prejss-cli dist/{unstyled,styled}.css --format commonjs")
execSync("node_modules/.bin/postcss src/themes/index.css -o dist/themes.css --config src/themes", {
  stdio: [],
})
if (!process.argv.includes("--skipfullcss")) {
  execSync("node_modules/.bin/postcss src/full/index.css -o dist/full.css --config src/full")
}
