import { afterEach, expect, test } from "bun:test"
import { existsSync } from "node:fs"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { generateThemeFiles, wrapContent } from "./generateThemeFiles.js"
import { createTempDirTracker } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-theme-files-")

afterEach(tempDirs.cleanup)

test("wrapContent includes :root for the light theme", () => {
  expect(wrapContent("light", "--color-primary: red;\n"))
    .toBe(`:root,:root:has(input.theme-controller[value=light]:checked),[data-theme="light"] {
--color-primary: red;
}
`)
})

test("wrapContent omits :root for non-light themes", () => {
  expect(wrapContent("dark", "--color-primary: black;\n"))
    .toBe(`:root:has(input.theme-controller[value=dark]:checked),[data-theme="dark"] {
--color-primary: black;
}
`)
})

test("generateThemeFiles wraps each source theme into the destination directory", async () => {
  const srcDir = await tempDirs.make()
  const distDir = await tempDirs.make()
  await mkdir(join(srcDir, "nested"))
  await writeFile(join(srcDir, "light.css"), "--color-primary: red;\n")
  await writeFile(join(srcDir, "dark.css"), "--color-primary: black;\n")
  await writeFile(join(srcDir, "nested", "ignored.css"), "")

  await generateThemeFiles({ srcDir, distDir })

  expect(await readFile(join(distDir, "light.css"), "utf-8")).toContain(":root,")
  expect(await readFile(join(distDir, "dark.css"), "utf-8")).toContain('[data-theme="dark"]')
  expect(existsSync(join(distDir, "ignored.css"))).toBe(false)
})
