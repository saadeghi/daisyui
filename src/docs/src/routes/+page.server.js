import depGraphCount from "dep-graph-count"

export async function load() {
  let res = await depGraphCount("saadeghi", "daisyui")
  return {
    gh_dependents: {
      repositories: parseInt(res.repositories.replace(/\,/g, "")),
      packages: parseInt(res.packages.replace(/\,/g, "")),
    },
  }
}
