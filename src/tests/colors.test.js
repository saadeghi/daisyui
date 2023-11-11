import { expect, test } from "bun:test"
import * as colorFunctions from "../theming/functions"

test("Foreground color generator function", () => {
  expect(colorFunctions.generateForegroundColorFrom("#fff", 0.8, "oklch")).toBe("0.2 0 0")
  expect(colorFunctions.generateForegroundColorFrom("#000", 0.8, "oklch")).toBe("0.8 0 0")
  expect(colorFunctions.generateForegroundColorFrom("#fff", 1, "oklch")).toBe("0 0 0")
  expect(colorFunctions.generateForegroundColorFrom("#000", 1, "oklch")).toBe("1 0 0")
  expect(colorFunctions.generateForegroundColorFrom("#1D9BF0", 0.8, "oklch")).toBe(
    "0.133411 0.032291 245.539977"
  )
  expect(colorFunctions.generateForegroundColorFrom("#CF212E", 0.8, "oklch")).toBe(
    "0.910234 0.041137 24.396801"
  )
})
