<script context="module">
  export async function load({ fetch }) {
    // Use a `limit` querystring parameter to fetch a limited number of posts
    // e.g. fetch('posts.json?limit=5') for 5 most recent posts
    const posts = await fetch("/components.json").then((res) => res.json())
    return {
      props: {
        posts,
      },
    }
  }
</script>

<script>
  import { page } from "$app/stores"
  export let posts
  import SEO from "@components/SEO.svelte"
</script>

<SEO title="Components" desc="Components" />

<div class="flex flex-col gap-6">
  <div class="prose max-w-4xl flex-grow">
    <h1>All daisyUI components</h1>
    <p>{Object.keys(posts).length} components</p>
  </div>
  <div class="not-prose grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
    {#each posts as { slug, title, desc, thumbnail }}
      <a class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1" href={`${$page.path}/${slug}`}>
        <figure class="px-4 pt-4">
          <img src={thumbnail || `/component-images/${slug}.jpg`} class="bg-base-300 border-base-content rounded-lg border border-opacity-5" alt={title} />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p>{desc || ""}</p>
        </div>
      </a>
    {/each}
  </div>
</div>
