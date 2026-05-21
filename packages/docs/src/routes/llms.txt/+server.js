import { readFile } from "node:fs/promises"

const skillFileUrl = new URL("../../../../../skills/daisyui/SKILL.md", import.meta.url)
const sourceUrl = "https://daisyui.com/llms.txt"

function parseFrontmatter(content) {
  if (!content.startsWith("---\n")) {
    return null
  }

  const end = content.indexOf("\n---\n", 4)
  if (end === -1) {
    return null
  }

  return {
    frontmatter: content.slice(4, end),
    body: content.slice(end + 5),
  }
}

function replaceSourceLine(line) {
  if (!line.trimStart().startsWith("source:")) {
    return line
  }

  const indent = line.match(/^\s*/)?.[0] ?? ""
  return `${indent}source: ${sourceUrl}`
}

function ensureLine(lines, predicate, entry) {
  return lines.some(predicate) ? lines : [...lines, entry]
}

function transformFrontmatterLines(lines) {
  const withSource = lines.map(replaceSourceLine)
  const withAlwaysApply = ensureLine(
    withSource,
    (line) => line.startsWith("alwaysApply:"),
    "alwaysApply: true",
  )

  return ensureLine(withAlwaysApply, (line) => line.startsWith("applyTo:"), 'applyTo: "**"')
}

function serializeFrontmatter(lines, body) {
  return `---\n${lines.join("\n")}\n---\n${body}`
}

function withRuntimeFrontmatter(content) {
  const parsed = parseFrontmatter(content)
  if (!parsed) {
    return content
  }

  const transformedLines = transformFrontmatterLines(parsed.frontmatter.split("\n"))
  return serializeFrontmatter(transformedLines, parsed.body)
}

export async function GET() {
  const content = await readFile(skillFileUrl, "utf8")
  const servedContent = withRuntimeFrontmatter(content)

  return new Response(servedContent, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  })
}
