<script>
  import SEO from "$components/SEO.svelte"
  import Install from "$components/homepage/Install.svelte"
  import Footer from "$components/Footer.svelte"
  import { t } from "$lib/i18n.svelte.js"

  let { data } = $props()

  function formatValue(value) {
    return typeof value === "boolean" ? (value ? "Yes" : "No") : value
  }

  const seoKeywords = [
    `${data.library.name} alternative`,
    "CSS components library",
    "Tailwind CSS components",
    "UI component library",
    "React components",
    "Vue components",
    "JavaScript framework components",
    "lightweight UI library",
    "themeable CSS components",
    "modern CSS framework",
  ]
</script>

<SEO
  title="{data.library.name} Alternative in {new Date().getFullYear()} - Why daisyUI is better?"
  desc="Looking for a {data.library
    .name} alternative? daisyUI is the best CSS components library and a better alternative to {data
    .library
    .name}. Compare features, size, and performance to see why developers choose daisyUI over {data
    .library.name}."
  keywords={seoKeywords.join(", ")}
/>

<div class="mx-auto max-w-4xl px-4 py-20">
  <div
    class="from-base-300 rounded-box outline-base-content/5 mb-16 flex h-80 items-center justify-center gap-8 bg-linear-to-b bg-center outline-2 outline-offset-6"
    style={`background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='400' cy='400' r='24.2%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23DBDBDB'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='400' cy='400' r='100%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23DEDEDE'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='800'/%3E%3Cg fill-opacity='0.26'%3E%3Cpath fill='url(%23b)' d='M998.7 439.2c1.7-26.5 1.7-52.7 0.1-78.5L401 399.9c0 0 0-0.1 0-0.1l587.6-116.9c-5.1-25.9-11.9-51.2-20.3-75.8L400.9 399.7c0 0 0-0.1 0-0.1l537.3-265c-11.6-23.5-24.8-46.2-39.3-67.9L400.8 399.5c0 0 0-0.1-0.1-0.1l450.4-395c-17.3-19.7-35.8-38.2-55.5-55.5l-395 450.4c0 0-0.1 0-0.1-0.1L733.4-99c-21.7-14.5-44.4-27.6-68-39.3l-265 537.4c0 0-0.1 0-0.1 0l192.6-567.4c-24.6-8.3-49.9-15.1-75.8-20.2L400.2 399c0 0-0.1 0-0.1 0l39.2-597.7c-26.5-1.7-52.7-1.7-78.5-0.1L399.9 399c0 0-0.1 0-0.1 0L282.9-188.6c-25.9 5.1-51.2 11.9-75.8 20.3l192.6 567.4c0 0-0.1 0-0.1 0l-265-537.3c-23.5 11.6-46.2 24.8-67.9 39.3l332.8 498.1c0 0-0.1 0-0.1 0.1L4.4-51.1C-15.3-33.9-33.8-15.3-51.1 4.4l450.4 395c0 0 0 0.1-0.1 0.1L-99 66.6c-14.5 21.7-27.6 44.4-39.3 68l537.4 265c0 0 0 0.1 0 0.1l-567.4-192.6c-8.3 24.6-15.1 49.9-20.2 75.8L399 399.8c0 0 0 0.1 0 0.1l-597.7-39.2c-1.7 26.5-1.7 52.7-0.1 78.5L399 400.1c0 0 0 0.1 0 0.1l-587.6 116.9c5.1 25.9 11.9 51.2 20.3 75.8l567.4-192.6c0 0 0 0.1 0 0.1l-537.3 265c11.6 23.5 24.8 46.2 39.3 67.9l498.1-332.8c0 0 0 0.1 0.1 0.1l-450.4 395c17.3 19.7 35.8 38.2 55.5 55.5l395-450.4c0 0 0.1 0 0.1 0.1L66.6 899c21.7 14.5 44.4 27.6 68 39.3l265-537.4c0 0 0.1 0 0.1 0L207.1 968.3c24.6 8.3 49.9 15.1 75.8 20.2L399.8 401c0 0 0.1 0 0.1 0l-39.2 597.7c26.5 1.7 52.7 1.7 78.5 0.1L400.1 401c0 0 0.1 0 0.1 0l116.9 587.6c25.9-5.1 51.2-11.9 75.8-20.3L400.3 400.9c0 0 0.1 0 0.1 0l265 537.3c23.5-11.6 46.2-24.8 67.9-39.3L400.5 400.8c0 0 0.1 0 0.1-0.1l395 450.4c19.7-17.3 38.2-35.8 55.5-55.5l-450.4-395c0 0 0-0.1 0.1-0.1L899 733.4c14.5-21.7 27.6-44.4 39.3-68l-537.4-265c0 0 0-0.1 0-0.1l567.4 192.6c8.3-24.6 15.1-49.9 20.2-75.8L401 400.2c0 0 0-0.1 0-0.1L998.7 439.2z'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;`}
  >
    <div
      class="bg-base-100 flex size-24 -rotate-5 items-center rounded-full p-4 align-middle shadow-2xl outline-4 outline-offset-6 outline-black/5 lg:size-48"
    >
      {@html data.daisyui.logo}
    </div>
    <div
      class="bg-base-300 flex size-16 translate-y-[7%] rotate-5 items-center rounded-full p-4 align-middle outline-2 outline-offset-6 outline-black/0 blur-[0.5px] grayscale lg:size-32"
    >
      {@html data.library.logo}
    </div>
  </div>
  <p class="text-base-content/80 mb-4 text-lg italic">
    <a
      class="link badge text-base-content/60 link-hover text-xs"
      href={`/compare/${data.library.key}-vs-daisyui`}>Compare {data.library.name} with daisyUI</a
    >
  </p>
  <h1 class="font-title text-3xl font-bold lg:text-4xl">
    daisyUI is a better {data.library.name} Alternative
  </h1>
  <div class="h-6"></div>
  <p class="text-base-content/70 mb-8 text-lg italic">
    {data.introText.replaceAll("{libraryName}", data.library.name)}
  </p>
  <p class="text-base-content/70 mb-8 text-lg">
    {data.library.intro}
  </p>
  <p class="text-base-content/70 mb-8 text-lg">
    {data.daisyui.intro}
  </p>

  <div class="h-16"></div>

  {#each data.sections as section}
    <section class="mb-20">
      <h2 class="font-title mb-8 text-2xl font-semibold lg:text-3xl">
        {section.title.replaceAll("{libraryName}", data.library.name)}
      </h2>
      <p class="text-base-content/70 mb-8 text-lg">
        {section.description.replaceAll("{libraryName}", data.library.name)}
      </p>
      {#if section.attributes?.length}
        <div class="grid gap-8">
          {#each section.attributes as attribute}
            {#if data.library.attributes[attribute] && data.daisyui.attributes[attribute]}
              <div class="card bg-base-200">
                <div class="card-body">
                  <h3 class="card-title mb-2">{attribute}</h3>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <div class="text-green-500">
                        <span class="rounded-lg border-2 px-4 py-1 text-2xl font-semibold">
                          {formatValue(data.daisyui.attributes[attribute].value)}
                        </span>
                        <div class="text-base-content/60 mt-2 text-sm">daisyUI</div>
                      </div>
                    </div>
                    <div>
                      <div class="text-base-content/60">
                        <span class="text-xl font-semibold">
                          {formatValue(data.library.attributes[attribute].value)}
                        </span>
                        <div class="text-sm">
                          {data.library.name}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="text-base-content/60 mt-4 text-sm">
                    {data.daisyui.attributes[attribute].desc}
                  </p>
                </div>
              </div>
            {/if}
          {/each}
        </div>
      {/if}
    </section>
  {/each}

  <section class="mb-20">
    <h2 class="font-title mb-8 text-2xl font-semibold lg:text-3xl">
      Why daisyUI is better than {data.library.name}
    </h2>
    <p class="text-base-content/70 mb-8 text-lg">
      {data.library.nottouse}
    </p>
    <p class="text-base-content/70 mb-8 text-lg">
      {data.daisyui.touse}
    </p>
  </section>

  <div class="h-16"></div>
  <h2 class="font-title text-3xl font-semibold">Install daisyUI</h2>
  <div class="h-8"></div>
  <Install />
  <div class="h-8"></div>
  <div class="text-center">
    <a href="/docs/install/" class="btn-primary btn btn-wide mt-4 mb-20 shadow-lg">
      {$t("install-btn")}
    </a>
  </div>

  <div class="h-16"></div>
  <div class="divider"></div>
  <p class="text-base-content/30 mx-auto max-w-xl text-center text-xs">
    This comparison is for informational purposes only. Information is based on GitHub public data,
    NPM registry data and official documentation websites. If you found any outdated information,
    please open a PR to update it.
  </p>
</div>

<Footer />
