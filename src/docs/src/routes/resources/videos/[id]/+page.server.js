import { error } from "@sveltejs/kit"
import { slugify } from "$lib/util"
import videos from "$lib/json/youtube.json"

export function load({ params }) {
  const video = videos.find(
    (item) => `${slugify(item.snippet.title)}-${slugify(item.id)}` === params.id
  )

  // 404 if video is not embeddable
  if (video.status.embeddable === false) {
    error(404, "Not found");
  }

  return {
    videos,
    video,
  }
}
