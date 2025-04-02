import yaml from "js-yaml"
import { readFileSync } from "fs"

const yamlFile = readFileSync("src/lib/data/frameworks.yaml", "utf8")
const frameworks = yaml.load(yamlFile)

export async function load() {
  return {
    frameworks,
  }
}
