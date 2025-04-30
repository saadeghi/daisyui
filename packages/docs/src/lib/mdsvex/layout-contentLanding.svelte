<script>
  import { page } from "$app/stores"
  import LogoHorizontal from "$components/LogoHorizontal.svelte"
  import CompanyLogos from "$components/CompanyLogos.svelte"
  import Footer from "$components/Footer.svelte"
  import SEO from "$components/SEO.svelte"
  import { t } from "$lib/i18n.svelte.js"
  let { title, desc, children } = $props()
</script>

<SEO
  {title}
  {desc}
  img={`https://img.daisyui.com/images${$page.url.pathname.replace(/\/$/, "")}.webp`}
/>
<div class="mx-auto max-w-4xl px-4 py-20">
  <div
    class="prose prose-sm lg:prose-h1:text-5xl lg:prose-h2:text-4xl lg:prose-h3:text-3xl md:prose-base w-full max-w-4xl grow pt-10 md:text-sm"
  >
    {#if title}
      <h1>{@html $t(title)}</h1>
    {/if}
    {#if desc}
      <p>{@html $t(desc)}</p>
    {/if}
    {@render children?.()}

    <div class="not-prose pt-12">
      <div class="from-base-content/5 rounded-box bg-gradient-to-b">
        <div class="mx-auto max-w-92 pt-40 pb-20">
          <LogoHorizontal />
        </div>
      </div>
      <CompanyLogos />

      <div class="flex justify-center">
        <a href="/docs/install/" class="btn-primary btn btn-wide mt-4 mb-20 shadow-lg"
          >How to install daisyUI?</a
        >
      </div>
    </div>
  </div>
</div>
<Footer />
