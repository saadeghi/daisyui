<script>
import { navigating } from "$app/stores"

$effect(() => {
  if ($navigating) {
    const container = document.querySelector("#carbon-container")
    if (container) {
      container.innerHTML = ""
    }
  } else {
    const script = document.createElement("script")
    script.async = true
    script.id = "_carbonads_js"
    script.src = "//cdn.carbonads.com/carbon.js?serve=CEAI423U&placement=daisyuicom"

    const container = document.querySelector("#carbon-container")
    if (container) {
      container.appendChild(script)
    }
  }
})
</script>

<div id="carbon-container"></div>

