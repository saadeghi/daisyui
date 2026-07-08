import themes from "daisyui/functions/themeOrder"
import { load as loadYaml } from "js-yaml"
import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import navigationYaml from "$lib/data/navigation.yaml?raw"
import { getBlogSidebarPages } from "$lib/data/blogTags.js"

import { version } from "daisyui/package.json"

const navigation = loadYaml(navigationYaml)
const navbar = navigation.navbar ?? []
const sidebar = navigation.sidebar ?? {}
const pagesThatDontNeedSidebar = sidebar.noSidebar ?? []

const getStargazersCount = async () => {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/stats.json`)

    if (!response.ok) {
      return null
    }

    const stats = await response.json()
    const stargazersCount = Number(stats?.stargazers_count)

    return Number.isFinite(stargazersCount) ? stargazersCount : null
  } catch {
    return null
  }
}

export async function load() {
  const [blogSidebarPages, stargazersCount] = await Promise.all([
    getBlogSidebarPages(),
    getStargazersCount(),
  ])
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
    stargazersCount,
  }
}
