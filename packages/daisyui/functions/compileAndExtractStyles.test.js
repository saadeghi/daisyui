import { expect, test } from "bun:test"
import { compileAndExtractStyles, loadThemes } from "./compileAndExtractStyles.js"

test("compileAndExtractStyles compiles with loaded themes and returns only wrapper styles", async () => {
  const { defaultTheme, theme } = await loadThemes()

  const result = await compileAndExtractStyles(".btn-test{color:red}", defaultTheme, theme)

  expect(defaultTheme).toContain("@theme")
  expect(theme).toContain("--color-primary")
  expect(result).toContain(".btn-test")
  expect(result).toContain("color: red;")
  expect(result).not.toContain("@layer wrapperStart")
  expect(result).not.toContain("@layer wrapperEnd")
})
