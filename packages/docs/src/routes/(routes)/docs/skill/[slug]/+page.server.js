import { error } from "@sveltejs/kit"
import { load as layoutLoad } from "../+layout.server.js"

export async function entries() {
  const { skillEditors } = await layoutLoad()
  return skillEditors.map((editor) => ({ slug: editor.slug }))
}

export async function load({ params, parent }) {
  const { skillEditors } = await parent()
  const editor = skillEditors.find((item) => item.slug === params.slug) || null

  if (!editor) {
    throw error(404, "Not found")
  }

  return {
    editor,
    installCommand: `npx skills add saadeghi/daisyui --agent ${editor.agent} --yes`,
  }
}
