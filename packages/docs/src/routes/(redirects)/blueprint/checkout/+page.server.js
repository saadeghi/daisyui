export const ssr = false
import { redirect } from "@sveltejs/kit"
export function load() {
  redirect(301, "https://www.creem.io/payment/prod_4GWzcIFPubIXjTBvzo9pKA")
}
