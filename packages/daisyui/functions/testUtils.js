import { mkdtemp, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"

export const createTempDirTracker = (prefix) => {
  let dirs = []

  return {
    make: async () => {
      const dir = await mkdtemp(join(tmpdir(), prefix))
      dirs.push(dir)
      return dir
    },
    cleanup: async () => {
      await Promise.all(dirs.map((dir) => rm(dir, { recursive: true, force: true })))
      dirs = []
    },
  }
}

export const runInCwd = async (cwd, code) => {
  const proc = Bun.spawn(["bun", "--eval", code], { cwd, stderr: "pipe" })
  const [exitCode, stderr] = await Promise.all([proc.exited, new Response(proc.stderr).text()])

  if (exitCode !== 0) {
    throw new Error(stderr)
  }
}
