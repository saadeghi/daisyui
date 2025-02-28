// import { GH_API_KEY } from "$env/static/private"
import { tweets } from "$lib/data/testimonials.js"
import { stats } from "$lib/data/stats.js"

export async function load() {
  return {
    tweets,
    stats,
  }
}
