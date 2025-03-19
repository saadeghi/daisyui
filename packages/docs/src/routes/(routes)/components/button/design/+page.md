---
alert: This page is not up to date. Some of the examples might not work as expected.
title: Button
desc: Buttons allow the user to take actions or make choices.
layout: components
showComponentPageTabs: true
---

<script>
  import Translate from "$components/Translate.svelte"
  
  const {
    figure,
    indicator,
    indicatorBox,
    item,
    line,
    circle
  } = {
    figure: "not-prose bg-base-100 border border-base-content/20 border-dashed rounded-box grid min-h-[20rem] place-items-center",
    indicator: "indicator border-base-content pointer-events-none absolute items-center border-dashed flex",
    indicatorBox: "indicator border-base-content pointer-events-none absolute items-center border-dashed flex border",
    item: "indicator-item badge badge-neutral",
    line: "border-base-content border-s border-dashed",
    circle: "border-base-content aspect-square w-6 shrink-0 rounded-full border border-dashed",
  }
</script>

<div class="grid gap-4 xl:grid-cols-2 lg:gap-10 mb-20 mt-10">
  <figure class={figure}>
    <div class="relative">
      <button class="btn btn-primary">Button</button>
      <!-- <div
        class={`${indicatorBox} start-full top-0 h-full w-12 rounded-e-lg border-s-0`}>
        <div class={`${item} indicator-middle indicator-end`}>48</div>
      </div> -->
      <div
        class={`${indicator} start-full top-0 h-full w-12 translate-x-2 flex-row border-s`}>
        <hr class={`${line} h-px w-full border-s`} />
        <div class={`${item} indicator-middle indicator-end`}>48</div>
      </div>
      <!-- <div
        class={`${indicatorBox} -bottom-full start-0 h-12 w-full rounded-b-lg border-t-0`}>
        <div class={`${item} indicator-center indicator-bottom`}>16</div>
      </div> -->
      <div
        class={`${indicator} -bottom-full start-0 h-12 w-4 translate-y-2 flex-col border-t`}>
        <hr class={`${line} h-full w-px border-s`} />
        <div class={`${item} indicator-center indicator-bottom`}>16</div>
      </div>
      <div
        class={`${indicator} -bottom-full end-0 h-12 w-4 translate-y-2 flex-col border-t`}>
        <hr class={`${line} h-full w-px border-s`} />
        <div class={`${item} indicator-center indicator-bottom`}>16</div>
      </div>
    </div>
  </figure>
  <div class="flex flex-col justify-end gap-2">
    <h2 class="text-2xl font-black">spacing</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, a ex perferendis ipsam quos
      quia tempora eligendi veritatis nam impedit laborum blanditiis voluptate voluptatem itaque
      dicta, aperiam unde labore odio?
    </p>
    <ul>
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ul>
  </div>
  <figure class={figure}>
    <div class="relative">
      <button class="btn btn-primary">Button</button>
      <div
        class={`${indicator} -start-1 top-1/2 h-12 w-4 translate-y-2 flex-col`}>
        <div class={circle}>
        </div>
        <hr class={`${line} h-full w-px border-s`} />
        <div class={`${item} indicator-center indicator-bottom`}>
          --radius-field
        </div>
      </div>
    </div>
  </figure>
  <div class="flex flex-col justify-end gap-2">
    <h2 class="text-2xl font-black">border radius</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, a ex perferendis ipsam quos
      quia tempora eligendi veritatis nam impedit laborum blanditiis voluptate voluptatem itaque
      dicta, aperiam unde labore odio?
    </p>
    <ul>
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ul>
  </div>

  <figure class={figure}>
    <div class="relative">
      <button class="btn btn-primary">Button</button>
      <div
        class={`${indicator} start-1 top-1/3 h-16 w-4 translate-y-2 flex-col`}>
        <div class={circle}>
        </div>
        <hr class={`${line} h-full w-px border-s`} />
        <div class={`${item} indicator-center indicator-bottom`}>
          primary
        </div>
      </div>
      <div
        class={`${indicator} -top-7 end-4 h-16 w-4 flex-col`}>
        <hr class={`${line} h-full w-px border-s`} />
        <div class={circle}>
        </div>
        <div class={`${item} indicator-center indicator-top`}>
          primary-content
        </div>
      </div>
    </div>
  </figure>
  <div class="flex flex-col justify-end gap-2">
    <h2 class="text-2xl font-black">colors</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, a ex perferendis ipsam quos
      quia tempora eligendi veritatis nam impedit laborum blanditiis voluptate voluptatem itaque
      dicta, aperiam unde labore odio?
    </p>
    <ul>
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ul>
  </div>
</div>
