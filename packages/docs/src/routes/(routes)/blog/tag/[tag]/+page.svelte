<script>
  import SEO from "$components/SEO.svelte"
  let { data } = $props()
</script>

<SEO
  title={data.params.tag.replace(/-/g, " ")}
  desc={`daisyUI blog posts with '${data.params.tag.replace(/-/g, " ")}' tag`}
/>
<div class="grid justify-items-stretch gap-6">
  {#each data.posts as post}
    <a
      class="card sm:card-side hover:bg-base-200 max-w-sm transition-colors sm:max-w-none"
      href={`/blog/${post.slug}`}
    >
      {#if post.thumbnail}
        <figure class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0">
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
