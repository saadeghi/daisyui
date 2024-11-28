import { courses } from "$lib/data/courses.js"

export async function load() {
  return {
    courses,
  }
}
