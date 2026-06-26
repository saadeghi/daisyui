import { afterEach, expect, test } from "bun:test"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { pathToFileURL } from "node:url"
import { createTempDirTracker, runInCwd } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-pack-css-")
const moduleUrl = pathToFileURL(join(import.meta.dirname, "packCss.js")).href

afterEach(tempDirs.cleanup)

test("packCss combines themes and CSS directories with layer wrapping and exclusions", async () => {
  const dir = await tempDirs.make()
  for (const directory of ["theme", "base", "components", "utilities", "colors"]) {
    await mkdir(join(dir, directory), { recursive: true })
  }
  await writeFile(join(dir, "theme", "light.css"), ":root{color:white}")
  await writeFile(join(dir, "theme", "dark.css"), ":root{color:black}")
  await writeFile(join(dir, "base", "reset.css"), "*,::before{box-sizing:border-box}")
  await writeFile(join(dir, "components", "button.css"), ".btn{color:red}")
  await writeFile(join(dir, "utilities", "glass.css"), ".glass{opacity:.5}")
  await writeFile(join(dir, "colors", "properties.css"), ".text-primary{color:var(--color-primary)}")
  await writeFile(join(dir, "colors", "skip.css"), ".skip{color:red}")

  await runInCwd(
    dir,
    `const { packCss } = await import(${JSON.stringify(moduleUrl)});
await packCss({ outputFile: "daisyui.css", exclude: { colors: ["skip"] } });`,
  )

  const result = await readFile(join(dir, "daisyui.css"), "utf-8")
  expect(result).toContain("@layer base")
  expect(result).toContain(".btn")
  expect(result).toContain("@layer utilities")
  expect(result).toContain(".text-primary")
  expect(result).not.toContain(".skip")
})
