<script>
  let { id, type, theme, isCurrent, loadTheme, style } = $props()
</script>

<li>
  <button
    {style}
    class={`px-2 gap-3 ${isCurrent ? "bg-base-content/10" : ""}`}
    onclick={() => loadTheme(id)}
  >
    <div
      class="grid grid-cols-2 gap-0.5 p-1 rounded-md shadow-sm shrink-0"
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
