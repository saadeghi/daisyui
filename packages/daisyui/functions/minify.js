import fs from "fs"
import path from "path"
import { transform } from "lightningcss"

export const minify = async (filePath) => {
  if (!fs.existsSync(filePath)) {
    return
  }
  const css = await fs.promises.readFile(filePath, "utf8")
  try {
    const { code } = transform({
      filename: filePath,
      code: Buffer.from(css),
      minify: true,
    })
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
