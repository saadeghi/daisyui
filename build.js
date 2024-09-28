import { generatePlugins } from "./functions/generatePlugins.js"
import { generateFull } from "./functions/generateFull.js"
import { generateComponents } from "./functions/generateComponents.js"
import { generateIndex } from "./functions/generateIndex.js"

generatePlugins({ srcDir: "css/components", distDir: "components" })
generateFull('full.css')
generateComponents()
generateIndex('index.css')
