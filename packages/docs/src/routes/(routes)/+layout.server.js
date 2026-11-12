import themes from "daisyui/functions/themeOrder"
import { load as loadYaml } from "js-yaml"
import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import navigationYaml from "$lib/data/navigation.yaml?raw"
import { getBlogSidebarPages } from "$lib/data/blogTags.js"
import { createBuildMemo } from "$lib/server/content/fetchYaml.js"

import { version } from "daisyui/package.json"

const navigation = loadYaml(navigationYaml)
const navbar = navigation.navbar ?? []
const sidebar = navigation.sidebar ?? {}
const pagesThatDontNeedSidebar = sidebar.noSidebar ?? []

const getStargazersCount = createBuildMemo(async () => {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/stats.json`, {
        signal: AbortSignal.timeout(10_000),
      })

      if (!response.ok) continue

      const stats = await response.json()
      const stargazersCount = Number(stats?.stargazers_count)

      if (Number.isFinite(stargazersCount)) return stargazersCount
    } catch {
      // Retry once before treating this optional metric as unavailable.
    }
  }

  return null
})

const getBlogSidebarPagesForBuild = createBuildMemo(getBlogSidebarPages)

const getSpecialDiscountForBuild = createBuildMemo(async () => {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/api/discount_special.json`, {
      signal: AbortSignal.timeout(10_000),
    })
    if (!response.ok) return null

    const discount = await response.json()
    const expiresAt = new Date(discount?.data?.attributes?.expires_at).getTime()
    return expiresAt > Date.now() ? discount : null
  } catch {
    return null
  }
})

export async function load() {
  const [blogSidebarPages, stargazersCount, specialDiscount] = await Promise.all([
    getBlogSidebarPagesForBuild(),
    getStargazersCount(),
    getSpecialDiscountForBuild(),
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
    specialDiscount,
  }
}
