import { expect, test, mock } from "bun:test"
import path from "node:path"
import fs from "fs/promises"
import { extractClasses } from "./extractClasses"

// Mock the fs functions
const mockReadFile = mock(async (filePath) => {
  if (filePath.endsWith("file1.css")) {
    return ".class1 { color: red; } .class2, .class3 { color: blue; }"
  } else if (filePath.endsWith("file2.css")) {
    return ".class4 { color: green; } .class5:hover { color: yellow; }"
  }
  throw new Error("File not found")
})

const mockReaddir = mock(async (dirPath) => {
  if (dirPath.endsWith("styles")) {
    return ["file1.css", "file2.css"]
  }
  throw new Error("Directory not found")
})

const mockMkdir = mock(async () => {})
const mockWriteFile = mock(async () => {})

fs.readFile = mockReadFile
fs.readdir = mockReaddir
fs.mkdir = mockMkdir
fs.writeFile = mockWriteFile

test("extractClasses processes CSS files and extracts class names", async () => {
  const srcDir = "styles"
  const totalClassNames = await extractClasses({ srcDir })

  expect(mockReaddir).toHaveBeenCalledWith(path.join(import.meta.dirname, "..", "src", srcDir))
  expect(mockReadFile).toHaveBeenCalledWith(
    path.join(import.meta.dirname, "..", "src", srcDir, "file1.css"),
    "utf8",
  )
  expect(mockReadFile).toHaveBeenCalledWith(
    path.join(import.meta.dirname, "..", "src", srcDir, "file2.css"),
    "utf8",
  )
  expect(mockMkdir).toHaveBeenCalledWith(path.join(import.meta.dirname, "..", srcDir, "file1"), {
    recursive: true,
  })
  expect(mockMkdir).toHaveBeenCalledWith(path.join(import.meta.dirname, "..", srcDir, "file2"), {
    recursive: true,
  })
  expect(mockWriteFile).toHaveBeenCalledWith(
    path.join(import.meta.dirname, "..", srcDir, "file1", "class.json"),
    JSON.stringify(["class1", "class2", "class3"], null, 2),
  )
  expect(mockWriteFile).toHaveBeenCalledWith(
    path.join(import.meta.dirname, "..", srcDir, "file2", "class.json"),
    JSON.stringify(["class4", "class5"], null, 2),
  )
  expect(totalClassNames).toBe(5)
})

test("extractClasses throws error if no CSS files are found", async () => {
  const srcDir = "emptyStyles"

  mockReaddir.mockResolvedValueOnce([])

  await expect(extractClasses({ srcDir })).rejects.toThrow(
    "No CSS files found in the specified directory",
  )
})

test("extractClasses throws error if reading CSS file fails", async () => {
  const srcDir = "styles"

  mockReadFile.mockRejectedValueOnce(new Error("File not found"))

  await expect(extractClasses({ srcDir })).rejects.toThrow("Error processing file")
})

test("extractClasses throws error if reading directory fails", async () => {
  const srcDir = "invalidDir"

  mockReaddir.mockRejectedValueOnce(new Error("Directory not found"))

  await expect(extractClasses({ srcDir })).rejects.toThrow(
    "Error extracting classes: Directory not found",
  )
})
