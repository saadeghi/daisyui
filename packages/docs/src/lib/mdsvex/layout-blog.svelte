<script>
  import { page } from "$app/stores"
  import SEO from "$components/SEO.svelte"
  import { timeago, formattedDate } from "$lib/util"
  let { title, desc, date, author, tags, thumbnail, published, children } = $props()
  const slug = $page.url.pathname.split("/").at(-2)
</script>

<SEO {title} {desc} img={thumbnail} />

<div class="prose prose-sm md:prose-base mx-auto">
  {#if thumbnail}
    <figure class="w-full">
      <img
        loading="lazy"
        src={thumbnail}
        class="border-base-content/5 bg-base-300 rounded-box border"
        alt={title}
      />
    </figure>
  {/if}
  <div>
    <div class="text-base-content/60 mb-2 text-xs">
      <span title={formattedDate(date)} class="italic">
        Published {timeago(date)}
      </span>
      {#if author}
        by
        <span>
          {author}
        </span>
      {/if}
    </div>
    {#if title}
      <h1>{title}</h1>
    {/if}
    {#if desc}
      <p>{desc}</p>
    {/if}
    {@render children?.()}
  </div>
  {#if published && tags}
    <div class="mb-2 flex flex-wrap gap-2 text-xs opacity-60">
      <span>Tags:</span>
      {#each tags as tag}
        <a class="link" href={`/blog/tag/${tag.replace(/ /g, "-").toLowerCase()}`}>
          {tag}
        </a>
      {/each}
    </div>
  {/if}
</div>
