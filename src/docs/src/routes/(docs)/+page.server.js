import { GH_API_KEY } from "$env/static/private"
import depGraphCount from "dep-graph-count"
import { tweets } from "$lib/data/testimonials.js"
import { stats } from "$lib/data/stats.js"

let stargazers_count = 30000
let npmInstalls = 13000000
let contributors = []
let backers = []

export async function load() {
  const githubDeps = await depGraphCount("saadeghi", "daisyui")

  const npmDownloadsInfo = await fetch(
    "https://api.npmjs.org/downloads/point/2000-01-01:2100-01-01/daisyui",
    {}
  )

  if (npmDownloadsInfo.ok) {
    const data = await npmDownloadsInfo.json()
    npmInstalls = data.downloads
  } else {
    console.error("Warning: Could not fetch npm download counts. Using default value")
  }

  const GHParams = {
    headers: {
      Authorization: `token ${GH_API_KEY}`,
    },
  }
  const githubRepoInfo = await fetch("https://api.github.com/repos/saadeghi/daisyui", GHParams)
  if (githubRepoInfo.ok) {
    const data = await githubRepoInfo.json()
    stargazers_count = data.stargazers_count
  } else {
    console.error("Warning: Could not fetch github stargazers count. Using default value")
  }

  const contributors1 = await fetch(
    "https://api.github.com/repos/saadeghi/daisyui/contributors?page=1&per_page=100",
    GHParams
  )
  if (contributors1.ok) {
    contributors = await contributors1.json()
  } else {
    console.error("Warning: Could not fetch github contributors.")
  }

  const contributors2 = await fetch(
    "https://api.github.com/repos/saadeghi/daisyui/contributors?page=2&per_page=100",
    GHParams
  )
  if (contributors2.ok) {
    contributors = contributors.concat(await contributors2.json())
  } else {
    console.error("Warning: Could not fetch github contributors.")
  }

  const openCollectiveBackers = await fetch("https://opencollective.com/daisyui/members/all.json")

  if (openCollectiveBackers.ok) {
    backers = await openCollectiveBackers.json()
    backers = backers.filter(
      (obj, index) => backers.findIndex((item) => item.name === obj.name) === index
    )
  } else {
    console.error("Warning: Could not fetch open collective backers.")
  }

  // filter unused data
  contributors = contributors.map(({ login, avatar_url }) => ({ login, avatar_url }))
  backers = backers.map(({ name, image }) => ({ name, image }))

  return {
    gh_dependents: {
      repositories: Number.parseInt(githubDeps.repositories?.replace(/\,/g, "")),
      packages: Number.parseInt(githubDeps.packages?.replace(/\,/g, "")),
    },
    stargazers_count,
    npmInstalls,
    contributors,
    backers,
    tweets,
    stats,
  }
}
