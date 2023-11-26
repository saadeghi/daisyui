<script>
  let pos = { x: 0, y: 0 }
  let showMenu = false

  export function openContextMenu(e) {
    showMenu = true
    pos = {
      x: e.clientX,
      y: e.clientY,
    }
  }
  function closeContextMenu(e) {
    showMenu = false
  }
</script>

{#if showMenu}
  <ul
    style="top:{pos.y}px; left:{pos.x}px"
    class="menu menu-sm bg-base-200 rounded-box absolute z-[99] border border-white/5 p-2 shadow-2xl outline outline-1 outline-black/5">
    <li class="menu-title">Download daisyUI Logo</li>
    <li>
      <a
        rel="noopener, noreferrer"
        target="_blank"
        href="/images/daisyui-logo/daisyui-logomark.svg">
        SVG logo
      </a>
    </li>
    <li>
      <a
        rel="noopener, noreferrer"
        target="_blank"
        href="/images/daisyui-logo/daisyui-logotype.svg">
        SVG logotype
      </a>
    </li>
    <li />
    <li>
      <a
        rel="noopener, noreferrer"
        target="_blank"
        href="/images/daisyui-logo/daisyui-logomark-1024-1024.png">
        PNG logo
      </a>
    </li>
    <li>
      <a
        rel="noopener, noreferrer"
        target="_blank"
        href="/images/daisyui-logo/daisyui-logotype-3600-1024.png">
        PNG logotype
      </a>
    </li>
  </ul>
{/if}

<svelte:window on:click={closeContextMenu} on:blur={closeContextMenu} />
