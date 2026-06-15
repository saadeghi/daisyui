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

export function GET() {
  const content = skillContent

  return new Response(content, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  })
}
