---
title: Stat
desc: Stat Description
published: true
---

<script>
  import Component from "@components/Component.svelte"
</script>

<Component title="Stat">
<div class="shadow stats">
  <div class="stat">
    <div class="stat-title">Total Page Views</div>
    <div class="stat-value">89,400</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
</div>
<pre slot="html">{
`<div class="shadow stats">
  
  <div class="stat">
    <div class="stat-title">Total Page Views</div>
    <div class="stat-value">89,400</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
</div>`
}</pre>
</Component>

<Component title="Stat with icons or image">
<div class="shadow stats">
  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div class="stat-title">Total Likes</div>
    <div class="stat-value text-primary">25.6K</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  <div class="stat">
    <div class="stat-figure text-info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title">Page Views</div>
    <div class="stat-value text-info">2.6M</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  <div class="stat">
    <div class="stat-figure text-info">
      <div class="avatar online">
        <div class="w-16 rounded-full">
          <img src="https://api.lorem.space/image/face?w=128&h=128">
        </div>
      </div>
    </div>
    <div class="stat-value">86%</div>
    <div class="stat-title">Tasks done</div>
    <div class="stat-desc text-info">31 tasks remaining</div>
  </div>
</div>
<pre slot="html">{
`<div class="shadow stats">
  
  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div class="stat-title">Total Likes</div>
    <div class="stat-value text-primary">25.6K</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title">Page Views</div>
    <div class="stat-value text-info">2.6M</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-info">
      <div class="avatar online">
        <div class="w-16 rounded-full">
          <img src="https://api.lorem.space/image/face?w=128&h=128">
        </div>
      </div>
    </div>
    <div class="stat-value">86%</div>
    <div class="stat-title">Tasks done</div>
    <div class="stat-desc text-info">31 tasks remaining</div>
  </div>
  
</div>`
}</pre>
</Component>

<Component title="Stat">
<div class="shadow stats">
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div class="stat-title">Downloads</div>
    <div class="stat-value">31K</div>
    <div class="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div class="stat-title">New Users</div>
    <div class="stat-value">4,200</div>
    <div class="stat-desc text-success">↗︎ 400 (22%)</div>
  </div>
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div class="stat-title">New Registers</div>
    <div class="stat-value">1,200</div>
    <div class="stat-desc text-error">↘︎ 90 (14%)</div>
  </div>
</div>
<pre slot="html">{
`<div class="shadow stats">
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div class="stat-title">Downloads</div>
    <div class="stat-value">31K</div>
    <div class="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div class="stat-title">New Users</div>
    <div class="stat-value">4,200</div>
    <div class="stat-desc text-success">↗︎ 400 (22%)</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div class="stat-title">New Registers</div>
    <div class="stat-value">1,200</div>
    <div class="stat-desc text-error">↘︎ 90 (14%)</div>
  </div>
  
</div>`
}</pre>
</Component>

<Component title="Centered items">
<div class="shadow stats">
  <div class="stat place-items-center">
    <div class="stat-title">Downloads</div>
    <div class="stat-value">31K</div>
    <div class="stat-desc">From January 1st to February 1st</div>
  </div>
  <div class="stat place-items-center">
    <div class="stat-title">Users</div>
    <div class="stat-value text-info">4,200</div>
    <div class="stat-desc text-info">↗︎ 40 (2%)</div>
  </div>
  <div class="stat place-items-center">
    <div class="stat-title">New Registers</div>
    <div class="stat-value text-error">1,200</div>
    <div class="stat-desc text-error">↘︎ 90 (14%)</div>
  </div>
</div>
<pre slot="html">{
`<div class="shadow stats">
  
  <div class="stat place-items-center">
    <div class="stat-title">Downloads</div>
    <div class="stat-value">31K</div>
    <div class="stat-desc">From January 1st to February 1st</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">Users</div>
    <div class="stat-value text-info">4,200</div>
    <div class="stat-desc text-info">↗︎ 40 (2%)</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">New Registers</div>
    <div class="stat-value text-error">1,200</div>
    <div class="stat-desc text-error">↘︎ 90 (14%)</div>
  </div>
  
</div>`
}</pre>
</Component>

<Component title="Vertical">
<div class="shadow stats stats-vertical">
  <div class="stat">
    <div class="stat-title">Downloads</div>
    <div class="stat-value">31K</div>
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
<pre slot="html">{
`<div class="shadow stats stats-vertical">
  
  <div class="stat">
    <div class="stat-title">Downloads</div>
    <div class="stat-value">31K</div>
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
  
</div>`
}</pre>
</Component>

<Component title="Responsive (vertical on small screen, horizontal on large screen)">
<div class="shadow stats stats-vertical lg:stats-horizontal">
  <div class="stat">
    <div class="stat-title">Downloads</div>
    <div class="stat-value">31K</div>
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
<pre slot="html">{
`<div class="shadow stats stats-vertical lg:stats-horizontal">
  
  <div class="stat">
    <div class="stat-title">Downloads</div>
    <div class="stat-value">31K</div>
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
  
</div>`
}</pre>
</Component>

<Component title="With custom colors and button">
<div class="stats bg-primary text-primary-content">
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
      <button class="btn btn-sm">Withdrawal</button> 
      <button class="btn btn-sm">deposit</button>
    </div>
  </div>
</div>
<pre slot="html">{
`<div class="stats bg-primary text-primary-content">
  
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
      <button class="btn btn-sm">Withdrawal</button> 
      <button class="btn btn-sm">deposit</button>
    </div>
  </div>
  
</div>`
}</pre>
</Component>
