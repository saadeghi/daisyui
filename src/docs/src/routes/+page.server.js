// get the list of github contributors
export async function load() {
  const res = await fetch(`https://api.github.com/repos/saadeghi/daisyui/contributors?per_page=100`)
  const json = await res.json()
  return { gh_contributors: json }
}
