import { spawn } from "node:child_process"
import { watch } from "node:fs"
import { relative, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = fileURLToPath(new URL(".", import.meta.url))
const daisyuiSourceRoot = resolve(projectRoot, "../daisyui/src")
const buildScript = resolve(projectRoot, "build-daisyui.js")
const viteScript = resolve(projectRoot, "node_modules/vite/bin/vite.js")
const viteArguments = process.argv.slice(2)
const pendingFiles = new Set()

let debounceTimer
let processing = false
let shuttingDown = false
let viteProcess

function startVite(open = false) {
  const child = spawn(
    process.execPath,
    [viteScript, ...(open ? ["--open"] : []), ...viteArguments],
    {
      cwd: projectRoot,
      stdio: "inherit",
    },
  )

  viteProcess = child
  child.once("exit", (code) => {
    if (viteProcess === child) {
      viteProcess = undefined
    }

    if (!child.killed && !shuttingDown) {
      process.exit(code ?? 1)
    }
  })
}

function stopVite() {
  if (!viteProcess) return Promise.resolve()

  const child = viteProcess

  return new Promise((resolveStop) => {
    const done = () => {
      clearTimeout(fallback)
      resolveStop()
    }
    const fallback = setTimeout(resolveStop, 250)

    child.once("exit", done)
    child.once("error", done)
    child.kill("SIGKILL")
  })
}

function buildSource(file) {
  return new Promise((resolveBuild, rejectBuild) => {
    const child = spawn(process.execPath, [buildScript, file], {
      cwd: projectRoot,
      stdio: "inherit",
    })

    child.once("error", rejectBuild)
    child.once("exit", (code) => {
      if (code === 0) {
        resolveBuild()
      } else {
        rejectBuild(new Error(`daisyUI source build exited with code ${code}`))
      }
    })
  })
}

async function refresh() {
  if (processing || pendingFiles.size === 0) return
  processing = true

  try {
    while (pendingFiles.size > 0) {
      const files = [...pendingFiles]
      pendingFiles.clear()
      await Promise.all(files.map(buildSource))
    }

    // Tailwind caches daisyUI's generated modules, so CSS edits need a fresh Vite process.
    await stopVite()
    if (!shuttingDown) {
      startVite()
    }
  } catch (error) {
    console.error(error.message)
  } finally {
    processing = false
    if (pendingFiles.size > 0) {
      debounceTimer = setTimeout(refresh, 100)
    }
  }
}

const sourceWatcher = watch(daisyuiSourceRoot, { recursive: true }, (_event, changedFile) => {
  if (!changedFile) return

  const file = resolve(daisyuiSourceRoot, changedFile.toString())
  if (!file.endsWith(".css") || relative(daisyuiSourceRoot, file).split(sep)[0] === "..") {
    return
  }

  pendingFiles.add(file)
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(refresh, 100)
})

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.once(signal, () => {
    shuttingDown = true
    clearTimeout(debounceTimer)
    sourceWatcher.close()

    if (viteProcess) {
      viteProcess.kill(signal)
    }
  })
}

startVite(true)
