<script>
  import { t } from "$lib/i18n.svelte.js"
</script>

<div class="h-20"></div>

<div data-sveltekit-preload-data>
  <div class="bg-base-200 text-base-content">
    <footer
      class="footer md:footer-horizontal mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 py-20 text-xs sm:flex-row"
    >
      <div>
        <span class="footer-title opacity-70">{$t("daisyUI Store")}</span>
        <a class="link link-hover" href="https://www.creem.io/my-orders/login">
          {$t("My Orders")}
        </a>
        <a class="link link-hover" href="https://app.lemonsqueezy.com/my-orders">
          {$t("My Orders (old panel)")}
        </a>
        <a class="link link-hover" href="/store/pages/terms/">{$t("Terms and Conditions")}</a>
        <a class="link link-hover" href="/store/pages/privacy/">{$t("Privacy Policy")}</a>
        <a class="link link-hover" href="/store/pages/support/">{$t("Customer Support")}</a>
        <span></span>
        <a class="link link-hover -ms-3.5" href="/">{$t("← Go back to daisyui.com")}</a>
      </div>
      <div>
        <form
          action="https://app.kit.com/forms/7041226/subscriptions"
          method="post"
          target="_blank"
          class="flex flex-col"
        >
          <p class="text-base-content/70 mb-4 text-xs font-bold">
            Get the daisyUI updates and news
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
    </footer>
  </div>
</div>
