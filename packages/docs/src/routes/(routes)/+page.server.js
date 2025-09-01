import { stats } from "$lib/data/stats.js"

export async function load() {
  const testimonialsResponse = await fetch("https://img.daisyui.com/generated/testimonials.json")
  const testimonials = await testimonialsResponse.json()
  return {
    testimonials,
    stats,
  }
}
