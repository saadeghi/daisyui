import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import yaml from "js-yaml"

async function fetchFrameworksData() {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/data/frameworks.yaml`)

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`)
    }

    const yamlFile = await response.text()
    return yaml.load(yamlFile)
  } catch (err) {
    console.error("Error fetching data:", err)
    return null
  }
}

export async function load({ params }) {
  const frameworksData = await fetchFrameworksData()
  return {
    frameworksData: frameworksData.map(({ name, logo }) => ({ name, logo })),
  }
}
