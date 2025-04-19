<script>
  let { id, type, theme, isCurrent, loadTheme, style, classes = "" } = $props()
</script>

<li>
  <button
    {style}
    class={`${classes} gap-3 px-2 ${isCurrent ? "bg-base-content/10" : ""}`}
    onclick={() => loadTheme(id)}
  >
    <div
      class="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
      style={`background-color: ${theme["--color-base-100"]}`}
    >
      <div
        class="size-1 rounded-full"
        style={`background-color: ${theme["--color-base-content"]}`}
      ></div>
      <div
        class="size-1 rounded-full"
        style={`background-color: ${theme["--color-primary"]}`}
      ></div>
      <div
        class="size-1 rounded-full"
        style={`background-color: ${theme["--color-secondary"]}`}
      ></div>
      <div class="size-1 rounded-full" style={`background-color: ${theme["--color-accent"]}`}></div>
    </div>
    <div class="w-32 truncate">
      {theme.name || id}
    </div>
  </button>
</li>
