<script>
  import { onMount } from "svelte"
  import Carbon from "$components/Carbon.svelte"

  const bannerItems = [
    {
      title: "Nexus",
      desc: "dashboard template from daisyUI",
      link: "https://daisyui.com/store/244268/",
      img: "https://img.daisyui.com/images/store/banner/nexus.webp",
      chance: 3,
    },
    {
      title: "daisyUI swag!",
      desc: "T-shirts and more",
      link: "https://swag.daisyui.com/collections/shirts",
      img: "https://img.daisyui.com/images/store/banner/swag.webp",
      chance: 1,
    },
    {
      title: "daisyUI swag!",
      desc: "T-shirts and more",
      link: "https://swag.daisyui.com/collections/shirts",
      img: "https://img.daisyui.com/images/store/banner/tshirt.webp",
      chance: 1,
    },
    {
      title: "daisyUI swag!",
      desc: "Hats and more",
      link: "https://swag.daisyui.com/collections/hats",
      img: "https://img.daisyui.com/images/store/banner/cicd-hat.webp",
      chance: 2,
    },
    {
      title: "daisyUI swag!",
      desc: "Hats and more",
      link: "https://swag.daisyui.com/collections/hats",
      img: "https://img.daisyui.com/images/store/banner/cute-beanie.webp",
      chance: 2,
    },
    {
      title: "daisyUI mugs",
      desc: "See more →",
      link: "https://swag.daisyui.com/collections/mugs",
      img: "https://img.daisyui.com/images/store/banner/lighthouse-mug.webp",
      chance: 1,
    },
    {
      title: "daisyUI mugs",
      desc: "See more →",
      link: "https://swag.daisyui.com/collections/mugs",
      img: "https://img.daisyui.com/images/store/banner/techdebt-mug.webp",
      chance: 1,
    },
    {
      title: "daisyUI stickers",
      desc: "Great for laptop",
      link: "https://swag.daisyui.com/collections/stickers",
      img: "https://img.daisyui.com/images/store/banner/sticker.webp",
      chance: 1,
    },
    {
      title: "Official daisyUI",
      desc: "Figma Library",
      link: "https://daisyui.com/store/351127/",
      img: "https://img.daisyui.com/images/store/banner/figma.webp",
      chance: 3,
    },
  ]

  let randomBanner = $state(null)
  onMount(() => {
    // Calculate total weight
    const totalWeight = bannerItems.reduce((sum, item) => sum + item.chance, 0)

    // Generate random number between 0 and totalWeight
    let random = Math.random() * totalWeight

    // Find the item based on weighted probability
    for (const item of bannerItems) {
      random -= item.chance
      if (random <= 0) {
        randomBanner = item
        break
      }
    }
  })
</script>

<div>
  <div class="sticky top-20 my-6 xl:mx-2 xl:my-0 xl:mt-32 xl:w-[130px]">
    <div class="h-6"></div>
    {#if import.meta.env.DEV}
      <div
        class="carbonads-responsive bg-base-200 rounded-box mx-auto flex min-h-[100px] items-center justify-center max-xl:w-[22rem] xl:h-[13rem]"
      >
        <div class="text-base-content/30 text-xs">Ads</div>
      </div>
    {:else}
      <div class="carbonads-responsive mx-auto flex min-h-[100px] items-center justify-center">
        <Carbon />
      </div>
    {/if}
    {#if randomBanner}
      <div
        class="bg-base-200 rounded-box border-base-300 mt-8 overflow-hidden border-[length:var(--border)] max-xl:hidden"
      >
        <a href={randomBanner.link} target="_blank" rel="noopener noreferrer" class="group">
          <img
            src={randomBanner.img}
            alt={randomBanner.title}
            class="h-auto w-full object-cover transition-transform ease-linear group-hover:scale-110 group-hover:duration-2000"
          />
          <div
            class="text-base-content/50 bg-base-200 border-base-300 group-hover:text-base-content relative z-1 border-t px-2 py-3 text-center transition-colors duration-500"
          >
            <div class="text-[0.6875rem] font-semibold">{@html randomBanner.title}</div>
            <div class="mt-1 text-[0.625rem] tracking-wide">{@html randomBanner.desc}</div>
          </div>
        </a>
      </div>
    {/if}
  </div>
</div>
