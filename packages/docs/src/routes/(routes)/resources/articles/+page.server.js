import { articles } from "$lib/data/articles.js"

export async function load() {
  return {
    articles,
  }
}
