<script>
  import { onMount } from "svelte"
  import Carbon from "$components/Carbon.svelte"

  const bannerItems = [
    {
      title: "Nexus",
      desc: "dashboard template from daisyUI",
      link: "https://daisyui.com/store/244268/",
      img: "https://img.daisyui.com/images/store/banner/nexus.webp",
    },
    {
      title: "dasiyUI swag!",
      desc: "T-shirts and more",
      link: "https://swag.daisyui.com/collections/shirts",
      img: "https://img.daisyui.com/images/store/banner/swag.webp",
    },
    {
      title: "dasiyUI swag!",
      desc: "T-shirts and more",
      link: "https://swag.daisyui.com/collections/shirts",
      img: "https://img.daisyui.com/images/store/banner/tshirt.webp",
    },
    {
      title: "dasiyUI swag!",
      desc: "Hats and more",
      link: "https://swag.daisyui.com/collections/hats",
      img: "https://img.daisyui.com/images/store/banner/cicd-hat.webp",
    },
    {
      title: "dasiyUI swag!",
      desc: "Hats and more",
      link: "https://swag.daisyui.com/collections/hats",
      img: "https://img.daisyui.com/images/store/banner/cute-beanie.webp",
    },
    {
      title: "dasiyUI mugs",
      desc: "See more →",
      link: "https://swag.daisyui.com/collections/mugs",
      img: "https://img.daisyui.com/images/store/banner/lighthouse-mug.webp",
    },
    {
      title: "dasiyUI mugs",
      desc: "See more →",
      link: "https://swag.daisyui.com/collections/mugs",
      img: "https://img.daisyui.com/images/store/banner/techdebt-mug.webp",
    },
    {
      title: "dasiyUI stickers",
      desc: "Great for laptop",
      link: "https://swag.daisyui.com/collections/stickers",
      img: "https://img.daisyui.com/images/store/banner/sticker.webp",
    },
    // {
    //   title: "Official daisyUI",
    //   desc: "Figma Library",
    //   link: "https://daisyui.com/store/351127/",
    //   img: "https://img.daisyui.com/images/store/banner/figma.webp",
    // },
  ]

  let randomBanner = $state(null)
  onMount(() => {
    randomBanner = bannerItems[Math.floor(Math.random() * bannerItems.length)]
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
        class="border-base-300 bg-base-200 rounded-box mt-8 overflow-hidden border max-xl:hidden"
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
