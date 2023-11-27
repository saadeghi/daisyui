export const ssr = false
import { redirect } from "@sveltejs/kit"
export function load() {
  throw redirect(301, "https://daisyui.com/docs/themes/")
}
