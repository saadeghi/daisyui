<script>
  import { page } from "$app/stores"
  import { menu } from "@src/lib/data.js"
  import { pkgVersion } from "$lib/util"
  export let closeDrawer
</script>

<div class={`bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 gap-4 items-center gap-2 px-4 py-2 hidden ${$page.path == "/" ? "" : "lg:flex"}`}>
  <a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost active nuxt-link-active px-2">
    <div class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
      <span class="lowercase">daisy</span>
      <span class="text-base-content uppercase">UI</span>
    </div>
  </a>
  <a href="https://github.com/saadeghi/daisyui/blob/master/CHANGELOG.md" target="_blank" rel="nofollow" class="link link-hover font-mono text-xs text-opacity-50">
    <div data-tip="Changelog" class="tooltip tooltip-bottom">
      {pkgVersion()}
    </div>
  </a>
</div>

{#each menu as { name, items }}
  <ul class="menu menu-compact flex flex-col p-2 px-4">
    <li class="menu-title"><span>{name}</span></li>
    {#each items as { name, href, icon, badge }}
      <li>
        <a
          {href}
          on:click={closeDrawer}
          class={`flex gap-4 
          ${$page.path == href ? "active" : ""}
          ${$page.path.startsWith(href + "/") ? "active" : ""}
        `}
        >
          {#if icon != ""}
            <span class="flex-none">
              {@html icon}
            </span>
          {/if}
          <span class="flex-1">
            {@html name}
          </span>
          {#if badge != ""}
            <span class="badge badge-sm flex-none lowercase">{badge}</span>
          {/if}
        </a>
      </li>
    {/each}
  </ul>
{/each}
