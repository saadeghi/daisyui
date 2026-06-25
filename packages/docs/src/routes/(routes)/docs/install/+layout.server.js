import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import { load as loadYaml } from "js-yaml"

export async function load() {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/data/frameworks.yaml`)

    if (!response.ok) {
      throw new Error(`Failed to fetch frameworks: ${response.status}`)
    }

    const yamlFile = await response.text()
    const frameworks = loadYaml(yamlFile)

    return {
      frameworks,
    }
  } catch (error) {
    console.error("Error loading frameworks:", error)
    return {
      frameworks: [],
    }
  }
}
