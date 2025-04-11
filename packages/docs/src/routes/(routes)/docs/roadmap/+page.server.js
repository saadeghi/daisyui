import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import yaml from "js-yaml"

export async function load() {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/data/roadmap.yaml`)

    if (!response.ok) {
      throw new Error(`Failed to fetch roadmap: ${response.status}`)
    }

    const yamlFile = await response.text()
    const roadmap = yaml.load(yamlFile)

    return {
      roadmap,
    }
  } catch (error) {
    console.error("Error loading roadmap:", error)
    return {
      roadmap: [],
    }
  }
}
