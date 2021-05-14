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
      <div class="flex justify-center w-full mb-20 -mt-48">
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
import { themeChange } from "theme-change";

export default {
  layout: "landing",
  mounted() {
    themeChange(false);
  }
};
</script>
