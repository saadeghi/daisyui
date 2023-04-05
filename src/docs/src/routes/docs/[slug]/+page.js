import { error } from "@sveltejs/kit"

export const load = async ({ params }) => {
  try {
    const page = await import(`../../../markdown/docs/${params.slug}.svelte.md`)
    console.log(`page`, page.metadata)
    return {
      content: page.default,
      meta: { ...page.metadata, slug: params.page },
    }
  } catch (err) {
    console.log(err)
    throw error(404, err)
  }
}
