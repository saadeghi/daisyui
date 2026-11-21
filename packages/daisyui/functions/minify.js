import fs from "fs"
import path from "path"
import { Features, transform } from "lightningcss"

// Below this floor LightningCSS rewrites nesting and `:has()` selectors,
// which changes specificity and adds ~25% to the bundle.
export const targets = {
  chrome: 120 << 16,
  edge: 120 << 16,
  firefox: 121 << 16,
  safari: (17 << 16) | (2 << 8),
}

// daisyUI never uses `light-dark()`, so LightningCSS's polyfill variables are dead weight.
const exclude = Features.LightDark

export const minify = async (filePath) => {
  if (!fs.existsSync(filePath)) {
    return
  }
  const css = await fs.promises.readFile(filePath, "utf8")
  try {
    const { code, warnings } = transform({
      filename: filePath,
      code: Buffer.from(css),
      minify: true,
      targets,
      exclude,
    })
    for (const warning of warnings) {
      console.warn(`${filePath}:${warning.loc?.line ?? 0}: ${warning.message}`)
    }
    const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"))
    const modifiedCode =
      `${atob("Lyoh")} ${decodeURIComponent("%F0%9F%8C%BC")} ${atob("ZGFpc3lVSQ==")} ${packageJson.version} ${atob("LSBNSVQgTGljZW5zZSAqLw==")} ` +
      code
    await fs.promises.writeFile(filePath, modifiedCode)
  } catch (error) {
    throw new Error(`${filePath}:${error?.loc?.line}: ${error.message}`)
  }
}

export const minifyCssInDirectory = async (directories) => {
  await Promise.all(
    directories.map(async (dir) => {
      const directory = path.join(dir)
      const files = fs
        .readdirSync(directory)
        .filter((file) => path.extname(file).toLowerCase() === ".css")
        .map((file) => path.join(directory, file))

      await Promise.all(files.map(minify))
    }),
  )
}
