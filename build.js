import { generateColors } from "./functions/generateColors.js"
import { generatePlugins } from "./functions/generatePlugins.js"
import { generateComponents } from "./functions/generateComponents.js"
import { generateIndex } from "./functions/generateIndex.js"
import { generateFull } from "./functions/generateFull.js"

generateColors('colors.css')
generatePlugins({ srcDir: "css/components", distDir: "components" })
generateComponents()
generateIndex('index.css')
generateFull('full.css')
