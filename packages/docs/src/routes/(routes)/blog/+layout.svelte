<script>
  import "../../../global.css"
  import Footer from "$components/Footer.svelte"
  import AlternativeSidebar from "$components/AlternativeSidebar.svelte"
  let { children } = $props()
</script>

<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row" dir="ltr">
  <div class="w-full max-w-none grow pt-10">
    <div class="flex min-h-[50vh] w-full justify-center p-4">
      <div class="mx-auto w-full max-w-2xl">
        {@render children?.()}

        <div id="mc_embed_shell" class="card bg-base-200 my-10">
          <div class="card-body flex flex-col gap-4">
            <h2 class="text-xl font-semibold font-title lg:text-4xl">Don't miss the new posts!</h2>
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
<!-- <Footer /> -->
