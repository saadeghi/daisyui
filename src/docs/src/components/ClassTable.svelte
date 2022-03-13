<script>
  import { prefix } from "$lib/stores"
  import PrefixEdit from "@components/PrefixEdit.svelte"
  import Translate from "@components/Translate.svelte"
  export let data
</script>

<div class="not-prose mt-6 mb-10 overflow-x-auto">
  <table class="table-compact table w-full">
    <thead>
      <tr>
        <th class="flex items-center gap-2 normal-case">
          <PrefixEdit />
          <span><Translate text="Class name" /></span>
        </th>
        <th class="normal-case"><Translate text="Type" /></th>
        <th />
      </tr>
    </thead>
    <tbody>
      {#if $prefix}
        <tr>
          <td colspan="3" class="!px-0">
            <div class="text-info-content bg-info relative inline-flex items-center gap-2 rounded-lg p-2 px-3">
              <svg class="fill-info absolute -top-1.5 left-8 scale-x-150" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 512 512"><polygon points="256 32 20 464 492 464 256 32" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content h-4 w-4 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div class="text-xs">
                To use a custom prefix, <a class="link" href="/docs/config/">add your prefix string to config</a>
              </div>
            </div>
          </td>
        </tr>
      {/if}
      {#each data as item, index}
        <tr>
          <th class="font-normal">
            <span class="font-mono lowercase">{`${$prefix}${item.class}`}</span>
          </th>
          <td>
            {#if item.type == "component"}
              <span class="badge badge-sm badge-ghost w-20">Component</span>
            {/if}
            {#if item.type == "modifier"}
              <div class="tooltip tooltip-right cursor-help" data-tip="Changes the style of a component">
                <span class="badge badge-sm badge-outline w-20">Modifier</span>
              </div>
            {/if}
            {#if item.type == "responsive"}
              <div class="tooltip tooltip-right cursor-help" data-tip="Supports responsive prefixes (sm:, lg:, …)">
                <span class="badge badge-sm badge-success w-20">Responsive</span>
              </div>
            {/if}
          </td>
          <td>{item.desc}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
