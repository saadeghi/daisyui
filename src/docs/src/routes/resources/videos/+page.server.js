import videos from "$lib/json/youtube.json"

export async function load() {
  return {
    videos,
  }
}
