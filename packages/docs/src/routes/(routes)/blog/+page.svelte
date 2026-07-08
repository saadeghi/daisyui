<script>
  import SEO from "$components/SEO.svelte"
  let { data } = $props()
  let { posts } = data
</script>

<SEO
  title="daisyUI Blog"
  desc="daisyUI blog - Updates, ideas and resources"
  img="https://img.daisyui.com/images/blog.webp"
/>
{#if posts.length === 0}
  <div
    class="border-base-content/10 rounded-box flex h-96 w-full grow flex-col items-center justify-center border"
  >
    <h1 class="text-base-content/30">Coming soon</h1>
  </div>
{/if}
<div class="breadcrumbs text-xs m-6">
  <ul>
    <li><h1 class="no-underline cursor-text opacity-60">daisyUI Blog</h1></li>
  </ul>
</div>
<div class="grid justify-items-stretch gap-6">
  {#each posts as post}
    <a
      class="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"
      href={`/blog/${post.slug}/`}
    >
      {#if post.thumbnail}
        <figure class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-48 sm:pe-0">
          <img
            loading="lazy"
            src={post.thumbnail}
            class="border-base-content/5 bg-base-300 rounded-field border"
            alt={post.title}
          />
        </figure>
      {/if}
      <div class="card-body">
        <h2 class="card-title font-title">
          {post.title}
        </h2>
        <p class="text-xs opacity-60">
          {post.desc}
        </p>
      </div>
    </a>
  {/each}
</div>
