<script>
  import SEO from "@components/SEO.svelte"
  import HomepageHero from "@components/homepage/Hero.svelte"
  import HomepagePreview from "@components/homepage/Preview.svelte"
  import HomepageStats from "@components/homepage/Stats.svelte"
  import HomepageCleanHtml from "@components/homepage/CleanHtml.svelte"
  import HomepageCustomizable from "@components/homepage/Customizable.svelte"
  import HomepageTheming from "@components/homepage/Theming.svelte"
  import HomepageTry from "@components/homepage/Try.svelte"
  import HomepageInstall from "@components/homepage/Install.svelte"
  import Footer from "@components/Footer.svelte"
</script>

<SEO title="daisyUI" desc="Tailwind Components Library - Free components for Tailwind CSS" />
<div class="from-primary to-secondary text-primary-content -mt-[4rem] flex flex-col items-center bg-gradient-to-br pt-32 pb-48">
  <HomepageHero />
</div>
<div class="bg-base-200 flex flex-col items-center gap-20 py-20">
  <HomepagePreview />
  <HomepageStats />
  <div class="flex w-full justify-center">
    <a href="/components" class="btn btn-primary btn-wide">See All Components</a>
  </div>
</div>
<HomepageCleanHtml />
<HomepageCustomizable />
<HomepageTheming />
<HomepageTry />
<HomepageInstall />
<Footer />
