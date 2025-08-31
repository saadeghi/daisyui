<script>
  let version = $props()
</script>

<div class="dropdown" data-sveltekit-preload-data>
  <div
    dir="ltr"
    tabindex="0"
    role="button"
    class="link link-hover text-base-content/60 relative -top-1 inline-block font-mono text-[0.625rem]"
  >
    {version.version}
    <svg
      class="text-base-content/60 -mt-0.25 hidden size-2 fill-current sm:inline-block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048"
    >
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  </div>
  <ul
    tabindex="0"
    class="dropdown-content menu menu-sm bg-base-200 rounded-box mt-7 w-36 border-[length:var(--border)] border-white/5 p-2 shadow-2xl outline-[length:var(--border)] outline-black/5"
  >
    <li>
      <a href="/docs/changelog/">
        <svg
          width="14"
          height="14"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.81836 6.72729V14H13.0911"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
          </path>
          <path
            d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C16.598 4 10.1351 8.02111 6.67677 13.9981"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
          </path>
          <path
            d="M24.005 12L24.0038 24.0088L32.4832 32.4882"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
          </path>
        </svg>
        Changelog
      </a>
    </li>
    <li></li>
    <li>
      <a href="/docs/v5/">v5 release notes </a>
    </li>
    <li></li>
    <li>
      <a target="_blank" rel="noopener, noreferrer" href="https://v4.daisyui.com/">Version 4.x</a>
    </li>
    <li>
      <a target="_blank" rel="noopener, noreferrer" href="https://v3.daisyui.com/">Version 3.x</a>
    </li>
    <li>
      <a target="_blank" rel="noopener, noreferrer" href="https://v2.daisyui.com/">Version 2.x</a>
    </li>
    <li>
      <a target="_blank" rel="noopener, noreferrer" href="https://v1.daisyui.com/">Version 1.x</a>
    </li>
    <li></li>
    <li>
      <a href="/docs/roadmap/">
        <svg
          width="14"
          height="14"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 12L4 6V36L17 42L31 36L44 42V12L31 6L17 12Z"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
          </path>
          <path
            d="M31 6V36"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
          </path>
          <path
            d="M17 12V42"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
          </path>
          <path
            d="M10.5 9L17 12L31 6L37.5 9"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
          </path>
          <path
            d="M10.5 39L17 42L31 36L37.5 39"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
          </path>
        </svg>
        Roadmap
      </a>
    </li>
  </ul>
</div>
