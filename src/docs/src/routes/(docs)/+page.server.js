import depGraphCount from "dep-graph-count"
import githubRepoInfo from "$lib/json/github-repo.json"
import npmDownloadsInfo from "$lib/json/npm-downloads.json"
import contributors1 from "$lib/json/github-contributors-1.json"
import contributors2 from "$lib/json/github-contributors-2.json"
import openCollectiveBackers from "$lib/json/opencollective-members.json"
import { tweets } from "$lib/data/testimonials.js"
import { stats } from "$lib/data/stats.js"

let stargazers_count = 25000
let npmInstalls = 8000000
let contributors = []
let backers = []

export async function load() {
  let githubDeps = await depGraphCount("saadeghi", "daisyui")

  if (githubRepoInfo && githubRepoInfo.stargazers_count) {
    stargazers_count = githubRepoInfo.stargazers_count
  }

  if (npmDownloadsInfo && npmDownloadsInfo.downloads) {
    npmInstalls = npmDownloadsInfo.downloads
  }

  if (Array.isArray(contributors1) && Array.isArray(contributors2)) {
    contributors = contributors1.concat(contributors2)
  }

  if (Array.isArray(openCollectiveBackers)) {
    backers = openCollectiveBackers.filter(
      (obj, index) => openCollectiveBackers.findIndex((item) => item.name === obj.name) === index
    )
  }
  // filter unused data
  contributors = contributors.map(({ login, avatar_url }) => ({ login, avatar_url }))
  backers = backers.map(({ name, image }) => ({ name, image }))

  return {
    gh_dependents: {
      repositories: parseInt(githubDeps.repositories?.replace(/\,/g, "")),
      packages: parseInt(githubDeps.packages?.replace(/\,/g, "")),
    },
    stargazers_count,
    npmInstalls,
    contributors,
    backers,
    tweets,
    stats,
  }
}
