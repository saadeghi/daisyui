export const ssr = false
import { redirect } from "@sveltejs/kit"
export function load() {
  redirect(301, "https://daisyui.com/resources/videos/")
}
