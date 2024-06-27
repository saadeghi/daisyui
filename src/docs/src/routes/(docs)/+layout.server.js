import { themes } from "$lib/data/themes.js"
import { pages, pagesThatDontNeedSidebar } from "$lib/data/pages.js"

export async function load() {
  return {
    pagesThatDontNeedSidebar,
    pages,
    themes,
  }
}
