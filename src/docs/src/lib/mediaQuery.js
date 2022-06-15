import { onMount } from "svelte"
import { writable } from "svelte/store"

export function useMediaQuery(query) {
  let mediaQuery = undefined
  const matches = writable(false)

  const update = () => {
    if (!mediaQuery) mediaQuery = window.matchMedia(query)
    matches.set(mediaQuery.matches)
  }

  onMount(() => {
    update()

    if (!mediaQuery) return

    if ("addEventListener" in mediaQuery) mediaQuery.addEventListener("change", update)
    else mediaQuery.addListener(update)

    return () => {
      if ("removeEventListener" in mediaQuery) mediaQuery.removeEventListener("change", update)
      else mediaQuery.removeListener(update)
    }
  })

  return matches
}
