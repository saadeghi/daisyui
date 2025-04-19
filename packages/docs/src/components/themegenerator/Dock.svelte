<script>
  let { dockActiveItem = $bindable() } = $props()
</script>

<nav class="dock dock-sm md:hidden">
  <button
    class:dock-active={dockActiveItem === "themes"}
    onclick={() => {
      dockActiveItem = "themes"
      window.scrollTo({ top: 0, behavior: "smooth" })
    }}
  >
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2"
        fill="none"
        stroke="currentColor"
      >
        <rect width="7" height="9" x="3" y="3" rx="1"> </rect>
        <rect width="7" height="5" x="14" y="3" rx="1"> </rect>
        <rect width="7" height="9" x="14" y="12" rx="1"> </rect>
        <rect width="7" height="5" x="3" y="16" rx="1"> </rect>
      </g>
    </svg>
    <span class="dock-label">Themes</span>
  </button>
  <button
    class:dock-active={dockActiveItem === "editor"}
    onclick={() => {
      dockActiveItem = "editor"
      window.scrollTo({ top: 0, behavior: "smooth" })
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
      <path
        d="M12.613 1.258a1.535 1.535 0 0 1 2.13 2.129l-1.905 2.856a8 8 0 0 1-3.56 2.939 4.011 4.011 0 0 0-2.46-2.46 8 8 0 0 1 2.94-3.56l2.855-1.904ZM5.5 8A2.5 2.5 0 0 0 3 10.5a.5.5 0 0 1-.7.459.75.75 0 0 0-.983 1A3.5 3.5 0 0 0 8 10.5 2.5 2.5 0 0 0 5.5 8Z"
      />
    </svg>
    <span class="dock-label">Editor</span>
  </button>
  <button
    class:dock-active={dockActiveItem === "preview"}
    onclick={() => {
      dockActiveItem = "preview"
      window.scrollTo({ top: 0, behavior: "smooth" })
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path
        fill-rule="evenodd"
        d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        clip-rule="evenodd"
      />
    </svg>
    <span class="dock-label">Preview</span>
  </button>
</nav>
