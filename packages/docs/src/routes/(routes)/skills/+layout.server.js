import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import { error } from "@sveltejs/kit"
import { load as loadYaml } from "js-yaml"

const codingTools = [
  {
    name: "VSCode Copilot",
    slug: "copilot",
    icon: "copilot",
    agent: "github-copilot",
  },
  {
    name: "Claude Code",
    slug: "claude-code",
    icon: "claude-code",
    agent: "claude-code",
  },
  {
    name: "Codex",
    slug: "codex",
    icon: "codex",
    agent: "codex",
  },
  {
    name: "Cursor",
    slug: "cursor",
    icon: "cursor",
    agent: "cursor",
  },
  {
    name: "OpenCode",
    slug: "opencode",
    icon: "opencode",
    agent: "opencode",
  },
  {
    name: "OpenClaw",
    slug: "openclaw",
    icon: "openclaw",
    agent: "openclaw",
  },
  {
    name: "Windsurf",
    slug: "windsurf",
    icon: "windsurf",
    agent: "windsurf",
  },
  {
    name: "Gemini CLI",
    slug: "gemini-cli",
    icon: "gemini-cli",
    agent: "gemini-cli",
  },
  {
    name: "Antigravity",
    slug: "antigravity",
    icon: "antigravity",
    agent: "antigravity",
  },
]

const fetchStoreData = async () => {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/data/skills.yaml`)

    if (!response.ok) {
      throw new Error(`Failed to fetch store data: ${response.status}`)
    }

    const yamlText = await response.text()
    return loadYaml(yamlText)
  } catch (e) {
    console.error(`Error loading or parsing YAML`, e)
    throw error(500, "Server configuration error: Could not load data")
  }
}

const fetchProduct = async (id) => {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/data/skills/${id}.yaml`)
    if (!response.ok) {
      throw new Error(`Failed to fetch product ${id}: ${response.status}`)
    }
    const yamlText = await response.text()
    return loadYaml(yamlText)
  } catch (e) {
    console.error(`Error loading product ${id}`, e)
    return null
  }
}

export async function load() {
  const yamlData = await fetchStoreData()
  const productOrder = yamlData.productOrder || []
  // Attach the YAML file name as _key to each product
  const products = (
    await Promise.all(
      productOrder.map(async (id) => {
        const product = await fetchProduct(id)
        return product ? { ...product, _key: id } : null
      }),
    )
  ).filter(Boolean)
  return {
    products,
    codingTools,
  }
}
