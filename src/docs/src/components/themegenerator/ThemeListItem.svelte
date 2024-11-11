<script>
  let {
    id,
    theme,
    selectedThemeName,
    loadThemeForEditing
  } = $props();
</script>

<li>
  <button
    class={`px-2 gap-3 ${selectedThemeName === id ? 'bg-base-content/10' : ''}`}
    on:click={() => loadThemeForEditing(id)}
  >
    <div class="grid grid-cols-2 gap-0.5 p-1 rounded-md shadow-sm shrink-0"
      style={`background-color: ${theme['--color-base-100']}`}
    >
      <div
        class="size-1 rounded-full"
        style={`background-color: ${theme['--color-base-content']}`}
      >
      </div>
      <div
        class="size-1 rounded-full"
        style={`background-color: ${theme['--color-primary']}`}
      >
      </div>
      <div
        class="size-1 rounded-full"
        style={`background-color: ${theme['--color-secondary']}`}
      >
      </div>
      <div
        class="size-1 rounded-full"
        style={`background-color: ${theme['--color-accent']}`}
      >
      </div>
    </div>
    <div class="w-32 truncate">
      {theme.name || id}
    </div>
  </button>
</li>
