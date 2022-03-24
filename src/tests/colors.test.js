import { expect, test } from 'vitest'
import * as colorFunctions from '../colors/functions'

import { colorToHslValue } from "./utils"


test('Foreground color generator function', () => {
  expect(colorFunctions.generateForegorundColorFrom("#fff")).toBe(colorToHslValue("#333"))
  expect(colorFunctions.generateForegorundColorFrom("#000")).toBe(colorToHslValue("#ccc"))
  expect(colorFunctions.generateForegorundColorFrom("#fff", 1)).toBe(colorToHslValue("#000"))
  expect(colorFunctions.generateForegorundColorFrom("#000", 1)).toBe(colorToHslValue("#fff"))
  expect(colorFunctions.generateForegorundColorFrom("#1D9BF0")).toBe(colorToHslValue("#d2edff"))
  expect(colorFunctions.generateForegorundColorFrom("#CF212E")).toBe(colorToHslValue("#ffc7cb"))
})
