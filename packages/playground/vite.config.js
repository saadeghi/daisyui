import tailwindcss from "@tailwindcss/vite"
import { readFileSync, readdirSync } from "node:fs"
import { dirname, relative, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"

const projectRoot = fileURLToPath(new URL(".", import.meta.url))
const pagesRoot = resolve(projectRoot, "src/pages")
const componentsRoot = resolve(projectRoot, "src/components")

const pages = readdirSync(pagesRoot, { recursive: true })
  .filter((file) => file === "index.html" || file.endsWith(`${sep}index.html`))
  .map((file) => {
    const directory = dirname(file)
    const route = directory === "." ? "/" : `/${directory.split(sep).join("/")}/`

    return {
      file: resolve(pagesRoot, file),
      name: route === "/" ? "index" : directory.split(sep).join("-"),
      route,
    }
  })
  .sort((a, b) => a.route.localeCompare(b.route, "en", { sensitivity: "base" }))

const pageLinks = pages
  .filter(({ route }) => route !== "/")
  .map(({ route }) => {
    const label = route.slice(0, -1)
    return `        <li><a class="font-mono" href=".${route}">${label}</a></li>`
  })
  .join("\n")

function staticHtml() {
  return {
    name: "static-html",
    enforce: "pre",
    buildStart() {
      for (const file of readdirSync(componentsRoot)) {
        if (file.endsWith(".html")) {
          this.addWatchFile(resolve(componentsRoot, file))
        }
      }
    },
    handleHotUpdate({ file, server }) {
      if (relative(componentsRoot, file).split(sep)[0] !== "..") {
        server.ws.send({ type: "full-reload" })
        return []
      }
    },
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        return html
          .replace(/<!--\s*@include\s+([^\s]+)\s*-->/g, (_, file) =>
            readFileSync(resolve(projectRoot, file), "utf8"),
          )
          .replace("<!-- @pages -->", pageLinks)
      },
    },
  }
}

export default defineConfig({
  root: pagesRoot,
  base: "./",
  publicDir: resolve(projectRoot, "public"),
  plugins: [staticHtml(), tailwindcss()],
  build: {
    outDir: resolve(projectRoot, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(pages.map(({ file, name }) => [name, file])),
    },
  },
})
