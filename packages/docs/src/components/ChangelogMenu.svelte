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
    class="dropdown-content menu menu-sm bg-base-200 rounded-box mt-7 w-36 border border-white/5 p-2 shadow-2xl outline-1 outline-black/5"
  >
    <li>
      <a href="/docs/v5/">
        <svg
          class="text-blue-500"
          width="14"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="currentColor"
            ><defs><path id="1733501816477-2951362_a" d="M0 0h48v48H0V0z"></path></defs><clipPath
              id="1733501816477-2951362_b"
              ><use xlink:href="#1733501816477-2951362_a" overflow="visible"></use></clipPath
            ><path
              clip-path="url(#1733501816477-2951362_b)"
              d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM17 30h-2.4l-5.1-7v7H7V18h2.5l5 7v-7H17v12zm10-9.49h-5v2.24h5v2.51h-5v2.23h5V30h-8V18h8v2.51zM41 28c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2V18h2.5v9.01h2.25v-7.02h2.5v7.02h2.25V18H41v10z"
            ></path></g
          ></svg
        >
        daisyUI 5
      </a>
    </li>
    <li></li>
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
