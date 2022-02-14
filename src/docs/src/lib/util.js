export const slugFromPath = (path) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null

export const readEnv = (id, defaultValue = "") => {
  if (import.meta.env[id] !== undefined) {
    return import.meta.env[id]
  }
  return defaultValue
}

