<template>
  <div>

    <div class="hidden mt-2 mb-10 text-center xl:block">
      <!-- daisyui-728-90 -->
      <ins class="adsbygoogle"
          style="display:inline-block;width:728px;height:90px"
          data-ad-client="ca-pub-4812562253949561"
          data-ad-slot="1141251424"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>

    <div class="mt-2 mb-10 text-center xl:hidden">
      <!-- daisyui-300-100 -->
      <ins class="adsbygoogle"
          style="display:inline-block;width:300px;height:100px"
          data-ad-client="ca-pub-4812562253949561"
          data-ad-slot="6427020085"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>


    <div class="mt-6 overflow-x-auto">
      <table class="table w-full table-compact">
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
              <span class="font-mono lowercase">{{ item.class }}</span>
            </th>
            <td v-if="data.showType !== false"><span class="w-20 badge badge-sm badge-success">Component</span></td>
            <td v-if="data.showColors === true"><span class="inline-block w-6 h-6 border rounded border-opacity-10" :class="item.color"></span></td>
            <td>{{ item.desc }}</td>
          </tr>
          <tr v-for="(item, index) in data.utilities">
            <th class="font-normal">
              <span class="font-mono lowercase">{{ item.class }}</span>
            </th>
            <td v-if="data.showType !== false"><span class="w-20 badge badge-sm badge-info">Utility</span></td>
            <td v-if="data.showColors === true"><span class="inline-block w-6 h-6 border rounded border-opacity-10" :class="item.color"></span></td>
            <td>{{ item.desc }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="data.showTitle !== false" class="divider"></div>
    <div v-if="data.showTitle !== false" class="mt-6 text-xl font-bold">Examples</div>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>

