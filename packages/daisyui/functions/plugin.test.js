import { expect, test } from "bun:test"
import { plugin } from "./plugin.js"

test("plugin.withOptions wraps plugin and config functions", () => {
  const optionsFunction = plugin.withOptions(
    (options) => ({ handlerOptions: options }),
    (options) => ({ configOptions: options }),
  )

  expect(optionsFunction.__isOptionsFunction).toBe(true)
  expect(optionsFunction("testOptions")).toEqual({
    handler: { handlerOptions: "testOptions" },
    config: { configOptions: "testOptions" },
  })
})

test("plugin.withOptions uses an empty config when no config function is provided", () => {
  const optionsFunction = plugin.withOptions((options) => ({ handlerOptions: options }))

  expect(optionsFunction("testOptions")).toEqual({
    handler: { handlerOptions: "testOptions" },
    config: {},
  })
})
