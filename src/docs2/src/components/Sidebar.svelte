<script>
  import { page } from "$app/stores"
  import { menu } from "@src/lib/data.js"
</script>

{#each menu as { name, items }}
  <ul class="menu menu-compact flex flex-col p-2 px-4">
    <li class="menu-title"><span>{name}</span></li>
    {#each items as { name, href, icon, badge }}
      <li>
        <a
          {href}
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
