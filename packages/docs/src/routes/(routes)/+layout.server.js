import themes from "daisyui/functions/themeOrder"
import { pages, pagesThatDontNeedSidebar } from "$lib/data/pages.js"

import { version } from "daisyui/package.json"

export async function load() {
  return {
    pagesThatDontNeedSidebar,
    pages,
    themes,
    daisyuiVersion: version,
  }
}
