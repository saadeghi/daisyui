import fs from "node:fs"
import path from "node:path"
import { getMarketingCluster, marketingPages } from "$lib/data/marketingPages.js"

function getPageLabel(pageFile, slug) {
  const content = fs.readFileSync(pageFile, "utf8")
  const title = content.match(/^title:\s*(.+)$/m)?.[1]?.trim()

  return title?.replace(/^(["'])(.*)\1$/, "$2") || slug.replace(/-/g, " ")
}

export function load({ url }) {
  const cluster = getMarketingCluster(url.pathname)

  if (!cluster) return { pages: [], marketingPrimaryAction: null, marketingHubLink: null }

  const pathname = url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`
  const currentPage = marketingPages.find((entry) => entry.path === pathname)
  const hubPath = `/${cluster.slug}/`

  const clusterDir = path.resolve("src/routes/(routes)/(marketing)/(groups)", cluster.slug)
  const pages = fs
    .readdirSync(clusterDir, { withFileTypes: true })
    .filter((entry) => {
      if (!entry.isDirectory()) return false
      return fs.existsSync(path.join(clusterDir, entry.name, "+page.md"))
    })
    .map((entry) => ({
      href: `/${cluster.slug}/${entry.name}/`,
      label: getPageLabel(path.join(clusterDir, entry.name, "+page.md"), entry.name),
    }))
    .sort((a, b) => a.label.localeCompare(b.label))

  return {
    pageGroupLabel: cluster.label,
    pages,
    marketingPrimaryAction: currentPage?.primaryAction ?? null,
    marketingHubLink:
      cluster.showHubLink && currentPage && pathname !== hubPath
        ? { href: hubPath, label: cluster.label }
        : null,
  }
}
