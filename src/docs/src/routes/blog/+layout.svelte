<script>
  import { page } from "$app/stores"

  import { onNavigate } from "$app/navigation"
  import { onMount } from "svelte"
  import { currentLang, langs } from "@src/lib/i18n"
  import Footer from "@components/Footer.svelte"
  import Ads from "@components/Ads.svelte"
  import Sponsors from "@components/Sponsors.svelte"
  import "@components/StyleHandler.svelte"

  import "prism-themes/themes/prism-material-dark.css"
  import "@src/prism-themes-modify.css"

  import Navbar from "@components/Navbar.svelte"
  import Scripts from "@components/Scripts.svelte"
  onNavigate((navigation) => {
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })

  onMount(() => {
    let lang = new URL(document.location).searchParams.get("lang")
    if (langs.includes(lang)) {
      $currentLang = lang
      localStorage.setItem("lang", $currentLang)
    }
    if (localStorage.getItem("lang")) {
      $currentLang = localStorage.getItem("lang")
    }
  })
  export let data
  let { tags } = data
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&family=Noto+Sans+JP:wght@300;900&family=Noto+Sans:wght@300;900&display=swap"
    rel="stylesheet" />
</svelte:head>

<Navbar hideSidebarButton="true" />

<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
  <div class="max-w-none w-full flex-grow pt-10">
    <div class="flex flex-col lg:flex-row justify-center w-full p-4 gap-6">
      <div class="max-w-2xl max-lg:w-full max-lg:mx-auto">
        <div class="sticky top-32 mx-auto sm:max-w-none">
          <div class="px-6 mb-8">
            <a href="/blog" class="hover:opacity-80 inline-block">
              <h1 class="font-title text-xl font-extrabold text-base-content">daisyUI blog</h1>
            </a>
            <p class="text-xs italic text-base-content/60">Updates, ideas and resources</p>
          </div>
          {#if tags.length > 0}
            <ul class="menu menu-horizontal lg:w-56 lg:menu-vertical">
              <li class="menu-title">Tags</li>
              {#each tags as tag}
                <li>
                  <a
                    data-sveltekit-reload
                    href={`/blog/tag/${tag.replace(/ /g, "-").toLowerCase()}`}
                    class={tag.replace(/ /g, "-").toLowerCase() ===
                      $page.url.pathname.split("/").at(-2) && `active`}>
                    {tag}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      </div>
      <div class="w-full max-w-2xl mx-auto">
        <slot />
      </div>
    </div>
    <div class="flex justify-center xl:hidden">
      <Sponsors wrapperClasses="flex-col sm:flex-row" />
    </div>
  </div>
  <Ads slot="carbon2" />
</div>

<div class="h-20" />

<Footer />

<Scripts />
