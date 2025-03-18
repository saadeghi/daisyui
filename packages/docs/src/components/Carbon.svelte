<script>
  import { navigating } from "$app/stores"

  $effect(() => {
    if (import.meta.env.DEV) {
      return
    }
    if ($navigating) {
      const container = document.querySelector("#carbon-container")
      if (container) {
        container.innerHTML = ""
      }
    } else {
      const script = document.createElement("script")
      script.async = true
      script.id = "_carbonads_js"
      script.src = "//cdn.carbonads.com/carbon.js?serve=CEAI423U&placement=daisyuicom&format=cover"

      const container = document.querySelector("#carbon-container")
      if (container) {
        container.appendChild(script)
      }
    }
  })
</script>

<div class="w-full print:hidden" id="carbon-container"></div>
