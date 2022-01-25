<script>
  import SEO from '@components/SEO.svelte'
  import HomepageHero from '@components/homepage/Hero.svelte'
  import HomepagePreview from '@components/homepage/Preview.svelte'
  import HomepageStats from '@components/homepage/Stats.svelte'
  import HomepageCleanHtml from '@components/homepage/CleanHtml.svelte'
  import HomepageCustomizable from '@components/homepage/Customizable.svelte'
  import HomepageTheming from '@components/homepage/Theming.svelte'
  import HomepageTry from '@components/homepage/Try.svelte'
  import HomepageInstall from '@components/homepage/Install.svelte'
  import Footer from '@components/Footer.svelte'
</script>
<SEO
  title="Title"
  desc="Description"
/>
<div class="flex flex-col items-center py-10 pb-48 text-primary-content bg-gradient-to-br from-primary to-secondary">
  <HomepageHero/>
</div>
<div class="flex flex-col items-center gap-20 py-20 bg-base-200">
  <HomepagePreview/>
  <HomepageStats/>
  <div class="flex justify-center w-full">
    <a href="/components/button" class="btn btn-primary btn-wide">
      See All Components
    </a>
  </div>
</div>
<HomepageCleanHtml/>
<HomepageCustomizable/>
<HomepageTheming/>
<HomepageTry/>
<HomepageInstall/>
<Footer/>

