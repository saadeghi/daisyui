<template>
  <div class="grid max-w-screen-sm max-w-screen-xl gap-4 mb-48 -mt-48 xl:pb-0 bg-opacity-60 glass xl:rounded-box text-base-content">
    <div class="px-2 pt-2">
      <HomepageDemoNav/>
    </div>
    <div id="component-demo" class="flex items-center w-full grid-flow-row grid-cols-12 gap-4 px-10 pt-1 pb-10 overflow-x-scroll overflow-y-hidden xl:px-4 xl:overflow-x-hidden xl:overflow-x-auto xl:grid">
      <HomepageDemoCard class="flex-shrink-0 col-span-3 row-span-3 mx-2 xl:mx-0 w-72 xl:w-auto place-self-start xl:w-full"/>
      <HomepageDemoToggle class="flex-shrink-0 col-span-3 row-span-3 mx-2 xl:mx-0 w-72 xl:w-auto place-self-start xl:w-full"/>
      <HomepageDemoCard2 class="flex-shrink-0 col-span-3 row-span-4 mx-2 xl:mx-0 w-72 xl:w-auto"/>
      <HomepageDemoTab class="flex-shrink-0 col-span-3 row-span-3 mx-2 xl:mx-0 w-72 place-self-start xl:w-full"/>
      <HomepageDemoAvatar class="flex-shrink-0 col-span-3 row-span-1 mx-2 xl:mx-0 w-72 xl:w-auto"/>
      <HomepageDemoButton class="flex-shrink-0 col-span-3 row-span-4 mx-2 xl:mx-0 w-72 xl:w-auto xl:place-self-stretch"/>
      <HomepageDemoPagination class="flex-shrink-0 col-span-3 row-span-2 mx-2 xl:mx-0 w-72 xl:w-auto"/>
      <HomepageDemoAlert class="flex-shrink-0 col-span-3 row-span-3 mx-2 xl:mx-0 w-72 xl:w-auto xl:place-self-stretch"/>
      <HomepageDemoMenu class="flex-shrink-0 col-span-3 row-span-2 mx-2 xl:mx-0 w-72 xl:w-auto xl:place-self-stretch"/>
      <HomepageDemoCheckbox class="flex-shrink-0 col-span-3 row-span-1 mx-2 xl:mx-0 w-72 xl:w-auto"/>
      <HomepageDemoBreadcrumb class="flex-shrink-0 col-span-3 row-span-1 mx-2 xl:mx-0 w-72 xl:w-auto"/>
      <HomepageDemoLoading class="flex-shrink-0 col-span-3 row-span-1 mx-2 xl:mx-0 w-72 xl:w-auto xl:place-self-stretch"/>
    </div>
  </div>
</template>
<style>
#component-demo{
  max-width: 100vw;
  scroll-snap-type:x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#component-demo::-webkit-scrollbar {
  display: none;
}
#component-demo>*{
  scroll-snap-align: center;
}
</style>
