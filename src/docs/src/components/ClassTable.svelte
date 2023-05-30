<script>
  import { prefix } from "$lib/stores"
  import PrefixEdit from "@components/PrefixEdit.svelte"
  import Translate from "@components/Translate.svelte"
  import { t } from "@src/lib/i18n"
  export let data
</script>

<div class="not-prose relative mb-10 mt-6 max-h-[25rem] overflow-x-auto">
  <table class="table-xs md:table-sm table-pin-rows table w-full">
    <thead>
      <tr class="border-b-0">
        <th class="bg-base-200 rounded-l-box flex items-center gap-2 normal-case lg:py-3">
          <PrefixEdit />
          <span><Translate text="Class name" /></span>
        </th>
        <th class="bg-base-200 normal-case lg:py-3"><Translate text="Type" /></th>
        <th class="bg-base-200 rounded-r-box lg:py-3" />
      </tr>
    </thead>
    <tbody>
      {#if $prefix}
        <tr>
          <td colspan="3" class="!px-0">
            <div
              class="text-info-content bg-info relative inline-flex items-center gap-2 rounded-lg p-2 px-3">
              <svg
                class="fill-info absolute -top-1.5 left-8 scale-x-150"
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 512 512">
                <polygon points="256 32 20 464 492 464 256 32" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="stroke-info-content h-4 w-4 flex-shrink-0">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div class="text-xs">
                <Translate
                  text="To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>" />
              </div>
            </div>
          </td>
        </tr>
      {/if}
      {#each data as item, index}
        <tr>
          <th class="w-3/12 font-normal">
            <span class="whitespace-nowrap font-mono lowercase">{`${$prefix}${item.class}`}</span>
          </th>
          <td class="w-1/12">
            {#if item.type == "component"}
              <span class="badge badge-sm badge-ghost w-24 whitespace-nowrap">
                <Translate text="Component" />
              </span>
            {/if}
            {#if item.type == "modifier"}
              <div class="tooltip cursor-help" data-tip={$t("Changes the style of a component")}>
                <span class="badge badge-sm badge-outline w-24 whitespace-nowrap">
                  <Translate text="Modifier" />
                </span>
              </div>
            {/if}
            {#if item.type == "responsive"}
              <div
                class="tooltip cursor-help"
                data-tip={$t("Supports responsive prefixes (sm:, lg:, …)")}>
                <span class="badge badge-sm badge-success w-24 whitespace-nowrap">
                  <Translate text="Responsive" />
                </span>
              </div>
            {/if}
          </td>
          <td class="w-8/12 min-w-[20rem]">{item.desc}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  <div
    class="bg-base-100 pointer-events-none sticky bottom-0 -mt-6 flex h-16 [mask-image:linear-gradient(transparent,#000000)]" />
</div>
