<template>
  <div class="flex flex-col">
    <PromoDropdown title="tab" desc="Beautiful tabs to switch between sections" classes="" link="components/tab">
      <div class="flex-grow-0 tabs w-full">
        <button class="flex-1 tab tab-lifted tab-lg tab-border-none tab-active">Stats</button>
        <button class="flex-1 tab tab-lifted tab-lg tab-border-none">Info</button>
        <button class="flex-1 tab tab-lifted tab-lg tab-border-none">Options</button>
      </div>
    </PromoDropdown>
    <div class="grid flex-grow gap-3 p-6 rounded-tl-none shadow-xl rounded-xl bg-base-100 w-full">
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

        <PromoDropdown title="progress" desc="Show progressbar, loadings or simple bar charts using progress component" classes="" link="components/progress">
          <div class="flex items-center">
            <span class="w-48 text-xs text-base-content text-opacity-60">Search Engines</span>
            <progress class="progress progress-success" value="50" max="100">
            </progress>
          </div>
        </PromoDropdown>
        <PromoDropdown title="progress" desc="Show progressbar, loadings or simple bar charts using progress component" classes="" link="components/progress">
          <div class="flex items-center">
            <span class="w-48 text-xs text-base-content text-opacity-60">Direct</span>
            <progress class="progress progress-primary" value="30" max="100">
            </progress>
          </div>
        </PromoDropdown>
        <PromoDropdown title="progress" desc="Show progressbar, loadings or simple bar charts using progress component" classes="dropdown-top" link="components/progress">
          <div class="flex items-center">
            <span class="w-48 text-xs text-base-content text-opacity-60">Social Media</span>
            <progress class="progress progress-secondary" value="70" max="100">
            </progress>
          </div>
        </PromoDropdown>
        <PromoDropdown title="progress" desc="Show progressbar, loadings or simple bar charts using progress component" classes="dropdown-top" link="components/progress">
          <div class="flex items-center">
            <span class="w-48 text-xs text-base-content text-opacity-60">Emails</span>
            <progress class="progress progress-accent" value="90" max="100">
            </progress>
          </div>
        </PromoDropdown>
        <PromoDropdown title="progress" desc="Show progressbar, loadings or simple bar charts using progress component" classes="dropdown-top" link="components/progress">
          <div class="flex items-center">
            <span class="w-48 text-xs text-base-content text-opacity-60">Ad campaigns</span>
            <progress class="progress progress-warning" value="65" max="100">
            </progress>
          </div>
        </PromoDropdown>
      </div>
    </div>
  </div>
</template>
