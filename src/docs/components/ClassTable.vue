<template>
  <div>
    <div class="overflow-x-auto mt-6">
      <table class="table table-compact w-full">
        <thead>
          <tr>
            <th>Class name</th>
            <th v-if="data.showType !== false">Type</th>
            <th v-if="data.showColors === true"></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data.components">
            <th class="font-normal">
              <span class="lowercase font-mono">{{ item.class }}</span>
            </th>
            <td v-if="data.showType !== false"><span class="badge badge-sm badge-success w-20">Component</span></td>
            <td v-if="data.showColors === true"><span class="inline-block w-6 h-6 border border-opacity-10 rounded" :class="item.color"></span></td>
            <td>{{ item.desc }}</td>
          </tr>
          <tr v-for="(item, index) in data.utilities">
            <th class="font-normal">
              <span class="lowercase font-mono">{{ item.class }}</span>
            </th>
            <td v-if="data.showType !== false"><span class="badge badge-sm badge-info w-20">Utility</span></td>
            <td v-if="data.showColors === true"><span class="inline-block w-6 h-6 border border-opacity-10 rounded" :class="item.color"></span></td>
            <td>{{ item.desc }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="data.showTitle !== false" class="divider"></div>
    <div v-if="data.showTitle !== false" class="text-xl font-bold mt-6">Examples</div>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>

