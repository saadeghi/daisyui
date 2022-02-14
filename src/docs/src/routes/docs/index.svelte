<script context="module">
  export async function load({ fetch }) {
    // Use a `limit` querystring parameter to fetch a limited number of posts
    // e.g. fetch('posts.json?limit=5') for 5 most recent posts
    const posts = await fetch("/docs.json").then((res) => res.json())
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

<SEO title="Docs" desc="Docs" />
<a class="btn" href="/">home</a>
<div class="mx-auto flex w-full max-w-7xl gap-4 px-4">
  {#each posts as { slug, title, desc, thumbnail }}
    <a class="card w-full bg-base-200 shadow md:w-1/3 lg:w-1/4" href={`${$page.url.pathname}/${slug}`}>
      <figure>
        <img src={thumbnail || "/default.svg"} class="aspect-square bg-base-300" alt={title} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{desc || ""}</p>
      </div>
    </a>
  {/each}
</div>
