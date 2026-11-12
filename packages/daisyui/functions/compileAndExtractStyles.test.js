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

test("keeps @layer daisyui nested inside selectors instead of hoisting it on @apply", async () => {
  const { defaultTheme, theme } = await loadThemes()

  const result = await compileAndExtractStyles(
    ".foo { @layer daisyui.l1.l2 { @apply flex; &.bar { color: red; } } }",
    defaultTheme,
    theme,
  )

  // Tailwind 4.3.x otherwise hoists `@layer` above `.foo` and flattens `&.bar`
  // into `.foo.bar`, which later makes `addComponents` emit duplicate rules.
  expect(result.indexOf(".foo")).toBeLessThan(result.indexOf("@layer daisyui.l1.l2"))
  expect(result).toContain("&.bar")
  expect(result).toContain("display: flex;")
})
