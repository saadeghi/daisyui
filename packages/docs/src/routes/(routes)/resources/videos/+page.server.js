import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
export async function load() {
  try {
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/api/youtube.json`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const videos = await response.json()

    // remove extra data from json
    for (const video of videos) {
      video.etag = undefined
      video.kind = undefined
      video.snippet.publishedAt = undefined
      video.snippet.categoryId = undefined
      video.snippet.thumbnails.default = undefined
      video.snippet.thumbnails.medium = undefined
      video.snippet.thumbnails.high.width = undefined
      video.snippet.thumbnails.high.height = undefined
      video.status.privacyStatus = undefined
      video.status.license = undefined
      video.status.publicStatsViewable = undefined
    }

    return {
      videos,
    }
  } catch (error) {
    console.error("Error fetching YouTube data:", error)
    return {
      videos: [], // Return empty array in case of error
    }
  }
}
