import minimalAnalytics from "@minimal-analytics/ga4"

const { track: originalTrack } = minimalAnalytics

export function track(actionName) {
  originalTrack({
    type: "action",
    event: { "ep.name": actionName },
  })
}
