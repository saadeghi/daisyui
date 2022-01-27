<script>
  import { page } from "$app/stores"
  const tabs = [
    {
      name: "Tailwind Plugin",
      href: "/docs/install/tailwindcss",
    },
    {
      name: "Use CDN",
      href: "/docs/install/cdn",
    },
    {
      name: "WindiCSS",
      href: "/docs/install/windicss",
    },
    {
      name: "Tachyons",
      href: "/docs/install/tachyons",
    },
    {
      name: "BassCSS",
      href: "/docs/install/basscss",
    },
  ]
</script>

<div class="mb-10 overflow-x-auto">
  <div class="tabs flex-nowrap whitespace-nowrap">
    {#each tabs as { name, href }}
      <a {href} class={`no-underline tab tab-lifted tab-lg ${$page.path == href ? "tab-active" : ""}`}>
        {name}
      </a>
    {/each}

    <a target="_blank" rel="noopener" href="https://github.com/saadeghi/daisyui/tree/master/examples" class="tab tab-lifted no-underline tab-lg">
      <span class="link flex items-center text-xs">
        More examples on github
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" class="ml-2 fill-current"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V12H19V19Z" /></svg>
      </span>
    </a>
    <span class="tab tab-lifted flex-grow cursor-default no-underline tab-lg" />
  </div>
</div>
