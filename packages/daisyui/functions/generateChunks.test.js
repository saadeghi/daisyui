import { expect, test, mock } from "bun:test"
import fs from "fs/promises"
import { generateChunks } from "./generateChunks"

// Mock the fs functions
const mockWriteFile = mock(async () => {})

fs.writeFile = mockWriteFile

// Mock the getFileNames function
const mockGetFileNames = mock(async (dir) => {
  if (dir === "./theme") {
    return ["light", "dark", "custom"]
  } else if (dir === "./base") {
    return ["base1", "base2"]
  } else if (dir === "./components") {
    return ["component1", "component2"]
  } else if (dir === "./utilities") {
    return ["utility1", "utility2"]
  } else if (dir === "./colors") {
    return ["color1", "color2"]
  }
  return []
})

mock.module("./getFileNames", () => ({
  getFileNames: mockGetFileNames,
}))

test("generateChunks generates correct CSS imports", async () => {
  const filename = "output.css"
  await generateChunks(filename)

  const expectedContent =
    [
      "@import url(theme/light.css);",
      "@import url(theme/dark.css);",
      "@import url(base/base1.css);",
      "@import url(base/base2.css);",
      "@import url(components/component1.css);",
      "@import url(components/component2.css);",
      "@import url(utilities/utility1.css);",
      "@import url(utilities/utility2.css);",
      "@import url(colors/color1.css);",
      "@import url(colors/color2.css);",
    ].join("\n") + "\n"

  expect(mockGetFileNames).toHaveBeenCalledWith("./theme", ".css", false)
  expect(mockGetFileNames).toHaveBeenCalledWith("./base", ".css", false)
  expect(mockGetFileNames).toHaveBeenCalledWith("./components", ".css", false)
  expect(mockGetFileNames).toHaveBeenCalledWith("./utilities", ".css", false)
  expect(mockGetFileNames).toHaveBeenCalledWith("./colors", ".css", false)
  expect(mockWriteFile).toHaveBeenCalledWith(`./${filename}`, expectedContent, "utf8")
})

test("generateChunks throws error if writing to file fails", async () => {
  const filename = "output.css"

  mockWriteFile.mockRejectedValueOnce(new Error("Write error"))

  await expect(generateChunks(filename)).rejects.toThrow("Failed to generate full CSS: Write error")
})
