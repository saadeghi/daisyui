---
title: daisyUI Roadmap
desc: daisyUI Roadmap, milestones and upcoming features
---

<script>
  export let data
</script>

<ul
  class="timeline not-prose mb-20 timeline-compact timeline-snap-icon timeline-vertical bg-base-200 rounded-box lg:ps-6 pe-10 ps-6 pt-10 lg:pe-16 lg:py-16">
  {#each data.roadmap as milestone, index}
    <li class="lg:gap-x-6">
      {#if index > 0}
        <hr class={milestone.done && "bg-success"} />
      {/if}
      <div class="timeline-middle">
        {#if milestone.done}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="text-success h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="text-base-content/30 h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
              clip-rule="evenodd" />
          </svg>
        {/if}
      </div>
      <div
        class={`timeline-box mb-4 w-full p-4 lg:mb-10 lg:p-10 timeline-end`}>
        <h2 class="mb-6 text-lg font-black">{milestone.title}</h2>
        <ol>
          {#each milestone.items as item}
            <li class="my-2 flex gap-2">
              {#if item.done}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="text-success inline-block size-4 mt-0.5 shrink-0">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd" />
                </svg>
              {:else}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="text-base-content/20 inline-block size-4 mt-0.5 shrink-0">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                    clip-rule="evenodd" />
                </svg>
              {/if}
              <span class="text-base-content/60">{item.title}</span>
            </li>
          {/each}
        </ol>
      </div>
      {#if index < data.roadmap.length - 1}
        <hr class={milestone.done && "bg-success"} />
      {/if}
    </li>
  {/each}
</ul>
