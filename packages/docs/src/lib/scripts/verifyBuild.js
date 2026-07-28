import { existsSync, readdirSync, readFileSync, statSync } from "node:fs"
import { dirname, join, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { parseSearchCsv } from "../searchCsv.js"

const scriptDir = dirname(fileURLToPath(import.meta.url))
export const defaultBuildDir = resolve(scriptDir, "../../../build")

export const requiredBuildFiles = [
  "index.html",
  "404.html",
  "__data.json",
  "docs/install/index.html",
  "components/button/index.html",
  "theme-generator/index.html",
  "store/index.html",
  "skills/index.html",
  "resources/videos/index.html",
  "blog/index.html",
  "sitemap.xml",
  "search.csv",
  "llms.txt",
  "manifest.webmanifest",
]

export const dynamicRouteFamilies = [
  {
    name: "store",
    directory: "store",
    exclude: ["checkout", "pages"],
    excludePattern: /^\d+$/,
    minimum: 12,
    requireInSitemap: true,
    requireInSearch: true,
  },
  { name: "skills", directory: "skills", minimum: 3, requireInSitemap: true },
  { name: "videos", directory: "resources/videos", minimum: 137 },
  {
    name: "comparisons",
    directory: "compare",
    minimum: 100,
    relation: "orderedPairsFromAlternatives",
  },
  { name: "alternatives", directory: "alternative", minimum: 15 },
  { name: "docsSkills", directory: "docs/skill", minimum: 9 },
]

export const defaultMinimums = {
  routes: 766,
  dataFiles: 765,
  searchRows: 1029,
  sitemapUrls: 472,
}

const collectFiles = (directory) => {
  const files = []

  const visit = (currentDirectory) => {
    for (const entry of readdirSync(currentDirectory, { withFileTypes: true })) {
      const filePath = join(currentDirectory, entry.name)
      if (entry.isDirectory()) {
        visit(filePath)
      } else if (entry.isFile()) {
        files.push(filePath)
      }
    }
  }

  visit(directory)
  return files
}

export const countCsvRecords = (content) => {
  let count = 0
  let hasContent = false
  let inQuotes = false

  for (let index = 0; index < content.length; index += 1) {
    const character = content[index]

    if (character === '"') {
      hasContent = true
      if (inQuotes && content[index + 1] === '"') {
        index += 1
      } else {
        inQuotes = !inQuotes
      }
    } else if (character === "\n" && !inQuotes) {
      if (hasContent) count += 1
      hasContent = false
    } else if (character !== "\r") {
      hasContent = true
    }
  }

  if (inQuotes) throw new Error("search.csv contains an unterminated quoted field")
  if (hasContent) count += 1

  return count
}

const getDirectChildRoutes = (buildDir, family) => {
  const familyDir = join(buildDir, family.directory)
  if (!existsSync(familyDir)) return []

  const excludedDirectories = new Set(family.exclude || [])
  return readdirSync(familyDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        !excludedDirectories.has(entry.name) &&
        !family.excludePattern?.test(entry.name) &&
        existsSync(join(familyDir, entry.name, "index.html")),
    )
    .map((entry) => entry.name)
    .sort()
}

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KiB`
  return `${(bytes / 1024 ** 2).toFixed(1)} MiB`
}

export const verifyBuild = ({
  buildDir = defaultBuildDir,
  minimums = defaultMinimums,
  requiredFiles = requiredBuildFiles,
  routeFamilies = dynamicRouteFamilies,
} = {}) => {
  const resolvedBuildDir = resolve(buildDir)
  const errors = []

  if (!existsSync(resolvedBuildDir) || !statSync(resolvedBuildDir).isDirectory()) {
    throw new Error(`Docs build directory does not exist: ${resolvedBuildDir}`)
  }

  for (const requiredFile of requiredFiles) {
    const filePath = join(resolvedBuildDir, requiredFile)
    if (!existsSync(filePath) || !statSync(filePath).isFile() || statSync(filePath).size === 0) {
      errors.push(`required output is missing or empty: ${requiredFile}`)
    }
  }

  if (existsSync(join(resolvedBuildDir, "stats.html"))) {
    errors.push("normal builds must not contain public stats.html")
  }

  const files = collectFiles(resolvedBuildDir)
  const relativeFiles = files.map((filePath) => relative(resolvedBuildDir, filePath))
  const routeCount = relativeFiles.filter(
    (filePath) => filePath === "index.html" || filePath.endsWith("/index.html"),
  ).length
  const dataFileCount = relativeFiles.filter(
    (filePath) => filePath === "__data.json" || filePath.endsWith("/__data.json"),
  ).length

  if (routeCount < minimums.routes) {
    errors.push(`route count ${routeCount} is below minimum ${minimums.routes}`)
  }
  if (dataFileCount < minimums.dataFiles) {
    errors.push(`data-file count ${dataFileCount} is below minimum ${minimums.dataFiles}`)
  }

  const searchPath = join(resolvedBuildDir, "search.csv")
  let searchRows = 0
  let searchEntries = []
  let searchUrls = new Set()
  if (existsSync(searchPath)) {
    const searchContent = readFileSync(searchPath, "utf8")
    try {
      searchEntries = parseSearchCsv(searchContent)
      searchRows = searchEntries.length
      searchUrls = new Set(searchEntries.map((entry) => entry.url))
    } catch (error) {
      errors.push(error.message)
    }
    if (searchRows < minimums.searchRows) {
      errors.push(`search row count ${searchRows} is below minimum ${minimums.searchRows}`)
    }
  }

  for (const entry of searchEntries) {
    if (!entry.url.startsWith("/") || !entry.url.includes("#")) continue

    const target = new URL(entry.url, "https://daisyui.com")
    const id = decodeURIComponent(target.hash.slice(1))
    if (!id) continue

    const routePath = target.pathname.replace(/^\/+|\/+$/g, "")
    const htmlPath = join(resolvedBuildDir, routePath, "index.html")
    const html = existsSync(htmlPath) ? readFileSync(htmlPath, "utf8") : ""
    if (!html.includes(`id="${id}"`) && !html.includes(`id='${id}'`)) {
      errors.push(`search URL points to a missing heading: ${entry.url}`)
    }
  }

  const sitemapPath = join(resolvedBuildDir, "sitemap.xml")
  const sitemapContent = existsSync(sitemapPath) ? readFileSync(sitemapPath, "utf8") : ""
  const sitemapLocations = [...sitemapContent.matchAll(/<loc\b[^>]*>([^<]+)<\/loc>/g)].map(
    (match) => match[1],
  )
  const sitemapUrls = sitemapLocations.length
  const sitemapPaths = new Set(
    sitemapLocations.flatMap((location) => {
      try {
        return [new URL(location).pathname]
      } catch {
        errors.push(`sitemap contains an invalid URL: ${location}`)
        return []
      }
    }),
  )
  if (sitemapUrls < minimums.sitemapUrls) {
    errors.push(`sitemap URL count ${sitemapUrls} is below minimum ${minimums.sitemapUrls}`)
  }

  const routeFamilyEntries = Object.fromEntries(
    routeFamilies.map((family) => [family.name, getDirectChildRoutes(resolvedBuildDir, family)]),
  )
  const routeFamilyCounts = Object.fromEntries(
    Object.entries(routeFamilyEntries).map(([name, entries]) => [name, entries.length]),
  )
  for (const family of routeFamilies) {
    const count = routeFamilyCounts[family.name]
    const minimum = family.minimum ?? 1
    if (count < minimum) {
      errors.push(
        `dynamic route family ${family.name} has ${count} routes; expected at least ${minimum}`,
      )
    }

    for (const entry of routeFamilyEntries[family.name]) {
      const routePath = `/${family.directory}/${entry}/`
      if (family.requireInSitemap && !sitemapPaths.has(routePath)) {
        errors.push(`sitemap is missing dynamic route: ${routePath}`)
      }
      if (family.requireInSearch && !searchUrls.has(routePath)) {
        errors.push(`search index is missing dynamic route: ${routePath}`)
      }
    }
  }

  const comparisonFamily = routeFamilies.find(
    (family) => family.relation === "orderedPairsFromAlternatives",
  )
  if (comparisonFamily && routeFamilyEntries.alternatives) {
    const frameworkCount = routeFamilyEntries.alternatives.length + 1
    const expectedComparisonRoutes = frameworkCount * (frameworkCount - 1)
    const comparisonRoutes = routeFamilyEntries[comparisonFamily.name].length
    if (comparisonRoutes !== expectedComparisonRoutes) {
      errors.push(
        `comparison route count ${comparisonRoutes} does not match ${frameworkCount} frameworks (${expectedComparisonRoutes} ordered pairs)`,
      )
    }

    const expectedCanonicalComparisons = expectedComparisonRoutes / 2
    const sitemapComparisonCount = [...sitemapPaths].filter((pathname) =>
      pathname.startsWith("/compare/"),
    ).length
    if (sitemapComparisonCount !== expectedCanonicalComparisons) {
      errors.push(
        `sitemap comparison count ${sitemapComparisonCount} does not match ${expectedCanonicalComparisons} canonical pairs`,
      )
    }
  }

  const representativeFiles = [
    "index.html",
    "__data.json",
    "docs/install/index.html",
    "docs/install/__data.json",
    "components/button/index.html",
    "components/button/__data.json",
  ]
  const representativeSizes = Object.fromEntries(
    representativeFiles
      .filter((filePath) => existsSync(join(resolvedBuildDir, filePath)))
      .map((filePath) => {
        const bytes = statSync(join(resolvedBuildDir, filePath)).size
        return [filePath, { bytes, display: formatBytes(bytes) }]
      }),
  )
  const totalBytes = files.reduce((total, filePath) => total + statSync(filePath).size, 0)

  const metrics = {
    buildDir: resolvedBuildDir,
    files: files.length,
    totalBytes,
    totalSize: formatBytes(totalBytes),
    routes: routeCount,
    dataFiles: dataFileCount,
    searchRows,
    sitemapUrls,
    dynamicRoutes: routeFamilyCounts,
    representativeSizes,
  }

  if (errors.length) {
    throw new Error(`Docs build verification failed:\n- ${errors.join("\n- ")}`)
  }

  return metrics
}

const isMainModule = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)

if (isMainModule) {
  try {
    const metrics = verifyBuild()
    console.log("Docs build verification passed")
    console.log(JSON.stringify(metrics, null, 2))
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}
