import videos from "$lib/json/youtube.json"
// filter unused properties
// const videosFiltered = videos.map(
//   ({
//     statistics,
//     snippet: {
//       publishedAt,
//       categoryId,
//       thumbnails: { medium, ...restThumbnails },
//       ...restsnippet
//     },
//     status: { privacyStatus, license, publicStatsViewable, ...reststatus },
//     pageInfo,
//     kind,
//     etag,
//     contentDetails,
//     ...rest
//   }) => ({
//     ...rest,
//     snippet: { ...restsnippet, thumbnails: restThumbnails },
//     status: reststatus,
//   })
// )

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
