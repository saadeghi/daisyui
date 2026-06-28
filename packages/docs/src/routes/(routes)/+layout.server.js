import themes from "daisyui/functions/themeOrder"
import { load as loadYaml } from "js-yaml"
import navigationYaml from "$lib/data/navigation.yaml?raw"
import { getBlogSidebarPages } from "$lib/data/blogTags.js"

import { version } from "daisyui/package.json"

const navigation = loadYaml(navigationYaml)
const navbar = navigation.navbar ?? []
const sidebar = navigation.sidebar ?? {}
const pagesThatDontNeedSidebar = sidebar.noSidebar ?? []

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

  return {
    pagesThatDontNeedSidebar,
    navbar,
    sidebar: sidebarWithDynamicPages,
    sidebarPages,
    themes,
    daisyuiVersion: version,
  }
}
