import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import { error } from "@sveltejs/kit"
import { slugify } from "$lib/util"

export async function load({ params }) {
  try {
    // Fetch videos from API endpoint
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/api/youtube.json`)
    if (!response.ok) {
      throw error(response.status, "Failed to fetch videos")
    }
    const videos = await response.json()

    // Find the specific video
    const video = videos.find(
      (item) => `${slugify(item.snippet.title)}-${slugify(item.id)}` === params.id,
    )

    // If video not found, throw 404
    if (!video) {
      throw error(404, "Video not found")
    }

    // 404 if video is not embeddable
    if (video.status.embeddable === false) {
      throw error(404, "Not found")
    }

    return {
      videos,
      video,
    }
  } catch (err) {
    // Handle any fetch or processing errors
    throw error(500, err.message || "Failed to load video data")
  }
}
