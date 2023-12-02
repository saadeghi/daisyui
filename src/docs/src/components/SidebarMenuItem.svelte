<script>
  import { browser } from "$app/environment"

  import { page } from "$app/stores"
  import { t } from "$lib/i18n"
  import SidebarMenuItem from "$components/SidebarMenuItem.svelte"
  export let closeDrawer
  export let name = null,
    href = null,
    icon = null,
    badge = null,
    badgeclass = null,
    highlightAnotherItem = null,
    deprecated = null,
    items = null,
    collapsible = null,
    target = null

  const sanitize = (name) => {
    return name.toLowerCase().replace(/\W/g, "-")
  }
  $: getDisclosureState = (name, items) => {
    // open the disclosure if the user has opened it before
    if (browser && localStorage.getItem(`disclosure-${sanitize(name)}`) === "open") {
      return "open"
    }
    // open the disclosure if the current page is a child of the disclosure
    if (
      items.some((item) => item.href === $page.url.pathname) ||
      items.some((item) => item.items?.some((subitem) => subitem.href === $page.url.pathname))
    ) {
      return "open"
    }

    return null
  }
  const saveDisclosureState = (id, value) => {
    if (browser) {
      localStorage.setItem(id, value)
    }
  }
</script>

{#if name}
  <li>
    {#if items}
      {#if collapsible}
        <details
          id={`disclosure-${sanitize(name)}`}
          open={getDisclosureState(name, items)}
          on:toggle={(el) => saveDisclosureState(el.target.id, el.target.open ? "open" : "close")}>
          <summary class="group">
            {#if icon}
              <span>{@html icon}</span>
            {/if}
            {$t(name)}
          </summary>
          <ul>
            {#each items as { name, href, icon, badge, badgeclass, highlightAnotherItem, deprecated, items }}
              <SidebarMenuItem
                {closeDrawer}
                {name}
                {href}
                {icon}
                {badge}
                {badgeclass}
                {highlightAnotherItem}
                {deprecated}
                {items} />
            {/each}
          </ul>
        </details>
      {:else}
        {#if !href}
          <h2 class="menu-title flex items-center gap-4 px-1.5">
            {#if icon}
              <span class="text-base-content">{@html icon}</span>
            {/if}
            {$t(name)}
          </h2>
        {/if}
        {#if items}
          <ul>
            {#each items as { name, href, icon, badge, badgeclass, highlightAnotherItem, deprecated, items }}
              <SidebarMenuItem
                {closeDrawer}
                {name}
                {href}
                {icon}
                {badge}
                {badgeclass}
                {highlightAnotherItem}
                {deprecated}
                {items} />
            {/each}
          </ul>
        {/if}
      {/if}
    {/if}
    {#if !items && href}
      <a
        {href}
        target={target === "blank" ? "_blank" : undefined}
        rel={target === "blank" ? "noopener noreferrer" : undefined}
        on:click={closeDrawer}
        class={`group ${$page.url.pathname == href ? "active" : ""} ${
          $page.url.pathname == highlightAnotherItem ? "active" : ""
        } ${$page.url.pathname.startsWith(href) ? "active" : ""}`}>
        {#if icon}
          <span>
            {@html icon}
          </span>
        {/if}
        <span class={deprecated ? "line-through" : undefined}>
          {@html $t(name)}
        </span>
        {#if badge}
          <span class={`badge badge-sm font-mono ${badgeclass && badgeclass}`}>
            {$t(badge)}
          </span>
        {/if}
        {#if target === "blank"}
          <svg
            width="12"
            height="12"
            class="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 11H37V29"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="butt"
              stroke-linejoin="bevel" />
            <path
              d="M11.5439 36.4559L36.9997 11"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="butt"
              stroke-linejoin="bevel" />
          </svg>
        {/if}
      </a>
    {/if}
  </li>
{:else if !items}
  <li />
{/if}
