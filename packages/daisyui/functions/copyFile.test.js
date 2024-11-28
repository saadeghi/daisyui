import { expect, test, mock } from "bun:test"
import path from "node:path"
import { copyFile } from "./copyFile"
import fs from "fs/promises"

// Mock the fs functions
const mockMkdir = mock(async () => {})
const mockCopyFile = mock(async () => {})

fs.mkdir = mockMkdir
fs.copyFile = mockCopyFile

test("copyFile copies file to destination", async () => {
  const from = "/path/to/source/file.txt"
  const to = "/path/to/destination/file.txt"

  await copyFile(from, to)

  expect(mockMkdir).toHaveBeenCalledWith(path.dirname(to), { recursive: true })
  expect(mockCopyFile).toHaveBeenCalledWith(from, to)
})

test("copyFile copies file to destination with new name", async () => {
  const from = "/path/to/source/file.txt"
  const to = "/path/to/destination/file.txt"
  const newName = "newFileName.txt"

  await copyFile(from, to, newName)

  const expectedDestPath = path.join(path.dirname(to), newName)
  expect(mockMkdir).toHaveBeenCalledWith(path.dirname(to), { recursive: true })
  expect(mockCopyFile).toHaveBeenCalledWith(from, expectedDestPath)
})

test("copyFile throws error if copying fails", async () => {
  const from = "/path/to/source/file.txt"
  const to = "/path/to/destination/file.txt"

  const mockError = new Error("Mock copy error")
  mockCopyFile.mockRejectedValueOnce(mockError)

  await expect(copyFile(from, to)).rejects.toThrow(`Error copying file from ${from} to ${to}:`)
})
