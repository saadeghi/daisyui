// export const prerender = true

import { getPages } from "@src/lib/pages"

export async function GET() {
  const components = await getPages()
  return new Response(JSON.stringify(components, null, 2))
}
