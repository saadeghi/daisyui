import { stats } from "$lib/data/stats.js"

async function getTestimonials(retry = true) {
  const signal = AbortSignal.timeout(10_000)
  try {
    const response = await fetch("https://img.daisyui.com/generated/testimonials.json", {
      signal,
    })
    if (!response.ok) {
      throw new Error(`Failed to fetch testimonials: HTTP ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    if (!retry) throw error
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return getTestimonials(false)
  }
}

export async function load() {
  const testimonials = await getTestimonials()
  return {
    testimonials,
    stats,
  }
}
