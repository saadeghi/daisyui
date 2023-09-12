<script>
  import SEO from "@components/SEO.svelte"
  export let data
  let { posts } = data
</script>

<SEO title="title" desc="desc" />

<div class="grid gap-6 justify-items-stretch">
  {#each posts as post}
    {#if post.published === true}
      <a
        class="card sm:card-side max-w-sm sm:max-w-none hover:bg-base-200 transition-colors"
        href={`/blog/${post.slug}`}>
        {#if post.thumbnail}
          <figure class="max-w-[12rem] w-full object-cover mx-auto sm:pr-0 p-6 max-sm:pb-0">
            <img
              loading="lazy"
              src={post.thumbnail}
              class="border-base-content bg-base-300 rounded-btn border border-opacity-5"
              alt={post.title}
              style={`view-transition-name: ${encodeURI(post.slug).replaceAll("%20", "-")}-img`} />
          </figure>
        {/if}
        <div
          class="card-body"
          style={`view-transition-name: ${encodeURI(post.slug).replaceAll("%20", "-")}-text`}>
          <h2 class="card-title">
            {post.title}
          </h2>
          <p class="text-xs opacity-60">
            {post.desc}
          </p>
        </div>
      </a>
    {/if}
  {/each}
</div>
