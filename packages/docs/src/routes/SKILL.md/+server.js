import { readFile } from "node:fs/promises"

const skillFileUrl = new URL("../../../../../skills/daisyui/SKILL.md", import.meta.url)

export async function GET() {
  const content = await readFile(skillFileUrl, "utf8")

  return new Response(content, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  })
}
