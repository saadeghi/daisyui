import videos from "$lib/json/youtube.json"
// filter unused properties
const videosFiltered = videos.map(
  ({ statistics, pageInfo, kind, etag, contentDetails, ...rest }) => rest
)
export async function load() {
  return {
    videos: videosFiltered,
  }
}
