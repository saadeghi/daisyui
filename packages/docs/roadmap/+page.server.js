import yaml from "js-yaml"
import { readFileSync } from "fs"

const yamlFile = readFileSync("src/lib/data/roadmap.yaml", "utf8")
const roadmap = yaml.load(yamlFile)

export function load() {
  return {
    roadmap,
  }
}
