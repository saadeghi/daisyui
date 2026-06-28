import { load as loadYaml } from "js-yaml"
import navigationYaml from "./navigation.yaml?raw"

const navigation = loadYaml(navigationYaml)

export const navbar = navigation.navbar ?? []
export const sidebar = navigation.sidebar ?? {}
export const pagesThatDontNeedSidebar = sidebar.noSidebar ?? []
