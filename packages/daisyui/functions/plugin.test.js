import { expect, test } from "bun:test"
import { plugin } from "./plugin"

// Mock plugin function and config function
const mockPluginFunction = (options) => `handler with ${options}`
const mockConfigFunction = (options) => `config with ${options}`

test("plugin.withOptions should return a function with handler and config properties", () => {
  const options = "testOptions"
  const optionsFunction = plugin.withOptions(mockPluginFunction, mockConfigFunction)

  // Check if the returned function has the __isOptionsFunction property
  expect(optionsFunction.__isOptionsFunction).toBe(true)

  // Call the options function with test options
  const result = optionsFunction(options)

  // Check if the handler and config properties are correctly set
  expect(result.handler).toBe(`handler with ${options}`)
  expect(result.config).toBe(`config with ${options}`)
})

test("plugin.withOptions should use default config function if not provided", () => {
  const options = "testOptions"
  const optionsFunction = plugin.withOptions(mockPluginFunction)

  // Check if the returned function has the __isOptionsFunction property
  expect(optionsFunction.__isOptionsFunction).toBe(true)

  // Call the options function with test options
  const result = optionsFunction(options)

  // Check if the handler is correctly set
  expect(result.handler).toBe(`handler with ${options}`)
  // Check if the config is an empty object (default config function)
  expect(result.config).toEqual({})
})

test("plugin.withOptions should handle no options", () => {
  const optionsFunction = plugin.withOptions(mockPluginFunction, mockConfigFunction)

  // Call the options function with no options
  const result = optionsFunction()

  // Check if the handler and config properties are correctly set
  expect(result.handler).toBe(`handler with undefined`)
  expect(result.config).toBe(`config with undefined`)
})

test("plugin.withOptions should handle null options", () => {
  const optionsFunction = plugin.withOptions(mockPluginFunction, mockConfigFunction)

  // Call the options function with null options
  const result = optionsFunction(null)

  // Check if the handler and config properties are correctly set
  expect(result.handler).toBe(`handler with null`)
  expect(result.config).toBe(`config with null`)
})
