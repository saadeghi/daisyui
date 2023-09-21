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
  <link
    rel="alternate"
    type="application/rss+xml"
    title="daisyUI Blog"
    href="https://daisyui.com/blog/rss.xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&family=Noto+Sans+JP:wght@300;900&family=Noto+Sans:wght@300;900&display=swap"
    rel="stylesheet" />
</svelte:head>

<Navbar hideSidebarButton="true" />

<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
  <div class="max-w-none w-full flex-grow pt-10">
    <div class="flex flex-col lg:flex-row justify-center w-full p-4 gap-6 min-h-[50vh]">
      <div class="max-w-2xl max-lg:w-full max-lg:mx-auto">
        <div class="sticky top-32 mx-auto sm:max-w-none">
          <div class="px-6 mb-8">
            <div class="flex gap-3 items-center">
              <a href="/blog" class="hover:opacity-80 inline-block">
                <h1 class="font-title text-xl font-extrabold text-base-content">daisyUI blog</h1>
              </a>
              <div class="tooltip tooltip-right" data-tip="RSS">
                <a
                  target="_blank"
                  href="https://daisyui.com/blog/rss.xml"
                  class="hover:text-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5">
                    <path
                      d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z" />
                    <path
                      d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </a>
              </div>
            </div>
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

        <div id="mc_embed_shell" class="mt-10 card bg-base-200">
          <div class="card-body flex flex-col gap-4">
            <h2 class="text-4xl font-black">Don't miss new posts!</h2>
            <div>
              <p class="font-bold">Subscribe to daisyUI newsletter to get updates on new posts.</p>
              <p class="text-base-content/60 text-xs">
                You will only receive an email when a new post is published. No spam. No ads.
              </p>
            </div>
            <div id="mc_embed_signup">
              <form
                action="https://gmail.us8.list-manage.com/subscribe/post?u=42813cff910e47b1bd132369a&amp;id=9fd7333f07&amp;f_id=003d03e0f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                novalidate="">
                <div class="form-control w-full max-w-sm">
                  <label class="label" for="mce-EMAIL">
                    <span class="label-text">Email Address</span>
                  </label>
                  <div class="join">
                    <input
                      type="email"
                      name="EMAIL"
                      class="join-item input input-bordered w-full max-w-sm"
                      id="mce-EMAIL"
                      placeholder="mail@site.com"
                      required />
                    <button name="subscribe" class="join-item btn btn-success">Subscribe</button>
                  </div>
                </div>
                <div aria-hidden="true" class="hidden">
                  <input
                    type="text"
                    name="b_42813cff910e47b1bd132369a_9fd7333f07"
                    tabindex="-1"
                    value="" />
                </div>
              </form>
            </div>
          </div>
        </div>
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
