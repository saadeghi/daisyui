import { expect, test } from "bun:test"
import breakpoints from "./breakpoints.js"
import themeOrder from "./themeOrder.js"
import variables from "./variables.js"

test("breakpoint aliases stay in Tailwind order", () => {
  expect(Object.entries(breakpoints)).toEqual([
    ["sm", "640px"],
    ["md", "768px"],
    ["lg", "1024px"],
    ["xl", "1280px"],
    ["2xl", "1536px"],
  ])
})

test("themeOrder starts with automatic defaults and contains each theme once", () => {
  expect(themeOrder.slice(0, 2)).toEqual(["light", "dark"])
  expect(new Set(themeOrder).size).toBe(themeOrder.length)
  expect(themeOrder).toContain("silk")
})

test("variables exposes the public token groups used by generated plugins", () => {
  expect(Object.keys(variables)).toEqual(["colors", "borderRadius"])
  expect(variables.colors.primary).toBe("var(--color-primary)")
  expect(variables.colors["base-content"]).toBe("var(--color-base-content)")
  expect(variables.borderRadius).toEqual({
    selector: "var(--radius-selector)",
    field: "var(--radius-field)",
    box: "var(--radius-box)",
  })
})
