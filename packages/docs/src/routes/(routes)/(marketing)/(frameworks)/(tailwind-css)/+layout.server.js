import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import { load as loadYaml } from "js-yaml"

async function fetchFrameworksData() {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/data/frameworks.yaml`)

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`)
    }

    const yamlFile = await response.text()
    return loadYaml(yamlFile)
  } catch (err) {
    console.error("Error fetching data:", err)
    return null
  }
}

export async function load() {
  const frameworksData = await fetchFrameworksData()
  const testimonialsResponse = await fetch("https://img.daisyui.com/generated/testimonials.json")
  const testimonials = await testimonialsResponse.json()

  return {
    testimonials,
    frameworksData: frameworksData.map(({ name, logo }) => ({ name, logo })),
  }
}
