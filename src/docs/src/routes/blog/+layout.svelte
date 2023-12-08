<script>
  import { page } from "$app/stores"
  import Footer from "$components/Footer.svelte"
  import Ads from "$components/Ads.svelte"
  import Sponsors from "$components/Sponsors.svelte"
  import "prism-themes/themes/prism-material-dark.css"
  import "$lib/style/prism-themes-modify.css"
  export let data
  let { tags } = data
</script>

<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row" dir="ltr">
  <div class="w-full max-w-none flex-grow pt-10">
    <div class="flex min-h-[50vh] w-full flex-col justify-center gap-6 p-4 lg:flex-row">
      <div class="max-w-2xl max-lg:mx-auto max-lg:w-full">
        <div class="sticky top-32 mx-auto sm:max-w-none">
          <div class="mb-8 px-6">
            <div class="flex items-center gap-3">
              <a href="/blog" class="inline-block hover:opacity-80">
                <h1 class="font-title text-base-content text-xl font-extrabold">daisyUI blog</h1>
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
                    class="h-5 w-5">
                    <path
                      d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z" />
                    <path
                      d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </a>
              </div>
            </div>
            <p class="text-base-content/60 text-xs italic">Updates, ideas and resources</p>
          </div>
          {#if tags.length > 0}
            <ul class="menu menu-horizontal lg:menu-vertical lg:w-56">
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
      <div class="mx-auto w-full max-w-2xl">
        <slot />

        <div id="mc_embed_shell" class="card bg-base-200 my-10">
          <div class="card-body flex flex-col gap-4">
            <h2 class="text-xl font-black lg:text-4xl">Don't miss new posts!</h2>
            <div>
              <p class="font-bold">
                Subscribe to daisyUI blog newsletter to get updates on new posts.
              </p>
              <p class="text-base-content/60 text-xs">
                You will only receive a single email when a new blog post is published. No spam. No
                ads.
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
                <!-- blog group -->
                <input type="checkbox" name="group[347002][4]" value="1" class="hidden" checked />
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

        <script
          src="https://giscus.app/client.js"
          data-repo="daisyui/blog-discussions"
          data-repo-id="R_kgDOK3Q31Q"
          data-category="comments"
          data-category-id="DIC_kwDOK3Q31c4CbliP"
          data-strict="0"
          data-reactions-enabled="0"
          data-emit-metadata="0"
          data-input-position="top"
          data-theme="dark_dimmed"
          data-lang="en"
          data-loading="lazy"
          crossorigin="anonymous"
          async>
        </script>
      </div>
    </div>
    <div class="flex justify-center xl:hidden">
      <Sponsors wrapperClasses="flex-col sm:flex-row" />
    </div>
  </div>
  <Ads slot="carbon2" />
</div>
<Footer />
