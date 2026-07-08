<script>
  import { page } from "$app/stores"
  import SEO from "$components/SEO.svelte"
  import Translate from "$components/Translate.svelte"
  import AlternativeSidebar from "$components/AlternativeSidebar.svelte"
  let { data } = $props()
  let { components } = data
</script>

<SEO
  title="Tailwind CSS Components"
  formatTitle={false}
  desc="Tailwind CSS component examples by daisyUI. Browse semantic UI components, copy-ready markup, and reusable design patterns."
/>
<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
  <div class="flex flex-col gap-6 ps-6 pt-10">
    <div class="prose max-w-4xl grow">
      <h1><Translate text="All daisyUI components" /></h1>
      <p>{Object.keys(components).length} <Translate text="components" /></p>
    </div>
    <div class="not-prose grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3! lg:grid-cols-4">
      {#each components as { slug, title, desc }}
        <a
          class="card card-sm hover:bg-base-200 transition-all duration-200 hover:-translate-y-1"
          href={`${$page.url.pathname.replace(/\/$/, "")}/${slug}/`}
        >
          <figure class="px-3 pt-3">
            <img
              loading="lazy"
              src={`https://img.daisyui.com/images/components/${slug}.webp`}
              class="border-base-content/5 bg-base-300 rounded-lg border"
              alt={`Tailwind CSS ${title} component`}
            />
          </figure>
          <div class="card-body relative">
            <h2 class="card-title font-normal text-sm">
              <Translate text={title} />
            </h2>
            <p class="sr-only opacity-50"><Translate text={desc || ""} /></p>
          </div>
        </a>
      {/each}
    </div>
  </div>
  <AlternativeSidebar />
</div>
