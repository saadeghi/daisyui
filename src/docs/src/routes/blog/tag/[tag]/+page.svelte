<script>
  import SEO from "$components/SEO.svelte"
  export let data
  let { params, posts } = data
</script>

<SEO
  title={params.tag.replace(/-/g, " ")}
  desc={`daisyUI blog posts with '${params.tag.replace(/-/g, " ")}' tag`} />
<div class="grid justify-items-stretch gap-6">
  {#each posts as post}
    <a
      class="card sm:card-side hover:bg-base-200 max-w-sm transition-colors sm:max-w-none"
      href={`/blog/${post.slug}`}>
      {#if post.thumbnail}
        <figure class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0">
          <img
            loading="lazy"
            src={post.thumbnail}
            class="border-base-content bg-base-300 rounded-btn border border-opacity-5"
            alt={post.title}
            style={`view-transition-name: ${encodeURI(post.slug).replace(/[^a-zA-Z]/g, "")}-img`} />
        </figure>
      {/if}
      <div
        class="card-body"
        style={`view-transition-name: ${encodeURI(post.slug).replace(/[^a-zA-Z]/g, "")}-text`}>
        <h2 class="card-title">
          {post.title}
        </h2>
        <p class="text-xs opacity-60">
          {post.desc}
        </p>
      </div>
    </a>
  {/each}
</div>
