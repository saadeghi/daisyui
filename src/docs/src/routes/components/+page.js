export async function load({ fetch }) {
  const res = await fetch(`/api/components.json`)

  const { components } = await res.json()
  return { components }
}
