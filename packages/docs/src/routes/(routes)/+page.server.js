import { stats } from "$lib/data/stats.js"

export async function load({ params }) {
  const response = await fetch("http://localhost:4000/testimonials.json")
  const testimonials = await response.json()
  return {
    testimonials,
    stats,
  }
}
