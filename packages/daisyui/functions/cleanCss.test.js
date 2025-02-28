import { expect, test } from "bun:test"
import { cleanCss } from "./cleanCss"

test("removes empty fallbacks", () => {
  const input = "color: var(--primary-color, );"
  const output = "color: var(--primary-color);"
  expect(cleanCss(input)).toBe(output)
})

test("removes spacing variable with fallback", () => {
  const input = "margin: var(--spacing-large, 10px);"
  const output = "margin: 10px;"
  expect(cleanCss(input)).toBe(output)
})

test("removes width variable with fallback", () => {
  const input = "width: var(--width-large, 100%);"
  const output = "width: 100%;"
  expect(cleanCss(input)).toBe(output)
})

test("keeps var() with no fallback", () => {
  const input = "color: var(--primary-color);"
  const output = "color: var(--primary-color);"
  expect(cleanCss(input)).toBe(output)
})

test("keeps var() with non-spacing/width fallback", () => {
  const input = "color: var(--primary-color, red);"
  const output = "color: var(--primary-color, red);"
  expect(cleanCss(input)).toBe(output)
})

test("handles multiple var() in a single line", () => {
  const input = "margin: var(--spacing-large, 10px); width: var(--width-large, 100%);"
  const output = "margin: 10px; width: 100%;"
  expect(cleanCss(input)).toBe(output)
})

test("handles var() with complex fallback values", () => {
  const input = "margin: var(--spacing-large, calc(10px + 5%));"
  const output = "margin: calc(10px + 5%);"
  expect(cleanCss(input)).toBe(output)
})

test("does not remove var() with empty fallback if not spacing or width", () => {
  const input = "color: var(--primary-color, );"
  const output = "color: var(--primary-color);"
  expect(cleanCss(input)).toBe(output)
})

test("does not remove var() with fallback if not spacing or width", () => {
  const input = "color: var(--primary-color, red);"
  const output = "color: var(--primary-color, red);"
  expect(cleanCss(input)).toBe(output)
})
