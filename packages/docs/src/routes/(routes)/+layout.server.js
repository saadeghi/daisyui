import themes from "daisyui/functions/themeOrder"
import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import { navbar, pagesThatDontNeedSidebar, sidebar } from "$lib/data/pages.js"
import { getBlogSidebarPages } from "$lib/data/blogTags.js"
import { fetchActiveDiscount } from "$lib/storeDiscount.js"

import { version } from "daisyui/package.json"

export async function load() {
  const blogSidebarPages = await getBlogSidebarPages()
  const sidebarWithDynamicPages = {
    ...sidebar,
    blog: blogSidebarPages,
  }
  const getSidebarSectionItems = (section) => section?.[0]?.items ?? section ?? []
  const sidebarPages = Object.entries(sidebarWithDynamicPages)
    .filter(([name]) => name !== "noSidebar")
    .flatMap(([, section]) => getSidebarSectionItems(section))
  let activeDiscount = null

  try {
    activeDiscount = await fetchActiveDiscount(PUBLIC_DAISYUI_API_PATH)
  } catch (error) {
    console.error("Error loading active discount", error)
  }

  return {
    pagesThatDontNeedSidebar,
    navbar,
    sidebar: sidebarWithDynamicPages,
    sidebarPages,
    themes,
    activeDiscount,
    daisyuiVersion: version,
  }
}
