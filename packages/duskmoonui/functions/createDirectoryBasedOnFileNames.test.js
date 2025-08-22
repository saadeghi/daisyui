import { expect, test, mock } from "bun:test"
import path from "node:path"
import { createDirectoryBasedOnFileNames } from "./createDirectoryBasedOnFileNames"
import { promises as fs } from "node:fs"

// Mock the fs.mkdir function
const mockMkdir = mock(async () => {})

fs.mkdir = mockMkdir

test("createDirectoryBasedOnFileNames creates directory based on file name", async () => {
  const fileName = "/path/to/source/component.js"
  const fileExtension = ".js"
  const distDir = "/path/to/destination"

  const expectedComponentName = "component"
  const expectedComponentDir = path.join(distDir, expectedComponentName)

  const result = await createDirectoryBasedOnFileNames(fileName, fileExtension, distDir)

  expect(mockMkdir).toHaveBeenCalledWith(expectedComponentDir, { recursive: true })
  expect(result).toBe(expectedComponentDir)
})

test("createDirectoryBasedOnFileNames creates directory with different extension", async () => {
  const fileName = "/path/to/source/component.tsx"
  const fileExtension = ".tsx"
  const distDir = "/path/to/destination"

  const expectedComponentName = "component"
  const expectedComponentDir = path.join(distDir, expectedComponentName)

  const result = await createDirectoryBasedOnFileNames(fileName, fileExtension, distDir)

  expect(mockMkdir).toHaveBeenCalledWith(expectedComponentDir, { recursive: true })
  expect(result).toBe(expectedComponentDir)
})

test("createDirectoryBasedOnFileNames handles nested directories", async () => {
  const fileName = "/path/to/source/nested/component.js"
  const fileExtension = ".js"
  const distDir = "/path/to/destination"

  const expectedComponentName = "component"
  const expectedComponentDir = path.join(distDir, expectedComponentName)

  const result = await createDirectoryBasedOnFileNames(fileName, fileExtension, distDir)

  expect(mockMkdir).toHaveBeenCalledWith(expectedComponentDir, { recursive: true })
  expect(result).toBe(expectedComponentDir)
})

test("createDirectoryBasedOnFileNames throws error if mkdir fails", async () => {
  const fileName = "/path/to/source/component.js"
  const fileExtension = ".js"
  const distDir = "/path/to/destination"

  const mockError = new Error("Mock mkdir error")
  mockMkdir.mockRejectedValueOnce(mockError)

  await expect(createDirectoryBasedOnFileNames(fileName, fileExtension, distDir)).rejects.toThrow(
    mockError,
  )
})
