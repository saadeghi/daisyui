import fs from "node:fs"
import path from "node:path"

/**
 * SvelteKit server load function to get all page directories under /pages
 */
export async function load() {
  const pagesDir = path.resolve("src/routes/(routes)/pages")
  const entries = fs.readdirSync(pagesDir, { withFileTypes: true })
  const pages = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({
      href: `/pages/${entry.name}/`,
      label: entry.name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    }))
  return { pages }
}
