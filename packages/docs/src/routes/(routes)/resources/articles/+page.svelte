<script>
  import SEO from "$components/SEO.svelte"
  let { data } = $props()
</script>

<SEO
  title="daisyUI community articles"
  desc="Tailwind CSS articles and daisyUI tutorials"
  img="https://img.daisyui.com/images/resources.webp"
/>

<div class="flex flex-col items-center gap-6">
  <h1 class="font-title text-base-content text-3xl font-extrabold lg:text-4xl xl:text-6xl">
    daisyUI community articles
  </h1>
  <p class="text-base-content/60 text-xs italic">
    If you have an article or blog post about daisyUI, <a
      href="https://github.com/saadeghi/daisyui/blob/master/packages/docs/src/lib/data/articles.js"
      target="_blank"
      rel="noopener, noreferrer"
      class="link"
    >
      add it here
    </a>
  </p>
</div>
<div class="flex flex-col gap-8 py-20">
  {#each data.articles as article}
    <a
      class="rounded-box hover:bg-base-200 group relative flex items-center justify-between overflow-hidden p-4 duration-300"
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <h2 class="font-title text-xl font-bold group-hover:underline">{article.title}</h2>
        <p class="text-base-content/60 text-sm font-bold">by {article.site}</p>
      </div>
      <svg
        class="inline-block h-5 w-5 opacity-0 duration-300 group-hover:opacity-50"
        width="18"
        height="18"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 11H37V29"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="butt"
          stroke-linejoin="bevel"
        >
        </path>
        <path
          d="M11.5439 36.4559L36.9997 11"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="butt"
          stroke-linejoin="bevel"
        >
        </path>
      </svg>
    </a>
  {:else}
    <div class="lg:col-span-2 flex justify-center items-center font-bold text-base-content/20">
      Coming soon…
    </div>
  {/each}
</div>
