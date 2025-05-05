<script>
  import { t } from "$lib/i18n.svelte.js"
  let contributors = $state([])
  let sponsors = $state([])
  let contributorSpriteMeta = $state({ imagesPerRow: 0, rows: 0, avatarSize: 64 })
  let sponsorSpriteMeta = $state({ imagesPerRow: 0, rows: 0, avatarSize: 64 })

  async function fetchContributors() {
    const response = await fetch("https://img.daisyui.com/generated/contributors.json")
    const data = await response.json()
    // Handle both the new format (with sprite metadata) and old format (array only)
    if (data.contributors && data.sprite) {
      contributors = data.contributors
      contributorSpriteMeta = data.sprite
    } else {
      // Legacy format - assume single row
      contributors = Array.isArray(data) ? data : []
      contributorSpriteMeta = {
        imagesPerRow: contributors.length,
        rows: 1,
        avatarSize: 64,
      }
    }
    console.log("Loaded contributors metadata:", contributorSpriteMeta)
  }

  async function fetchSponsors() {
    const response = await fetch("https://img.daisyui.com/generated/sponsors.json")
    const data = await response.json()
    // Handle both the new format (with sprite metadata) and old format (array only)
    if (data.sponsors && data.sprite) {
      sponsors = data.sponsors
      sponsorSpriteMeta = data.sprite
    } else {
      // Legacy format - assume single row
      sponsors = Array.isArray(data) ? data : []
      sponsorSpriteMeta = {
        imagesPerRow: sponsors.length,
        rows: 1,
        avatarSize: 64,
      }
    }
    console.log("Loaded sponsors:", sponsors.length, sponsorSpriteMeta)
  }

  $effect(() => {
    fetchContributors()
    fetchSponsors()
  })

  function getBackgroundPosition(index, meta) {
    const row = Math.floor(index / meta.imagesPerRow)
    const col = index % meta.imagesPerRow
    // Scale down positions by 50% to match the display size (size-8 = 32px)
    return `${-col * (meta.avatarSize / 2)}px ${-row * (meta.avatarSize / 2)}px`
  }
</script>

<div
  class="w-full overflow-hidden px-2 py-40 lg:px-10"
  style="background: radial-gradient(circle at 40% 35%, var(--color-info) -200%, transparent 35%), radial-gradient(circle at 60% 40%, var(--color-success) -200%, transparent 30%);"
>
  <div class="text-center">
    <div class="h-6"></div>
    <div class="px-6">
      <img
        class="pointer-events-none inline-block align-bottom"
        src="https://img.daisyui.com/images/daisyui/mark-rotating.svg"
        alt="daisyUI logo"
        width="400"
        height="400"
        loading="lazy"
      />
    </div>
    <div class="h-20"></div>
    <h2
      class="font-title relative z-2 mx-auto text-[clamp(2rem,6vw,4.5rem)] leading-none font-black"
    >
      {$t("Free and open-source")}
      <br />
      <span class="font-light">{$t("Built by the community")}</span>
    </h2>
    <div class="h-12"></div>
    <p class="font-title font-light md:text-2xl">
      <a
        href="https://github.com/saadeghi/daisyui/blob/master/.github/CONTRIBUTING.md"
        rel="noopener, noreferrer"
        target="_blank"
        class="link link-hover text-base-content/70"
      >
        {$t("daisyUI welcomes contributions from developers around the world")}
      </a>
    </p>
    <div class="flex w-full justify-center">
      <div
        class="flex w-full max-w-6xl flex-wrap justify-center p-10 max-sm:[&>*:nth-child(n+50)]:hidden"
      >
        {#each contributors as contributor, index}
          <div class="avatar tooltip group p-1" data-tip={contributor}>
            <div
              class="mask mask-squircle size-8 [transition:opacity_1s_ease-out_15s,scale_1s_ease-out_15s,filter_1s_ease-out_15s] pointer-fine:scale-70 pointer-fine:opacity-30 pointer-fine:contrast-70 pointer-fine:grayscale pointer-fine:group-hover:scale-120 pointer-fine:group-hover:opacity-100 pointer-fine:group-hover:contrast-100 pointer-fine:group-hover:grayscale-0 pointer-fine:group-hover:[transition:opacity_0s_ease-out_0s,scale_0.05s_ease-out_0s,filter_0s_ease-out_0s]"
              style="background-image: url('https://img.daisyui.com/generated/contributors.webp?v=2'); background-size: {contributorSpriteMeta.imagesPerRow *
                (contributorSpriteMeta.avatarSize /
                  2)}px auto; background-repeat: no-repeat; background-position: {getBackgroundPosition(
                index,
                contributorSpriteMeta,
              )};"
            ></div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="h-6"></div>
  <div class="text-center">
    <p class="font-title font-light md:text-2xl">
      <a
        href="https://opencollective.com/daisyui"
        rel="noopener, noreferrer"
        target="_blank"
        class="link link-hover text-base-content/70"
      >
        {$t("Sponsors and backers")}
      </a>
    </p>
    <div class="flex w-full justify-center">
      <div
        class="max-w-8xl flex w-full flex-wrap justify-center p-10 max-sm:[&>*:nth-child(n+50)]:hidden"
      >
        {#each sponsors as sponsor, index}
          <div class="tooltip" data-tip={sponsor.name}>
            {#if sponsor.image}
              <div class="avatar p-2">
                <div
                  class="mask mask-squircle size-8"
                  style="background-image: url('https://img.daisyui.com/generated/sponsors.webp?v=2'); background-size: {sponsorSpriteMeta.imagesPerRow *
                    (sponsorSpriteMeta.avatarSize /
                      2)}px auto; background-repeat: no-repeat; background-position: {getBackgroundPosition(
                    index,
                    sponsorSpriteMeta,
                  )};"
                ></div>
              </div>
            {:else}
              <div class="avatar avatar-placeholder p-2">
                <div
                  class="mask mask-squircle size-8 text-black"
                  style={`background-color:oklch(80% 0.03 ${Math.floor(Math.random() * 360)}/.7)`}
                >
                  <span class="text-xs uppercase select-none">
                    {sponsor.name
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
      class="btn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-4 w-4 text-teal-700"
      >
        <path
          d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
        >
        </path>
      </svg>
      {$t("Become a sponsor")}
    </a>
  </div>
</div>
