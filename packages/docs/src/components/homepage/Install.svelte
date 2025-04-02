<script>
  import { t } from "$lib/i18n.svelte.js"
  import { onMount } from "svelte"
  import Clipboard from "$components/Clipboard.svelte"
</script>

<p class="mx-auto mt-5 mb-2 w-full text-start">1. {$t("install-step-1")}:</p>
<div class="tabs tabs-lift tabs-sm sm:tabs-md w-full">
  <label
    class="tab has-checked:text-neutral-content! text-neutral gap-1.5 [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)]"
  >
    <input type="radio" name="install[packagemanager]" checked="checked" />
    <svg
      class="max-lg:hidden"
      width="14"
      height="14"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      ><path d="m0 256v-256h256v256z" fill="#c12127" /><path
        d="m48 48h160v160h-32v-128h-48v128h-80z"
        fill="#fff"
      /></svg
    >
    NPM
  </label>
  <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
    <div class="absolute top-0 right-0 z-1">
      {#if onMount}
        <Clipboard text={`npm i -D daisyui@latest`} />
      {/if}
    </div>
    <pre data-prefix="$"><code>npm i -D daisyui@latest</code></pre>
  </div>
  <label
    class="tab has-checked:text-neutral-content! text-neutral gap-1.5 [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)]"
  >
    <input type="radio" name="install[packagemanager]" />
    <svg
      class="max-lg:hidden"
      width="14"
      height="14"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30,10.75H21.251V2H30Z" style="fill:#f9ad00" />
      <path d="M20.374,10.75h-8.75V2h8.75Z" style="fill:#f9ad00" />
      <path d="M10.749,10.75H2V2h8.749Z" style="fill:#f9ad00" />
      <path d="M30,20.375H21.251v-8.75H30Z" style="fill:#f9ad00" />
      <path d="M20.374,20.375h-8.75v-8.75h8.75Z" fill="currentColor" />
      <path d="M20.374,30h-8.75V21.25h8.75Z" fill="currentColor" />
      <path d="M30,30H21.251V21.25H30Z" fill="currentColor" />
      <path d="M10.749,30H2V21.25h8.749Z" fill="currentColor" />
    </svg>
    PNPM
  </label>
  <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
    <div class="absolute top-0 right-0 z-1">
      {#if onMount}
        <Clipboard text={`pnpm add -D daisyui@latest`} />
      {/if}
    </div>
    <pre data-prefix="$"><code>pnpm add -D daisyui@latest</code></pre>
  </div>
  <label
    class="tab has-checked:text-neutral-content! text-neutral gap-1.5 [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)]"
  >
    <input type="radio" name="install[packagemanager]" />
    <svg
      class="max-lg:hidden"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      ><g
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2"
        fill="#117cad"
        stroke="none"
        ><path
          d="M17.845 19.308c-1.268 .814 -2.41 1.254 -3.845 1.692c-.176 .21 -.645 .544 -.912 .588a42.469 42.469 0 0 1 -4.498 .412c-.812 .006 -1.31 -.214 -1.447 -.554c-.115 -.279 .336 -2.054 .298 -1.964c-.157 .392 -.575 1.287 -.997 1.72c-.579 .6 -1.674 .4 -2.322 .051c-.71 -.386 -.07 -1.28 -.346 -1.267c-.276 .014 -.776 -1.486 -.776 -2.236c0 -.828 .622 -1.674 1.235 -2.211a6.811 6.811 0 0 1 .46 -3.143a7.414 7.414 0 0 1 2.208 -2.615s-1.353 -1.534 -.849 -2.912c.328 -.902 .46 -.895 .567 -.935c.38 -.12 .727 -.33 1.013 -.612c.78 -.88 1.96 -1.438 3.116 -1.322c0 0 .781 -2.43 1.533 -1.936c.415 .653 .671 1.218 .967 1.936c0 0 1.15 -.7 1.25 -.5c.514 1.398 .487 3.204 .211 4.67c-.324 1.408 -.84 2.691 -1.711 3.83c-.094 .16 .98 .705 1.722 2.812c.686 1.928 .278 2.438 .278 2.688s.716 .144 2.296 -.855a5.848 5.848 0 0 1 2.984 -1.145c.735 -.066 .988 -.035 1.22 1c.232 1.035 -.346 1.406 -.744 1.506c0 0 -2.09 .675 -2.911 1.302z"
        ></path></g
      ></svg
    >
    Yarn
  </label>
  <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
    <div class="absolute top-0 right-0 z-1">
      {#if onMount}
        <Clipboard text={`yarn add -D daisyui@latest`} />
      {/if}
    </div>
    <pre data-prefix="$"><code>yarn add -D daisyui@latest</code></pre>
  </div>

  <label
    class="tab has-checked:text-neutral-content! text-neutral gap-1.5 [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)]"
  >
    <input type="radio" name="install[packagemanager]" />

    <svg
      class="max-lg:hidden"
      width="18"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 70"
    >
      <g id="Body">
        <path
          id="Background"
          d="M73,35.7c0,15.21-15.67,27.54-35,27.54S3,50.91,3,35.7C3,26.27,9,17.94,18.22,13S33.18,3,38,3s8.94,4.13,19.78,10C67,17.94,73,26.27,73,35.7Z"
          style="fill:#fbf0df"
        />
        <path
          id="Outline"
          d="M38,65.75C17.32,65.75.5,52.27.5,35.7c0-10,6.18-19.33,16.53-24.92,3-1.6,5.57-3.21,7.86-4.62,1.26-.78,2.45-1.51,3.6-2.19C32,1.89,35,.5,38,.5s5.62,1.2,8.9,3.14c1,.57,2,1.19,3.07,1.87,2.49,1.54,5.3,3.28,9,5.27C69.32,16.37,75.5,25.69,75.5,35.7,75.5,52.27,58.68,65.75,38,65.75ZM38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7,3,50.89,18.7,63.25,38,63.25S73,50.89,73,35.7C73,26.62,67.31,18.13,57.78,13,54,11,51.05,9.12,48.66,7.64c-1.09-.67-2.09-1.29-3-1.84C42.63,4,40.42,3,38,3Z"
        />
      </g>
      <g id="Mouth">
        <g id="Background-2" data-name="Background">
          <path
            d="M45.05,43a8.93,8.93,0,0,1-2.92,4.71,6.81,6.81,0,0,1-4,1.88A6.84,6.84,0,0,1,34,47.71,8.93,8.93,0,0,1,31.12,43a.72.72,0,0,1,.8-.81H44.26A.72.72,0,0,1,45.05,43Z"
            style="fill:#b71422"
          />
        </g>
      </g>
      <g id="Face">
        <path
          id="Eyes"
          d="M25.7,38.8a5.51,5.51,0,1,0-5.5-5.51A5.51,5.51,0,0,0,25.7,38.8Zm24.77,0A5.51,5.51,0,1,0,45,33.29,5.5,5.5,0,0,0,50.47,38.8Z"
          style="fill-rule:evenodd"
        />
        <path
          id="Iris"
          d="M24,33.64a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,24,33.64Zm24.77,0a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,48.75,33.64Z"
          style="fill:#fff;fill-rule:evenodd"
        />
      </g>
    </svg>
    Bun
  </label>
  <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
    <div class="absolute top-0 right-0 z-1">
      {#if onMount}
        <Clipboard text={`bun add -D daisyui@latest`} />
      {/if}
    </div>
    <pre data-prefix="$"><code>bun add -D daisyui@latest</code></pre>
  </div>
  <label
    class="tab has-checked:text-neutral-content! text-neutral gap-1.5 [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)]"
  >
    <input type="radio" name="install[packagemanager]" class="peer" />

    <svg
      class="peer-checked:text-neutral-content! text-base-content max-lg:hidden"
      width="14"
      height="14"
      viewBox="0 0 401 401"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(7.12289,0.543899,-0.543899,7.12289,-4887.56,-1060.49)">
        <path
          fill="currentColor"
          d="M732.64,127.358C737.384,127.229 742.158,124.731 743.368,120.393C744.578,116.055 743.665,111.926 737.977,109.842C732.289,107.757 729.523,104.974 724.945,103.517C721.954,102.565 718.779,103.508 715.604,105.593C707.053,111.209 700.244,127.409 705.034,141.571C705.102,141.765 705.029,141.979 704.857,142.092C704.686,142.204 704.459,142.184 704.309,142.044C698.919,136.94 695.554,129.718 695.554,121.716C695.554,106.264 708.099,93.719 723.551,93.719C739.002,93.719 751.547,106.264 751.547,121.716C751.547,128.205 749.335,134.181 745.623,138.931C742.768,142.35 738.929,144.066 735.631,144.259C733.24,144.399 730.832,143.627 729.111,142.361C726.654,140.551 725.549,138.353 725.037,135.844C724.909,135.221 724.825,133.502 725.062,132.289C725.238,131.385 725.727,129.627 726.576,128.81C725.481,128.435 724.042,127.545 723.575,127.101C723.461,126.992 723.461,126.807 723.546,126.674C723.63,126.54 723.793,126.478 723.945,126.52C724.88,126.763 726.013,126.986 727.198,127.093C728.756,127.233 730.694,127.41 732.64,127.358ZM721.316,105.751C722.813,105.518 724.225,106.703 724.582,108.395C725.058,110.649 724.402,113.065 721.658,113.329C719.314,113.555 718.422,111.242 718.468,109.796C718.513,108.35 719.525,106.03 721.316,105.751Z"
        />
      </g>
    </svg>
    Deno
  </label>
  <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
    <div class="absolute top-0 right-0 z-1">
      {#if onMount}
        <Clipboard text={`deno i -D npm:daisyui@latest`} />
      {/if}
    </div>
    <pre data-prefix="$"><code>deno i -D npm:daisyui@latest</code></pre>
  </div>
</div>
<p class="mx-auto mt-5 mb-2 w-full text-start">2. {$t("install-step-2")}:</p>
<div class="my-2 w-full max-w-4xl">
  <div class="tabs tabs-lift tabs-sm sm:tabs-md w-full">
    <input
      type="radio"
      name="install[jstype]"
      class="tab checked:text-neutral-content! text-neutral [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)]"
      aria-label="app.css"
      checked="checked"
    />
    <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
      <pre dir="ltr"><code
          ><span class="opacity-50">@import "tailwindcss";</span>
<span class="text-success">@plugin "daisyui";</span></code
        ></pre>
      <div class="absolute top-0 right-0 z-1">
        {#if onMount}
          <Clipboard text={`@plugin "daisyui";`} />
        {/if}
      </div>
    </div>
  </div>
</div>
