import { afterEach, expect, test } from "bun:test"
import { writeFile } from "node:fs/promises"
import { join } from "node:path"
import { cssToJs } from "./cssToJs.js"
import { createTempDirTracker } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-css-to-js-")

afterEach(tempDirs.cleanup)

test("cssToJs compiles CSS and returns a kebab-case JS object string", async () => {
  const dir = await tempDirs.make()
  const file = join(dir, "style.css")
  await writeFile(file, ".btn-test{background-color:red;--custom-var:var(--another-var)}")

  const result = JSON.parse(await cssToJs(file))

  expect(result[".btn-test"]).toEqual({
    "background-color": "red",
    "--custom-var": "var(--another-var)",
  })
})

test("cssToJs wraps read and parse errors with file context", async () => {
  await expect(cssToJs(join(await tempDirs.make(), "missing.css"))).rejects.toThrow(
    "Error converting CSS to JS:",
  )
})
