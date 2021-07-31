<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'stats', desc: 'Conainer ot multiple stat items' },
        { class: 'stat', desc: 'One stat item' },
        { class: 'stat-title', desc: 'Title text' },
        { class: 'stat-value', desc: 'Value text' },
        { class: 'stat-desc', desc: 'Description text' },
        { class: 'stat-figure', desc: 'For icon, image, etc' },
      ]
    }"/>

    <Wrapper title="single stat">
      <div class="shadow stats">
        <div class="stat">
          <div class="stat-title">Total Page Views</div>
          <div class="stat-value">89,400</div>
          <div class="stat-desc">21% more than last month</div>
        </div>
      </div>
    </Wrapper>

    <Wrapper title="with figure">
      <div class="w-full shadow stats">
        <div class="stat">
          <div class="stat-figure text-primary">
            <Icon glyph="heart" class="inline-block w-8 h-8 stroke-current" />
          </div>
          <div class="stat-title">Total Likes</div>
          <div class="stat-value text-primary">25.6K</div>
          <div class="stat-desc">21% more than last month</div>
        </div>
        <div class="stat">
          <div class="stat-figure text-info">
            <Icon glyph="lightning-bolt" class="inline-block w-8 h-8 stroke-current" />
          </div>
          <div class="stat-title">Page Views</div>
          <div class="stat-value text-info">2.6M</div>
          <div class="stat-desc">21% more than last month</div>
        </div>
        <div class="stat">
          <div class="stat-figure text-info">
            <div class="avatar online">
              <div class="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                <img src="/tailwind-css-component-profile-5@56w.png" class="mask mask-squircle" alt="Avatar Tailwind CSS Component">
              </div>
            </div>
          </div>
          <div class="stat-value">86%</div>
          <div class="stat-title">Tasks done</div>
          <div class="stat-desc text-info">31 tasks remaining</div>
        </div>
      </div>
    </Wrapper>

    <Wrapper title="stats row">
      <div class="w-full shadow stats">
        <div class="stat">
          <div class="stat-figure text-secondary">
            <Icon glyph="info" class="inline-block w-8 h-8 stroke-current" />
          </div>
          <div class="stat-title">Downloads</div>
          <div class="stat-value">310M</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div class="stat">
          <div class="stat-figure text-secondary">
            <Icon glyph="adjustments" class="inline-block w-8 h-8 stroke-current" />
          </div>
          <div class="stat-title">New Users</div>
          <div class="stat-value">4,200</div>
          <div class="stat-desc text-success">↗︎ 400 (22%)</div>
        </div>
        <div class="stat">
          <div class="stat-figure text-secondary">
            <Icon glyph="archive" class="inline-block w-8 h-8 stroke-current" />
          </div>
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc text-error">↘︎ 90 (14%)</div>
        </div>
      </div>
    </Wrapper>

    <Wrapper title="stats row items-center">
      <div class="w-full shadow stats">
        <div class="stat place-items-center place-content-center">
          <div class="stat-title">Downloads</div>
          <div class="stat-value">310M</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div class="stat place-items-center place-content-center">
          <div class="stat-title">New Users</div>
          <div class="stat-value text-success">4,200</div>
          <div class="stat-desc text-success">↗︎ 400 (22%)</div>
        </div>
        <div class="stat place-items-center place-content-center">
          <div class="stat-title">New Registers</div>
          <div class="stat-value text-error">1,200</div>
          <div class="stat-desc text-error">↘︎ 90 (14%)</div>
        </div>
      </div>
    </Wrapper>

    <Wrapper title="stats grid-flow-row">
      <div class="grid-flow-row shadow stats">
        <div class="stat">
          <div class="stat-title">Downloads</div>
          <div class="stat-value">310M</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div class="stat">
          <div class="stat-title">New Users</div>
          <div class="stat-value">4,200</div>
          <div class="stat-desc text-success">↗︎ 400 (22%)</div>
        </div>
        <div class="stat">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc text-error">↘︎ 90 (14%)</div>
        </div>
      </div>
    </Wrapper>

    <Wrapper title="with buttons, colors and more">
      <div class="border stats border-base-300">
        <div class="stat">
          <div class="stat-title">Account balance</div>
          <div class="stat-value">$89,400</div>
          <div class="stat-actions">
            <button class="btn btn-sm btn-success">Add funds</button>
          </div>
        </div>
        <div class="stat">
          <div class="stat-title">Current balance</div>
          <div class="stat-value">$89,400</div>
          <div class="stat-actions">
            <button class="btn btn-sm btn-primary">Withdrawal</button>
            <button class="btn btn-sm btn-primary">deposit</button>
          </div>
        </div>
      </div>
      <div class="w-full mt-2 border stats border-base-300">
        <div class="stat">
          <div class="stat-figure text-primary">
            <button class="btn loading btn-circle btn-lg bg-base-200 btn-ghost"></button>
          </div>
          <div class="stat-value">4,900/7,300</div>
          <div class="stat-title">Files transfered</div>
          <div class="stat-desc">
              <progress class="progress progress-secondary" value="60" max="100"></progress>
          </div>
        </div>
      </div>
    </Wrapper>

  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS stats component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS stats component - Tailwind CSS stats examples'
        }
      ]
    }
  }
}
</script>
