export const slugFromPath = (path) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null

export const pkgVersion = () => {
  if (import.meta.env.VITE_DAISYUI_VERSION !== undefined) {
    return import.meta.env.VITE_DAISYUI_VERSION
  }
  return "latest"
}
