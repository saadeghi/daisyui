<script context="module">
  export async function load({ page, fetch }) {
    if (page.path != "/") {
      const post = await fetch(`${page.path}.json`).then((res) => res.json())
      if (page.path != "/index") {
        return {
          props: {
            path: page.path,
            post,
          },
        }
      }
    } else {
      return {
        props: {
          path: page.path,
        },
      }
    }
  }
</script>

<script>
  if (process.env.NODE_ENV === "production") {
    import("@components/StyleProduction.svelte")
  }
  if (process.env.NODE_ENV === "development") {
    import("@components/StyleDevelopment.svelte")
  }
  import "prism-themes/themes/prism-material-dark.css"

  import Navbar from "@components/Navbar.svelte"
  import Scripts from "@components/Scripts.svelte"

  import Sidebar from "@components/Sidebar.svelte"
  import InstallTabs from "@components/InstallTabs.svelte"
  export let post
  export let path
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
</svelte:head>

<Navbar />

<div class={`bg-base-100 drawer h-[calc(100vh-4rem)] ${post ? "drawer-mobile" : ""}`}>
  <input id="drawer" type="checkbox" class="drawer-toggle" />
  <div class={`border-t drawer-content h-[calc(100vh-4rem)] border-base-content border-opacity-5 ${post ? "p-6 pb-16" : ""}`}>
    {#if post}
      <div class="prose max-w-full">
        <h1>{post.title ? post.title : ""}</h1>
        {#if path.startsWith("/docs/install")}
          <InstallTabs />
        {/if}
        <slot />
      </div>
    {:else}
      <slot />
    {/if}
  </div>
  <div class="drawer-side border-base-content border-t border-opacity-5">
    <label for="drawer" class="drawer-overlay" />
    <aside class="bg-base-200 w-80 pb-10">
      <Sidebar />
    </aside>
  </div>
</div>

<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>

<div class="modal" id="my-modal-2">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="btn" rel="external">Yay!</a>
    </div>
  </div>
</div>

<Scripts />

<style global>
  .prose pre[class*="language-"] {
    max-width: 48rem;
    background-color: hsl(var(--n));
    color: hsl(var(--nc));
  }
</style>
