<template>
  <div>
    <HomepageHero/>

    <div class="relative z-10">
      <div class="pt-10 pb-20 hero bg-gradient-to-br from-base-100 to-base-300 text-base-content">
        <CardsDemo/>
        <div class="overflow-hidden">
          <div class="rounded-full -mt-96 xl:mt-0 bg-primary w-96 h-96 bg-opacity-20"></div>
        </div>
      </div>

      <div class="flex justify-center w-full -mt-56">
        <div class="stats">
          <NuxtLink class="gap-0 px-10 bg-transparent stat place-items-center hover:opacity-70" to="/components/button">
            <div class="stat-value">40</div>
            <div class="stat-desc">Components</div>
          </NuxtLink>
          <NuxtLink class="gap-0 px-10 bg-transparent stat place-items-center hover:opacity-70" to="/docs/default-themes">
            <div class="stat-value">21</div>
            <div class="stat-desc">Themes</div>
          </NuxtLink>
          <a class="gap-0 px-10 bg-transparent stat place-items-center hover:opacity-70" href="https://github.com/saadeghi/daisyui" target="_blank" rel="noopener">
            <div class="stat-value">5,000</div>
            <div class="stat-desc">Github Stars</div>
          </a>
          <a class="gap-0 px-10 bg-transparent stat place-items-center hover:opacity-70" href="https://www.npmjs.com/package/daisyui" target="_blank" rel="noopener">
            <div class="stat-value">120,000</div>
            <div class="stat-desc">NPM Installs</div>
          </a>
        </div>
      </div>

      <div class="flex justify-center w-full mt-6">
        <NuxtLink to="/components/button" class="btn btn-primary btn-wide">
          See All Components
        </NuxtLink>
      </div>

    </div>

    <FeatureHtmlCompare/>
    <FeatureCustomize/>
    <FeatureTheming/>
    <TryOnline/>
    <FeatureInstall/>
    <Footer/>

  </div>
</template>

<script>

export default {
  layout: "landing",
};
</script>
