import { afterAll, beforeAll, describe, expect, test } from "bun:test"
import { isThemeStyleProperty, validateThemeStructure } from "./themeGeneratorValidation.js"

const originalDocument = globalThis.document

beforeAll(() => {
  globalThis.document = {
    createElement: () => {
      let color = ""
      return {
        style: {
          get color() {
            return color
          },
          set color(value) {
            color = value === "oklch(50% 0.2 120)" ? value : ""
          },
        },
      }
    },
  }
})

afterAll(() => {
  if (originalDocument) globalThis.document = originalDocument
  else delete globalThis.document
})

const validTheme = {
  name: "shared-theme",
  "color-scheme": "light",
  default: false,
  prefersdark: false,
  id: "theme-id",
  type: "custom",
  "--color-primary": "oklch(50% 0.2 120)",
  "--radius-selector": "0.5rem",
  "--size-selector": "0.25rem",
  "--border": "1px",
  "--depth": "1",
  "--noise": "0",
}

describe("theme structure validation", () => {
  test("accepts supported shared theme metadata and tokens", () => {
    expect(validateThemeStructure(validTheme)).toBe(validTheme)
  })

  test.each([
    "background-image",
    "position",
    "inset",
    "z-index",
    "--color-primary-extra",
    "--radius-unknown",
    "--custom",
  ])("rejects unknown property %s", (property) => {
    expect(validateThemeStructure({ ...validTheme, [property]: "url(https://example.com)" })).toBe(
      null,
    )
  })

  test.each([
    ["--color-primary", "url(https://example.com)"],
    ["--depth", "2"],
    ["--noise", "-1"],
    ["default", "false"],
    ["prefersdark", 0],
    ["id", ""],
    ["type", "other"],
  ])("rejects invalid %s values", (property, value) => {
    expect(validateThemeStructure({ ...validTheme, [property]: value })).toBe(null)
  })

  test("rejects arrays", () => {
    expect(validateThemeStructure([])).toBe(null)
  })
})

describe("theme style properties", () => {
  test("allows only supported CSS properties", () => {
    expect(isThemeStyleProperty("color-scheme")).toBe(true)
    expect(isThemeStyleProperty("--color-primary")).toBe(true)
    expect(isThemeStyleProperty("--depth")).toBe(true)
    expect(isThemeStyleProperty("name")).toBe(false)
    expect(isThemeStyleProperty("background-image")).toBe(false)
    expect(isThemeStyleProperty("--custom")).toBe(false)
  })
})
