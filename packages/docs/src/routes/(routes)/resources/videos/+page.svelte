<script>
  import SEO from "$components/SEO.svelte"
  import { slugify } from "$lib/util"
  let { data } = $props()
</script>

<SEO
  title="daisyUI community videos"
  desc="Best Tailwind CSS video tutorials and Free Tailwind CSS video courses"
  img="https://img.daisyui.com/images/resources.webp"
/>
<div class="flex flex-col items-center gap-6">
  <h1 class="font-title text-base-content text-3xl font-extrabold lg:text-4xl xl:text-6xl">
    daisyUI community videos
  </h1>
  <p class="text-base-content/60 text-xs italic">
    If you have a YouTube video about daisyUI, <a
      href="https://github.com/daisyui/api/blob/master/youtube_ids.json"
      target="_blank"
      rel="noopener, noreferrer"
      class="link"
    >
      add it here
    </a>
  </p>
</div>
<div class="py-20">
  <div class="grid gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#each data.videos as video}
      <a
        class="rounded-box group relative flex flex-col gap-6 overflow-hidden p-2"
        href={video.status.embeddable == true
          ? `/resources/videos/${slugify(video.snippet.title)}-${slugify(video.id)}`
          : `https://www.youtube.com/watch?v=${video.id}`}
        target={video.status.embeddable == false ? `_blank` : null}
        rel={video.status.embeddable == false ? `noopener noreferrer` : null}
      >
        <figure
          class="rounded-field grid aspect-video place-content-center overflow-hidden shadow-sm transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
        >
          <img
            loading="lazy"
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
            class="w-full"
          />
        </figure>
        <div class="flex items-center justify-between gap-4">
          <div class="grow">
            <h2 class="text-xs font-semibold">{video.snippet.title}</h2>
            <p class="text-base-content/60 mt-2 text-[0.6875rem]">{video.snippet.channelTitle}</p>
          </div>
        </div>
      </a>
    {:else}
      <div class="lg:col-span-2 flex justify-center items-center font-bold text-base-content/20">
        Coming soon…
      </div>
    {/each}
  </div>
</div>
