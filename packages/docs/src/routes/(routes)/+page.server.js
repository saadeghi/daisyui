import { stats } from "$lib/data/stats.js"

export async function load() {
  const testimonialsResponse = await fetch("https://img.duskmoonui.com/generated/testimonials.json")
  const testimonials = await testimonialsResponse.json()
  return {
    testimonials,
    stats,
  }
}
