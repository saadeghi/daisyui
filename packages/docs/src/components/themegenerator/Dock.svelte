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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
      <path
        d="M3.5 2A1.5 1.5 0 0 0 2 3.5v2A1.5 1.5 0 0 0 3.5 7h2A1.5 1.5 0 0 0 7 5.5v-2A1.5 1.5 0 0 0 5.5 2h-2ZM3.5 9A1.5 1.5 0 0 0 2 10.5v2A1.5 1.5 0 0 0 3.5 14h2A1.5 1.5 0 0 0 7 12.5v-2A1.5 1.5 0 0 0 5.5 9h-2ZM9 3.5A1.5 1.5 0 0 1 10.5 2h2A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-2A1.5 1.5 0 0 1 9 5.5v-2ZM10.5 9A1.5 1.5 0 0 0 9 10.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 12.5 9h-2Z"
      />
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
  <button
    class:dock-active={dockActiveItem === "variants"}
    onclick={() => {
      dockActiveItem = "variants"
      window.scrollTo({ top: 0, behavior: "smooth" })
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-4"
      ><g
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2"
        fill="none"
        stroke="currentColor"
        ><path d="M4 6l5.5 0"></path><path d="M4 10l5.5 0"></path><path d="M4 14l5.5 0"></path><path
          d="M4 18l5.5 0"
        ></path><path d="M14.5 6l5.5 0"></path><path d="M14.5 10l5.5 0"></path><path
          d="M14.5 14l5.5 0"
        ></path><path d="M14.5 18l5.5 0"></path></g
      ></svg
    >
    <span class="dock-label">Variant preview</span>
  </button>
</nav>
