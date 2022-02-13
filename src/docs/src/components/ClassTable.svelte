<script>
  export let data
</script>

<div class="mt-6 overflow-x-auto not-prose mb-10">
  <table class="table w-full table-compact">
    <thead>
      <tr>
        <th class="normal-case">Class name</th>
        <th class="normal-case">Type</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#each data as item, index}
        <tr>
          <th class="font-normal">
            <span class="font-mono lowercase">{ item.class }</span>
          </th>
          <td>
            {#if item.type == 'component'}
              <span class="w-20 badge badge-sm badge-ghost">Component</span>
            {/if}
            {#if item.type == 'modifier'}
              <span class="w-20 badge badge-sm badge-info">Modifier</span>
            {/if}
            {#if item.type == 'responsive'}
              <div class="tooltip relative z-10" data-tip="Supports responsive prefixes (sm:, lg:, …)">
                <span class="w-20 badge badge-sm badge-success">Responsive</span>
              </div>
            {/if}
          </td>
          <td>{ item.desc }</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

