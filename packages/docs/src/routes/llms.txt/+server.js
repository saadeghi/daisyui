const skillModules = import.meta.glob(
  [
    "../../../../../skills/daisyui/SKILL.md",
    "../../../../../skills/daisyui/install/SKILL.md",
    "../../../../../skills/daisyui/usage/SKILL.md",
    "../../../../../skills/daisyui/config/SKILL.md",
    "../../../../../skills/daisyui/colors/SKILL.md",
    "../../../../../skills/daisyui/components/*.md",
  ],
  {
    eager: true,
    query: "?raw",
    import: "default",
  },
)

const orderedSkillFiles = [
  "../../../../../skills/daisyui/SKILL.md",
  "../../../../../skills/daisyui/install/SKILL.md",
  "../../../../../skills/daisyui/usage/SKILL.md",
  "../../../../../skills/daisyui/config/SKILL.md",
  "../../../../../skills/daisyui/colors/SKILL.md",
  ...Object.keys(skillModules)
    .filter((path) => path.startsWith("../../../../../skills/daisyui/components/"))
    .sort(),
]

const componentFiles = orderedSkillFiles.filter((path) =>
  path.startsWith("../../../../../skills/daisyui/components/"),
)

const rootSkillContent = skillModules["../../../../../skills/daisyui/SKILL.md"]
const rootReferencesStart = rootSkillContent.indexOf("## Mandatory reference")
const rootProtocolStart = rootSkillContent.indexOf("### Component discovery protocol")
const rootIntro =
  rootReferencesStart === -1
    ? rootSkillContent.trimEnd()
    : rootSkillContent.slice(0, rootReferencesStart).trimEnd()
const componentDiscoveryProtocol =
  rootProtocolStart === -1 ? "" : rootSkillContent.slice(rootProtocolStart).trim()

function stripFrontmatter(content) {
  return content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "")
}

const skillContent = [
  rootIntro,
  stripFrontmatter(skillModules["../../../../../skills/daisyui/install/SKILL.md"]),
  stripFrontmatter(skillModules["../../../../../skills/daisyui/usage/SKILL.md"]),
  stripFrontmatter(skillModules["../../../../../skills/daisyui/config/SKILL.md"]),
  stripFrontmatter(skillModules["../../../../../skills/daisyui/colors/SKILL.md"]),
  componentDiscoveryProtocol,
  "## daisyUI components",
  ...componentFiles.map((path) => stripFrontmatter(skillModules[path])),
]
  .filter(Boolean)
  .join("\n\n")

export const prerender = true

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

export function GET() {
  const servedContent = withRuntimeFrontmatter(skillContent)

  return new Response(servedContent, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  })
}
