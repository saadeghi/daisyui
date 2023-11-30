<script>
  import { t } from "$lib/i18n"
  export let contributors
  export let backers
</script>

<div class="w-full overflow-hidden px-2 py-40 lg:px-10">
  <div class="text-center">
    <div class="h-6" />
    <div>
      <img
        loading="lazy"
        width="80"
        height="80"
        alt="heart emoji"
        src="/images/emoji/heart-on-fire@80.webp"
        srcset={`/images/emoji/heart-on-fire.webp 2x`}
        class="pointer-events-none inline-block h-20 w-20 align-bottom" />
    </div>
    <div class="h-20" />
    <h2
      class="font-title relative z-[2] mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none">
      {$t("Free and open-source")}
      <br />
      <span class="font-light">{$t("Built by the community")}</span>
    </h2>
    <div class="h-12" />
    <p class="font-title font-light md:text-2xl">
      <a
        href="https://github.com/saadeghi/daisyui/blob/master/.github/CONTRIBUTING.md"
        rel="noopener, noreferrer"
        target="_blank"
        class="link link-hover text-base-content/70">
        {$t("daisyUI welcomes contributions from developers around the world")}
      </a>
    </p>
    <div class="flex w-full justify-center">
      <div class="flex w-full max-w-5xl flex-wrap justify-center gap-3 p-10">
        {#each contributors as contributor}
          <div class="tooltip" data-tip={contributor.login}>
            <div class="avatar">
              <div class="mask mask-squircle w-8">
                <img
                  loading="lazy"
                  src={`${contributor.avatar_url}&s=32`}
                  srcset={`${contributor.avatar_url}&s=64 2x, ${contributor.avatar_url}&s=96 3x`}
                  alt={contributor.login}
                  width="32"
                  height="32"
                  class="pointer-events-none transition-all duration-500 ease-in-out" />
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="h-6" />
  <div class="text-center">
    <p class="font-title font-light md:text-2xl">
      <a
        href="https://opencollective.com/daisyui"
        rel="noopener, noreferrer"
        target="_blank"
        class="link link-hover text-base-content/70">
        {$t("Sponsors and backers")}
      </a>
    </p>
    <div class="flex w-full justify-center">
      <div class="flex w-full max-w-5xl flex-wrap justify-center gap-3 p-10">
        {#each backers as backer}
          <div class="tooltip" data-tip={backer.name}>
            {#if backer.image}
              <div class="avatar">
                <div class="mask mask-squircle w-8">
                  <img
                    loading="lazy"
                    src={backer.image.replace("?default=404", "?default=identicon")}
                    alt={backer.name}
                    width="32"
                    height="32"
                    class="pointer-events-none transition-all duration-500 ease-in-out" />
                </div>
              </div>
            {:else}
              <div class="avatar placeholder">
                <div
                  class="mask mask-squircle w-8 text-black"
                  style={`background-color:hsl(${Math.floor(Math.random() * 360)} 10% 80%)`}>
                  <span class="select-none font-mono text-xs uppercase">
                    {backer.name
                      .split(" ")
                      .map((n, i, arr) => (i === 0 || i === arr.length - 1 ? n[0] : ""))
                      .join("")}
                  </span>
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
    <a
      href="https://opencollective.com/daisyui"
      rel="noopener, noreferrer"
      target="_blank"
      class="btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-4 w-4 text-teal-700">
        <path
          d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
      </svg>
      {$t("Become a sponsor")}
    </a>
  </div>
</div>
