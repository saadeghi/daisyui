import themes from "duskmoonui/functions/themeOrder"
import { pages, pagesThatDontNeedSidebar } from "$lib/data/pages.js"

import { version } from "duskmoonui/package.json"

export async function load() {
  return {
    pagesThatDontNeedSidebar,
    pages,
    themes,
    duskmoonuiVersion: version,
  }
}
