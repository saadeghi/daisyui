import { afterEach, expect, test } from "bun:test"
import { existsSync } from "node:fs"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { generatePlugins } from "./generatePlugins.js"
import { createTempDirTracker } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-generate-plugins-")

afterEach(tempDirs.cleanup)

test("generatePlugins converts CSS files into plugin object and index files", async () => {
  const dir = await tempDirs.make()
  const srcDir = join(dir, "src")
  const distDir = join(dir, "dist")
  await mkdir(srcDir)
  await writeFile(join(srcDir, "button.css"), ".btn-test{color:red}")
  await writeFile(join(srcDir, "skip.css"), ".skip{color:blue}")

  await generatePlugins({ type: "component", srcDir, distDir, exclude: ["skip"] })

  expect(await readFile(join(distDir, "button", "object.js"), "utf-8")).toContain(
    'export default {".btn-test":{"color":"red"}};',
  )
  expect(await readFile(join(distDir, "button", "index.js"), "utf-8")).toContain(
    "addComponents({ ...prefixedbutton });",
  )
  expect(existsSync(join(distDir, "skip"))).toBe(false)
})
