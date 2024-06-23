import videos from "$lib/json/youtube.json"

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

export async function load() {
  return {
    videos,
  }
}
