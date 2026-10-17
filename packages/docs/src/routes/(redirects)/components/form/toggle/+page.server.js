import { redirect } from "@sveltejs/kit"

export const ssr = false

const status = 301
const destination = "/components/toggle/"

export const load = () => redirect(status, destination)
