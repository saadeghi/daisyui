<template>
  <div class="flex flex-col">
    <PromoDropdown title="tab" desc="Beautiful tabs to switch between sections" classes="" link="components/tab">
      <div class="flex-grow-0 tabs w-full">
        <button
          class="flex-1 tab tab-lifted tab-lg tab-border-none"
          v-for='(tab,i) in tabs' :key='tab'
          v-on:click='selectedIndex = i'
          v-bind:class="{
            'tab-active': selectedIndex == i,
          }"
        >{{ tab }}</button>
      </div>
    </PromoDropdown>
    <div class="grid flex-grow gap-3 p-6 shadow-xl rounded-xl bg-base-100 w-full"
      v-bind:class="{
        'rounded-tl-none': selectedIndex == 0,
        'rounded-tr-none': selectedIndex == 2,
      }"
    >
      <div class="flex items-center space-x-2">
        <PromoDropdown title="avatar" desc="Use avatar component with any size" classes="" link="components/avatar">
          <div class="avatar online">
            <div class="w-16 h-16 p-px bg-opacity-10 mask mask-hexagon bg-base-content">
              <img src="/tailwind-css-component-profile-5@56w.png" class="mask mask-hexagon" alt="Avatar Tailwind CSS Component">
            </div>
          </div>
        </PromoDropdown>
        <div>
          <div class="text-lg font-extrabold">Beatrice Thurman</div>
          <div class="text-sm text-base-content text-opacity-60">220 Followers</div>
        </div>
      </div>
      <PromoDropdown title="divider" desc="User divider component to visually separate items" classes="" link="components/divider">
        <div class="m-0 divider text-base-content text-opacity-40">Reports</div>
      </PromoDropdown>
      <div class="text-lg font-extrabold">Audience Report</div>

      <div class="grid gap-3">

        <PromoDropdown title="progress" desc="Show progressbar, loadings or simple bar charts using progress component" classes="dropdown-top" link="components/progress">
          <div class="flex items-center p-1"
          v-for='(progressItem,i) in progressData' :key='progressItem.name'>
            <span class="w-48 text-xs text-base-content text-opacity-60">{{ progressItem.name }}</span>
            <progress
              class="progress"
              v-bind:class="progressItem.class"
              :value="progressItem.value"
              v-on:hover="this.value = progressItem.newValue"
              max="100"
            >
            </progress>
          </div>
        </PromoDropdown>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      selectedIndex: 0,
      tabs: ['Stats','Info','Options'],
      progressData: [
        { name: 'Search Engines',
          class: 'progress-success',
          value:50,
          newValue:70 },
        { name: 'Direct',
          class: 'progress-primary',
          value:30,
          newValue:50 },
        { name: 'Social Media',
          class: 'progress-secondary',
          value:70,
          newValue:80 },
        { name: 'Emails',
          class: 'progress-accent',
          value:90,
          newValue:80 },
        { name: 'Ad campaigns',
          class: 'progress-warning',
          value:65,
          newValue:85 },
      ]
    }
  },
}
</script>
