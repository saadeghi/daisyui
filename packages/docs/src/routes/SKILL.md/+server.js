import skillContent from "../../../../../skills/daisyui/SKILL.md?raw"

export const prerender = true

export function GET() {
  const content = skillContent

  return new Response(content, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  })
}
