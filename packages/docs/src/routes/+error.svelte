<script>
  import { page } from "$app/stores"
  import { onMount } from "svelte"
  let timer
  onMount(() => {
    const url = window.location.href
    const now = Date.now()
    const key = "page_load_error_log"
    let errorObj = null
    try {
      errorObj = JSON.parse(localStorage.getItem(key)) || null
    } catch (e) {
      errorObj = null
    }
    const errorMessage = $page?.error?.message || ""
    if (!errorObj || errorObj.url !== url) {
      // Not saved yet or different page, save and refresh
      const newObj = { timestamp: now, url, message: errorMessage, attempts: 1 }
      localStorage.setItem(key, JSON.stringify(newObj))
      window.location.reload()
      return
    }
    // Update attempts
    let attempts = (errorObj.attempts || 1) + 1
    const age = now - errorObj.timestamp
    if (age > 10 * 1000) {
      // More than 10s ago, update timestamp and refresh
      const newObj = { timestamp: now, url, message: errorMessage, attempts }
      localStorage.setItem(key, JSON.stringify(newObj))
      window.location.reload()
      return
    }
    // Less than 10s ago, set timer to refresh at 10s
    const remaining = 10 * 1000 - age
    const newObj = { ...errorObj, attempts }
    localStorage.setItem(key, JSON.stringify(newObj))
    console.log(`Attempt ${attempts}: Refreshing in ${Math.ceil(remaining / 1000)} seconds`)
    timer = setTimeout(() => {
      window.location.reload()
    }, remaining)
    return () => clearTimeout(timer)
  })
</script>

<div class="place-content-center text-center font-sans">
  <h1 class="text-4xl font-black opacity-10">Error</h1>
  <p>{$page.error.message}</p>
  <p class="text-xs opacity-50">
    If the problem persists, please try clearing your browser cache <br />or opening the site in an
    incognito window.
  </p>
  <a class="underline" href="/">Go back</a>
</div>

<style>
  .font-sans {
    font-family: sans-serif;
  }
  .place-content-center {
    place-content: center;
  }
  .text-center {
    text-align: center;
  }
  .text-4xl {
    font-size: 2.25rem;
  }

  .text-xs {
    font-size: 0.75rem;
  }
  .font-black {
    font-weight: 900;
  }
  .underline {
    text-decoration-line: underline;
  }
  .opacity-10 {
    opacity: 0.1;
  }
  .opacity-50 {
    opacity: 0.5;
  }
</style>
