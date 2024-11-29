<script>
  import { page } from "$app/stores"
  const tabs = [
    {
      title: "Examples",
      slug: "",
      icon: '<svg class="text-base-content opacity-50" width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 13L4 25.4322L16 37" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 13L44 25.4322L32 37" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 4L21 44" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',
    },
    {
      title: "Design spec",
      slug: "design/",
      icon: '<svg class="text-base-content opacity-50" width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 44L4 4V44H44Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    },
    {
      title: "Accessibility",
      slug: "accessibility/",
      icon: '<svg class="text-base-content opacity-50" width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 10L20 20.254V29.9683L10.8571 44" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 10L28 20.254V29.9683L37.1429 44" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="8" r="4" fill="currentColor" stroke="currentColor" stroke-width="4"/></svg>',
    },
  ]
</script>

<nav class="tabs not-prose tabs-lift lg:tabs-lg my-10 flex-nowrap whitespace-nowrap">
  {#each tabs as tab}
    <a
      href={`/components/${$page.url.pathname.split("/")[2]}/${tab.slug}`}
      class={`tab gap-3 ${
        $page.url.pathname.split("/")[3] === tab.slug.replace("/", "") ? "tab-active" : ""
      }`}
    >
      <span class="hidden lg:inline">{@html tab.icon}</span>
      {tab.title}
    </a>
  {/each}
  <span class="tab"></span>
</nav>
