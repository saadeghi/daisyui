import videos from "$lib/json/youtube.json"

// remove extra data from json
videos.forEach((video) => {
  delete video.etag
  delete video.kind
  delete video.snippet.publishedAt
  delete video.snippet.categoryId
  delete video.snippet.thumbnails.default
  delete video.snippet.thumbnails.medium
  delete video.snippet.thumbnails.high.width
  delete video.snippet.thumbnails.high.height
  delete video.status.privacyStatus
  delete video.status.license
  delete video.status.publicStatsViewable
})

export async function load() {
  return {
    videos,
  }
}
