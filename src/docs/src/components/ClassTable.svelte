<script>
  export let data
</script>

<div class="not-prose mt-6 mb-10 overflow-x-auto">
  <table class="table-compact table w-full">
    <thead>
      <tr>
        <th class="normal-case">Class name</th>
        <th class="normal-case">Type</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {#each data as item, index}
        <tr>
          <th class="font-normal">
            <span class="font-mono lowercase">{item.class}</span>
          </th>
          <td>
            {#if item.type == "component"}
              <span class="badge badge-sm badge-ghost w-20">Component</span>
            {/if}
            {#if item.type == "modifier"}
              <span class="badge badge-sm badge-info w-20">Modifier</span>
            {/if}
            {#if item.type == "responsive"}
              <div class="tooltip relative z-10" data-tip="Supports responsive prefixes (sm:, lg:, …)">
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
