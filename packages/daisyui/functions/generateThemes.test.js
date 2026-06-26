import { afterEach, expect, test } from "bun:test"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { pathToFileURL } from "node:url"
import { createTempDirTracker, runInCwd } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-generate-themes-")
const moduleUrl = pathToFileURL(join(import.meta.dirname, "generateThemes.js")).href

afterEach(tempDirs.cleanup)

test("generateThemes combines theme files in themeOrder order", async () => {
  const dir = await tempDirs.make()
  await mkdir(join(dir, "theme"))
  await writeFile(join(dir, "theme", "dark.css"), "dark-theme")
  await writeFile(join(dir, "theme", "light.css"), "light-theme")
  await writeFile(join(dir, "theme", "cupcake.css"), "cupcake-theme")

  await runInCwd(
    dir,
    `const { generateThemes } = await import(${JSON.stringify(moduleUrl)});
await generateThemes("themes.css");`,
  )

  expect(await readFile(join(dir, "themes.css"), "utf-8")).toBe(
    "light-theme\ndark-theme\ncupcake-theme",
  )
})
