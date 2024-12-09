import { expect, test } from "bun:test"
import * as colorFunctions from "../theming/functions"
import { foregroundPairs } from "./data"

// foreach array
for (const pair of foregroundPairs) {
  test(`foreground color for \t${pair.input} \tis oklch(${pair.result})`, () => {
    expect(colorFunctions.generateForegroundColorFrom(pair.input, pair.percent)).toBe(pair.result)
  })
}
