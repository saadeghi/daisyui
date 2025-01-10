import { error } from "@sveltejs/kit"

export async function load({ params, parent }) {
  const parentData = await parent()
  // Convert both to strings or numbers for comparison
  const product = parentData.products.find((p) => String(p.id) === String(params.productId))

  if (!product) {
    throw error(404, "Product not found")
  }

  // Also pass tech data for the tech badges
  return {
    product,
    tech: parentData.tech, // Add this line to pass tech data
  }
}
