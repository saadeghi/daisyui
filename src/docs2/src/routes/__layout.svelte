<script context="module">
  export async function load({ page, fetch }) {
    if (page.path != "/") {
      const post = await fetch(`${page.path}.json`).then((res) => res.json());
      if (page.path != "/index") {
        return {
          props: {
            path: page.path,
            post,
          },
        }
      }
    }else{
      return{
        props: {
          path: page.path,
        }
      }
    }
  }
</script>

<script>

  if (process.env.NODE_ENV === "development") {
    import('../../../../dist/themes.css')
    const base = import.meta.globEager('../../../base/*.css')
    import('tailwindcss/base.css')
    const unstyled = import.meta.globEager('../../../components/unstyled/*.css')
    const styled = import.meta.globEager('../../../components/styled/*.css')
    import('tailwindcss/components.css')
    const utilitiesGlobal = import.meta.globEager('../../../utilities/global/*.css')
    const utilitiesUnstyled = import.meta.globEager('../../../utilities/unstyled/*.css')
    const utilitiesStyled = import.meta.globEager('../../../utilities/styled/*.css')
    import('tailwindcss/utilities.css')
  }
  if (process.env.NODE_ENV === "production") {
    // import('../tailwind.css')
  }
  import "prism-themes/themes/prism-material-dark.css";

  import Navbar from "@components/Navbar.svelte";
  import Scripts from "@components/Scripts.svelte";

  import Sidebar from "@components/Sidebar.svelte";
  import InstallTabs from "@components/InstallTabs.svelte";
  export let post;
  export let path;

</script>

<style global>
  .prose pre[class*="language-"]{
    max-width: 48rem;
    background-color: hsl(var(--n));
    color: hsl(var(--nc));
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
</svelte:head>

<Navbar />

<div class={`bg-base-100 drawer h-[calc(100vh-4rem)] ${post ? 'drawer-mobile' : ''}`}>
  <input id="drawer" type="checkbox" class="drawer-toggle" />
  <div class={`border-t drawer-content border-base-content border-opacity-5 ${post ? 'p-6 pb-16' : ''}`}>
    {#if (post)}
      <div class="max-w-full prose">
        <h1>{post.title ? post.title : ""}</h1>
        {#if path.startsWith("/docs/install")}
          <InstallTabs/>
        {/if}
        <slot />
      </div>
    {:else}
      <slot />
    {/if}
  </div>
  <div class="border-t drawer-side border-base-content border-opacity-5">
    <label for="drawer" class="drawer-overlay" />
    <aside class="pb-10 w-80 bg-base-200">
      <Sidebar/>
    </aside>
  </div>
</div>

<Scripts />

