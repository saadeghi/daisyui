<script>
  import { page } from "$app/stores"
  import Footer from "$components/Footer.svelte"
  import AlternativeSidebar from "$components/AlternativeSidebar.svelte"
  let { data, children } = $props()
  let { tags } = data
</script>

<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row" dir="ltr">
  <div class="w-full max-w-none grow pt-10">
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
                  class="hover:text-warning"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z"
                    >
                    </path>
                    <path
                      d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z"
                    >
                    </path>
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
                    href={`/blog/tag/${tag.replace(/ /g, "-").toLowerCase()}`}
                    class={tag.replace(/ /g, "-").toLowerCase() ===
                      $page.url.pathname.split("/").at(-2) && `active`}
                  >
                    {tag}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      </div>
      <div class="mx-auto w-full max-w-2xl">
        {@render children?.()}

        <div id="mc_embed_shell" class="card bg-base-200 my-10">
          <div class="card-body flex flex-col gap-4">
            <h2 class="text-xl font-black lg:text-4xl">Don't miss new posts!</h2>
            <form
              action="https://app.kit.com/forms/7041226/subscriptions"
              method="post"
              target="_blank"
              class="flex flex-col"
            >
              <p class="text-base-content/70 mb-4 text-xs font-bold">
                Subscribe to daisyUI newsletter to get the updates.
              </p>
              <div class="join mb-2">
                <input
                  type="email"
                  class="join-item input"
                  name="email_address"
                  placeholder="email@site.com"
                  required
                />
                <button class="join-item btn btn-neutral">Subscribe</button>
              </div>
              <p class="text-base-content/60 text-[0.625rem] tracking-wide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="text-success inline-block size-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
                We don't share your email address with anyone
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AlternativeSidebar />
</div>
<Footer />
