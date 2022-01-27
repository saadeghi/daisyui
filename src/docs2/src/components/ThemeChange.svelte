<script>
  import { onMount } from "svelte"
  import { themeChange } from "theme-change"
  onMount(() => {
    themeChange(false)
  })
</script>

<!-- <div class="overflow-hidden btn btn-sm btn-circle btn-ghost" data-toggle-theme="dark" data-act-class="group">
  <svg class="m-[.5em] w-4 h-4 fill-current group-first:ml-[-1.7em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256,118a22,22,0,0,1-22-22V48a22,22,0,0,1,44,0V96A22,22,0,0,1,256,118Z"/><path d="M256,486a22,22,0,0,1-22-22V416a22,22,0,0,1,44,0v48A22,22,0,0,1,256,486Z"/><path d="M369.14,164.86a22,22,0,0,1-15.56-37.55l33.94-33.94a22,22,0,0,1,31.11,31.11l-33.94,33.94A21.93,21.93,0,0,1,369.14,164.86Z"/><path d="M108.92,425.08a22,22,0,0,1-15.55-37.56l33.94-33.94a22,22,0,1,1,31.11,31.11l-33.94,33.94A21.94,21.94,0,0,1,108.92,425.08Z"/><path d="M464,278H416a22,22,0,0,1,0-44h48a22,22,0,0,1,0,44Z"/><path d="M96,278H48a22,22,0,0,1,0-44H96a22,22,0,0,1,0,44Z"/><path d="M403.08,425.08a21.94,21.94,0,0,1-15.56-6.45l-33.94-33.94a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.55,37.56Z"/><path d="M142.86,164.86a21.89,21.89,0,0,1-15.55-6.44L93.37,124.48a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.56,37.55Z"/><path d="M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z"/></svg>
  <svg class="m-[.5em] w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M152.62,126.77c0-33,4.85-66.35,17.23-94.77C87.54,67.83,32,151.89,32,247.38,32,375.85,136.15,480,264.62,480c95.49,0,179.55-55.54,215.38-137.85-28.42,12.38-61.8,17.23-94.77,17.23C256.76,359.38,152.62,255.24,152.62,126.77Z"/></svg>
</div> -->

<div title="Change Theme" class="dropdown dropdown-end">
  <div tabindex="0" class="btn-ghost btn m-1 normal-case">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    <span class="hidden md:inline">Change Theme</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" class="ml-1 inline-block h-4 w-4 fill-current"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" /></svg>
  </div>
  <div class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px mt-16 h-96 w-52 overflow-y-auto shadow-2xl">
    <ul class="menu menu-compact p-4">
      <li><button data-set-theme="light" data-act-class="active" class="active">🌝  light</button></li>
      <li><button data-set-theme="dark" data-act-class="active">🌚  dark</button></li>
      <li><button data-set-theme="cupcake" data-act-class="active">🧁  cupcake</button></li>
      <li><button data-set-theme="bumblebee" data-act-class="active">🐝  bumblebee</button></li>
      <li><button data-set-theme="emerald" data-act-class="active">✳️  Emerald</button></li>
      <li><button data-set-theme="corporate" data-act-class="active">🏢  Corporate</button></li>
      <li><button data-set-theme="synthwave" data-act-class="active">🌃  synthwave</button></li>
      <li><button data-set-theme="retro" data-act-class="active">👴  retro</button></li>
      <li><button data-set-theme="cyberpunk" data-act-class="active">🤖  cyberpunk</button></li>
      <li><button data-set-theme="valentine" data-act-class="active">🌸  valentine</button></li>
      <li><button data-set-theme="halloween" data-act-class="active">🎃  halloween</button></li>
      <li><button data-set-theme="garden" data-act-class="active">🌷  garden</button></li>
      <li><button data-set-theme="forest" data-act-class="active">🌲  forest</button></li>
      <li><button data-set-theme="aqua" data-act-class="active">🐟  aqua</button></li>
      <li><button data-set-theme="lofi" data-act-class="active">👓  lofi</button></li>
      <li><button data-set-theme="pastel" data-act-class="active">🖍  pastel</button></li>
      <li><button data-set-theme="fantasy" data-act-class="active">🧚‍♀️  fantasy</button></li>
      <li><button data-set-theme="wireframe" data-act-class="active">📝  Wireframe</button></li>
      <li><button data-set-theme="black" data-act-class="active">🏴  black</button></li>
      <li><button data-set-theme="luxury" data-act-class="active">💎  luxury</button></li>
      <li><button data-set-theme="dracula" data-act-class="active">🧛‍♂️  dracula</button></li>
      <li><button data-set-theme="cmyk" data-act-class="active">🖨  CMYK</button></li>
    </ul>
  </div>
</div>
