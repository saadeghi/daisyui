<script>
  import { readEnv } from "$lib/util"
  let version = readEnv("VITE_DAISYUI_VERSION", "latest")
</script>

<div class="dropdown">
  <div tabindex="0" class="link link-hover my-8 inline-block font-mono text-xs">
    {version}
  </div>
  <ul tabindex="0" class="dropdown-content menu menu-sm bg-base-200 rounded-box w-36 p-2 shadow">
    <li><a href="/docs/changelog/">Changelog</a></li>
    <li />
    <li>
      <a target="_blank" rel="noopener, noreferrer" href="https://v3.daisyui.com/">Version 3.x</a>
    </li>
    <li>
      <a target="_blank" rel="noopener, noreferrer" href="https://v2.daisyui.com/">Version 2.x</a>
    </li>
    <li>
      <a target="_blank" rel="noopener, noreferrer" href="https://v1.daisyui.com/">Version 1.x</a>
    </li>
  </ul>
</div>
