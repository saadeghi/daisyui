import { expect, test, mock } from "bun:test"
import path from "node:path"
import { createPluginFiles } from "./createPluginFiles"
import { promises as fs } from "fs"

// Mock the fs.writeFile function
const mockWriteFile = mock(async () => {})

fs.writeFile = mockWriteFile

test("createPluginFiles creates object.js and index.js for base type", async () => {
  const type = "base"
  const componentDir = "/path/to/component"
  const jsContent = "{ color: 'red' }"
  const fileName = "component"

  const objectJsPath = path.join(componentDir, "object.js")
  const indexJsPath = path.join(componentDir, "index.js")

  await createPluginFiles(type, componentDir, jsContent, fileName)

  expect(mockWriteFile).toHaveBeenCalledWith(objectJsPath, `export default ${jsContent};`)
  expect(mockWriteFile).toHaveBeenCalledWith(
    indexJsPath,
    `import ${fileName} from './object.js';
import { addPrefix } from '../../functions/addPrefix.js';

export default ({ addBase, prefix = '' }) => {
  const prefixed${fileName} = addPrefix(${fileName}, prefix);
  addBase({ ...prefixed${fileName} });
};
`,
  )
})

test("createPluginFiles creates object.js and index.js for component type", async () => {
  const type = "component"
  const componentDir = "/path/to/component"
  const jsContent = "{ color: 'blue' }"
  const fileName = "component"

  const objectJsPath = path.join(componentDir, "object.js")
  const indexJsPath = path.join(componentDir, "index.js")

  await createPluginFiles(type, componentDir, jsContent, fileName)

  expect(mockWriteFile).toHaveBeenCalledWith(objectJsPath, `export default ${jsContent};`)
  expect(mockWriteFile).toHaveBeenCalledWith(
    indexJsPath,
    `import ${fileName} from './object.js';
import { addPrefix } from '../../functions/addPrefix.js';

export default ({ addComponents, prefix = '' }) => {
  const prefixed${fileName} = addPrefix(${fileName}, prefix);
  addComponents({ ...prefixed${fileName} });
};
`,
  )
})

test("createPluginFiles creates object.js and index.js for utility type", async () => {
  const type = "utility"
  const componentDir = "/path/to/component"
  const jsContent = "{ color: 'green' }"
  const fileName = "component"

  const objectJsPath = path.join(componentDir, "object.js")
  const indexJsPath = path.join(componentDir, "index.js")

  await createPluginFiles(type, componentDir, jsContent, fileName)

  expect(mockWriteFile).toHaveBeenCalledWith(objectJsPath, `export default ${jsContent};`)
  expect(mockWriteFile).toHaveBeenCalledWith(
    indexJsPath,
    `import ${fileName} from './object.js';
import { addPrefix } from '../../functions/addPrefix.js';

export default ({ addUtilities, prefix = '' }) => {
  const prefixed${fileName} = addPrefix(${fileName}, prefix);
  addUtilities({ ...prefixed${fileName} });
};
`,
  )
})

test("createPluginFiles throws error if writeFile fails", async () => {
  const type = "base"
  const componentDir = "/path/to/component"
  const jsContent = "{ color: 'red' }"
  const fileName = "component"

  const mockError = new Error("Mock writeFile error")
  mockWriteFile.mockRejectedValueOnce(mockError)

  await expect(createPluginFiles(type, componentDir, jsContent, fileName)).rejects.toThrow(
    mockError,
  )
})
