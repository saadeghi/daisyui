import { error } from "@sveltejs/kit"
import { faq } from "$lib/data/store.js"

export async function load({ params, parent }) {
  const parentData = await parent()
  // Convert both to strings or numbers for comparison
  const product = parentData.products.find((p) => String(p.id) === String(params.productId))

  if (!product) {
    throw error(404, "Product not found")
  }

  return {
    product,
    tech: parentData.tech,
    faq,
  }
}
