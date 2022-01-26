<script context="module">
  export async function load({ page, fetch }) {
    const post = await fetch(`${page.path}.json`).then((res) => res.json());
    if (page.path != "/index") {
      return {
        props: {
          path: page.path,
          post,
        },
      }
    }
  }
</script>

<script>
  import { page } from "$app/stores";
  import SEO from "@components/SEO.svelte";
  import Sidebar from "@components/Sidebar.svelte";
  import InstallTabs from "@components/InstallTabs.svelte";
  export let post;
  export let path;
</script>

{#key $page.path}
  <SEO title={post.title} desc={post.desc} />
{/key}
{#if path == '/'+$page.path.split('/')[1]}
  <slot />
{:else}
  <div class="bg-base-100 drawer drawer-mobile h-[calc(100vh-4rem)]">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <div class="p-6 pb-16 border-t drawer-content border-base-content border-opacity-5">
      <div class="max-w-full prose">
        <h1>{post.title ? post.title : ""}</h1>
        {#if path.startsWith("/docs/install")}
          <InstallTabs/>
        {/if}
        <slot />
      </div>
    </div>
    <div class="border-t drawer-side border-base-content border-opacity-5">
      <label for="drawer" class="drawer-overlay" />
      <aside class="pb-10 w-80 bg-base-200">
        <Sidebar/>
      </aside>
    </div>
  </div>
{/if}
