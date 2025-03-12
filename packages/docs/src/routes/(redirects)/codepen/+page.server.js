export const ssr = false
import { redirect } from "@sveltejs/kit"
export function load() {
  redirect(301, "https://codepen.io/pen?template=BaqgrNP&editors=1000")
}
