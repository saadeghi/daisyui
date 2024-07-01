---
title: Date picker
desc: The date picker component is used to select a date from a calendar.
published: true
layout: components
---

<script>
  import Component from "$components/Component.svelte"
  import ClassTable from "$components/ClassTable.svelte"
  import ComponentPageTabs from "$components/ComponentPageTabs.svelte"
  import BrowserSupport from "$components/BrowserSupport.svelte"
  import { prefix } from '$lib/stores';
  import { replace } from '$lib/actions';
  let indeterminate = true;
</script>

<!-- <ComponentPageTabs/> -->

<ClassTable
data="{[
  { type:'component', class: 'date-picker', desc: 'For date picker' },
]}"
/>

<Component title="Date picker">
<div class="date-picker bg-base-200 w-80 rounded-box" role="application" aria-label="Date picker">
  <div class="date-picker-header">
    <button aria-label="Previous month">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="fill-current" viewBox="0 0 24 24"><path d="m10.8284 12.0007 4.9498 4.9497-1.4142 1.4142L8 12.0007l6.364-6.36398 1.4142 1.41421-4.9498 4.94977Z"/></svg>
    </button>
    <div id="monthLabel">April 2024</div>
    <button aria-label="Next month">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="fill-current" viewBox="0 0 24 24"><path d="M13.1717 12.0007 8.22192 7.05093l1.41422-1.41421 6.36396 6.36398-6.36396 6.3639-1.41422-1.4142 4.94978-4.9497Z"/></svg>
    </button>
  </div>
  <div class="date-picker-body" aria-labelledby="monthLabel" role="grid">
    <ul class="date-picker-weekdays" role="row">
      <li role="columnheader" aria-label="Sunday">Sun</li>
      <li role="columnheader" aria-label="Monday">Mon</li>
      <li role="columnheader" aria-label="Tuesday">Tue</li>
      <li role="columnheader" aria-label="Wednesday">Wed</li>
      <li role="columnheader" aria-label="Thursday">Thu</li>
      <li role="columnheader" aria-label="Friday">Fri</li>
      <li role="columnheader" aria-label="Saturday">Sat</li>
    </ul>
    <ul class="date-picker-days" role="rowgroup">
      <li role="gridcell" aria-disabled="true"></li>
      <li role="gridcell" aria-disabled="true"></li>
      <li role="gridcell" aria-disabled="true"></li>
      <li role="gridcell" aria-disabled="true"></li>
      <li role="gridcell" aria-disabled="true"></li>
      <li role="gridcell" aria-disabled="true"></li>
      <li role="button" tabindex="-1" aria-selected="false">1</li>
      <li role="button" tabindex="-1" aria-selected="false">2</li>
      <li role="button" tabindex="-1" aria-selected="false">3</li>
      <li role="button" tabindex="-1" aria-selected="false">4</li>
      <li role="button" tabindex="-1" aria-selected="false">5</li>
      <li role="button" tabindex="-1" aria-selected="false">6</li>
      <li role="button" tabindex="-1" aria-selected="false">7</li>
      <li role="button" tabindex="-1" aria-selected="false">8</li>
      <li role="button" tabindex="-1" aria-selected="false">9</li>
      <li role="button" tabindex="-1" aria-selected="false">10</li>
      <li role="button" tabindex="-1" aria-selected="false">11</li>
      <li role="button" tabindex="-1" aria-selected="false">12</li>
      <li role="button" tabindex="-1" aria-selected="false">13</li>
      <li role="button" tabindex="-1" aria-selected="false">14</li>
      <li role="button" tabindex="-1" aria-selected="false">15</li>
      <li role="button" tabindex="-1" aria-selected="false">16</li>
      <li role="button" tabindex="-1" aria-selected="false">17</li>
      <li role="button" tabindex="-1" aria-selected="false">18</li>
      <li role="button" tabindex="-1" aria-selected="false">19</li>
      <li role="button" tabindex="-1" aria-selected="false">20</li>
      <li role="button" tabindex="-1" aria-selected="false">21</li>
      <li role="gridcell" tabindex="0" aria-selected="true" aria-current="date">22</li>
      <li role="button" tabindex="-1" aria-selected="false">23</li>
      <li role="button" tabindex="-1" aria-selected="false">24</li>
      <li role="button" tabindex="-1" aria-selected="false">25</li>
      <li role="button" tabindex="-1" aria-selected="false">26</li>
      <li role="button" tabindex="-1" aria-selected="false">27</li>
      <li role="button" tabindex="-1" aria-selected="false">28</li>
      <li role="button" tabindex="-1" aria-selected="false">29</li>
      <li role="button" tabindex="-1" aria-selected="false">30</li>
    </ul>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="date-picker bg-base-200 w-80 rounded-box" role="application" aria-label="Date picker">
  <div class="date-picker-header">
    <button aria-label="Previous month">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="fill-current" viewBox="0 0 24 24"><path d="m10.8284 12.0007 4.9498 4.9497-1.4142 1.4142L8 12.0007l6.364-6.36398 1.4142 1.41421-4.9498 4.94977Z"/></svg>
    </button>
    <div id="monthLabel">April 2024</div>
    <button aria-label="Next month">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="fill-current" viewBox="0 0 24 24"><path d="M13.1717 12.0007 8.22192 7.05093l1.41422-1.41421 6.36396 6.36398-6.36396 6.3639-1.41422-1.4142 4.94978-4.9497Z"/></svg>
    </button>
  </div>
  <div class="date-picker-body" aria-labelledby="monthLabel" role="grid">
    <ul class="date-picker-weekdays" role="row">
      <li role="columnheader" aria-label="Sunday">Sun</li>
      <li role="columnheader" aria-label="Monday">Mon</li>
      <li role="columnheader" aria-label="Tuesday">Tue</li>
      <li role="columnheader" aria-label="Wednesday">Wed</li>
      <li role="columnheader" aria-label="Thursday">Thu</li>
      <li role="columnheader" aria-label="Friday">Fri</li>
      <li role="columnheader" aria-label="Saturday">Sat</li>
    </ul>
    <ul class="date-picker-days" role="rowgroup">
      <li role="gridcell" aria-disabled="true"></li>
      <li role="gridcell" aria-disabled="true"></li>
      <li role="gridcell" aria-disabled="true"></li>
      <li role="gridcell" aria-disabled="true"></li>
      <li role="gridcell" aria-disabled="true"></li>
      <li role="gridcell" aria-disabled="true"></li>
      <li role="button" tabindex="-1" aria-selected="false">1</li>
      <li role="button" tabindex="-1" aria-selected="false">2</li>
      <li role="button" tabindex="-1" aria-selected="false">3</li>
      <li role="button" tabindex="-1" aria-selected="false">4</li>
      <li role="button" tabindex="-1" aria-selected="false">5</li>
      <li role="button" tabindex="-1" aria-selected="false">6</li>
      <li role="button" tabindex="-1" aria-selected="false">7</li>
      <li role="button" tabindex="-1" aria-selected="false">8</li>
      <li role="button" tabindex="-1" aria-selected="false">9</li>
      <li role="button" tabindex="-1" aria-selected="false">10</li>
      <li role="button" tabindex="-1" aria-selected="false">11</li>
      <li role="button" tabindex="-1" aria-selected="false">12</li>
      <li role="button" tabindex="-1" aria-selected="false">13</li>
      <li role="button" tabindex="-1" aria-selected="false">14</li>
      <li role="button" tabindex="-1" aria-selected="false">15</li>
      <li role="button" tabindex="-1" aria-selected="false">16</li>
      <li role="button" tabindex="-1" aria-selected="false">17</li>
      <li role="button" tabindex="-1" aria-selected="false">18</li>
      <li role="button" tabindex="-1" aria-selected="false">19</li>
      <li role="button" tabindex="-1" aria-selected="false">20</li>
      <li role="button" tabindex="-1" aria-selected="false">21</li>
      <li role="gridcell" tabindex="0" aria-selected="true" aria-current="date">22</li>
      <li role="button" tabindex="-1" aria-selected="false">23</li>
      <li role="button" tabindex="-1" aria-selected="false">24</li>
      <li role="button" tabindex="-1" aria-selected="false">25</li>
      <li role="button" tabindex="-1" aria-selected="false">26</li>
      <li role="button" tabindex="-1" aria-selected="false">27</li>
      <li role="button" tabindex="-1" aria-selected="false">28</li>
      <li role="button" tabindex="-1" aria-selected="false">29</li>
      <li role="button" tabindex="-1" aria-selected="false">30</li>
    </ul>
  </div>
</div>`
}</pre>
</Component>

<Component title="Date picker with button">
<div>
  <div class="text-sm mb-4 text-center">Click outside to close</div>
  <div class="dropdown mb-32">
    <div tabindex="0" role="button" class="m-1 btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="fill-current" viewBox="0 0 24 24"><path d="M9 1v2h6V1h2v2h4c.5523 0 1 .44772 1 1v16c0 .5523-.4477 1-1 1H3c-.55228 0-1-.4477-1-1V4c0-.55228.44772-1 1-1h4V1h2Zm11 10H4v8h16v-8ZM8 13v2H6v-2h2Zm5 0v2h-2v-2h2Zm5 0v2h-2v-2h2ZM7 5H4v4h16V5h-3v2h-2V5H9v2H7V5Z"/></svg>
      Click to open
    </div>
    <div tabindex="0" class="dropdown-content z-[1] date-picker bg-base-200 w-80 rounded-box" role="application" aria-label="Date picker">
      <div class="date-picker-header">
        <button aria-label="Previous month">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="fill-current" viewBox="0 0 24 24"><path d="m10.8284 12.0007 4.9498 4.9497-1.4142 1.4142L8 12.0007l6.364-6.36398 1.4142 1.41421-4.9498 4.94977Z"/></svg>
        </button>
        <div id="monthLabel">April 2024</div>
        <button aria-label="Next month">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="fill-current" viewBox="0 0 24 24"><path d="M13.1717 12.0007 8.22192 7.05093l1.41422-1.41421 6.36396 6.36398-6.36396 6.3639-1.41422-1.4142 4.94978-4.9497Z"/></svg>
        </button>
      </div>
      <div class="date-picker-body" aria-labelledby="monthLabel" role="grid">
        <ul class="date-picker-weekdays" role="row">
          <li role="columnheader" aria-label="Sunday">Sun</li>
          <li role="columnheader" aria-label="Monday">Mon</li>
          <li role="columnheader" aria-label="Tuesday">Tue</li>
          <li role="columnheader" aria-label="Wednesday">Wed</li>
          <li role="columnheader" aria-label="Thursday">Thu</li>
          <li role="columnheader" aria-label="Friday">Fri</li>
          <li role="columnheader" aria-label="Saturday">Sat</li>
        </ul>
        <ul class="date-picker-days" role="rowgroup">
          <li role="gridcell" aria-disabled="true"></li>
          <li role="gridcell" aria-disabled="true"></li>
          <li role="gridcell" aria-disabled="true"></li>
          <li role="gridcell" aria-disabled="true"></li>
          <li role="gridcell" aria-disabled="true"></li>
          <li role="gridcell" aria-disabled="true"></li>
          <li role="button" tabindex="-1" aria-selected="false">1</li>
          <li role="button" tabindex="-1" aria-selected="false">2</li>
          <li role="button" tabindex="-1" aria-selected="false">3</li>
          <li role="button" tabindex="-1" aria-selected="false">4</li>
          <li role="button" tabindex="-1" aria-selected="false">5</li>
          <li role="button" tabindex="-1" aria-selected="false">6</li>
          <li role="button" tabindex="-1" aria-selected="false">7</li>
          <li role="button" tabindex="-1" aria-selected="false">8</li>
          <li role="button" tabindex="-1" aria-selected="false">9</li>
          <li role="button" tabindex="-1" aria-selected="false">10</li>
          <li role="button" tabindex="-1" aria-selected="false">11</li>
          <li role="button" tabindex="-1" aria-selected="false">12</li>
          <li role="button" tabindex="-1" aria-selected="false">13</li>
          <li role="button" tabindex="-1" aria-selected="false">14</li>
          <li role="button" tabindex="-1" aria-selected="false">15</li>
          <li role="button" tabindex="-1" aria-selected="false">16</li>
          <li role="button" tabindex="-1" aria-selected="false">17</li>
          <li role="button" tabindex="-1" aria-selected="false">18</li>
          <li role="button" tabindex="-1" aria-selected="false">19</li>
          <li role="button" tabindex="-1" aria-selected="false">20</li>
          <li role="button" tabindex="-1" aria-selected="false">21</li>
          <li role="gridcell" tabindex="0" aria-selected="true" aria-current="date">22</li>
          <li role="button" tabindex="-1" aria-selected="false">23</li>
          <li role="button" tabindex="-1" aria-selected="false">24</li>
          <li role="button" tabindex="-1" aria-selected="false">25</li>
          <li role="button" tabindex="-1" aria-selected="false">26</li>
          <li role="button" tabindex="-1" aria-selected="false">27</li>
          <li role="button" tabindex="-1" aria-selected="false">28</li>
          <li role="button" tabindex="-1" aria-selected="false">29</li>
          <li role="button" tabindex="-1" aria-selected="false">30</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$dropdown">
  <div tabindex="0" role="button" class="$$btn m-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="fill-current" viewBox="0 0 24 24"><path d="M9 1v2h6V1h2v2h4c.5523 0 1 .44772 1 1v16c0 .5523-.4477 1-1 1H3c-.55228 0-1-.4477-1-1V4c0-.55228.44772-1 1-1h4V1h2Zm11 10H4v8h16v-8ZM8 13v2H6v-2h2Zm5 0v2h-2v-2h2Zm5 0v2h-2v-2h2ZM7 5H4v4h16V5h-3v2h-2V5H9v2H7V5Z"/></svg>
      Click to open
  </div>
<div tabindex="0" class="dropdown-content z-[1] date-picker bg-base-200 w-80 rounded-box" role="application" aria-label="Date picker">
      <div class="date-picker-header">
        <button aria-label="Previous month">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="fill-current" viewBox="0 0 24 24"><path d="m10.8284 12.0007 4.9498 4.9497-1.4142 1.4142L8 12.0007l6.364-6.36398 1.4142 1.41421-4.9498 4.94977Z"/></svg>
        </button>
        <div id="monthLabel">April 2024</div>
        <button aria-label="Next month">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="fill-current" viewBox="0 0 24 24"><path d="M13.1717 12.0007 8.22192 7.05093l1.41422-1.41421 6.36396 6.36398-6.36396 6.3639-1.41422-1.4142 4.94978-4.9497Z"/></svg>
        </button>
      </div>
      <div class="date-picker-body" aria-labelledby="monthLabel" role="grid">
        <ul class="date-picker-weekdays" role="row">
          <li role="columnheader" aria-label="Sunday">Sun</li>
          <li role="columnheader" aria-label="Monday">Mon</li>
          <li role="columnheader" aria-label="Tuesday">Tue</li>
          <li role="columnheader" aria-label="Wednesday">Wed</li>
          <li role="columnheader" aria-label="Thursday">Thu</li>
          <li role="columnheader" aria-label="Friday">Fri</li>
          <li role="columnheader" aria-label="Saturday">Sat</li>
        </ul>
        <ul class="date-picker-days" role="rowgroup">
          <li role="gridcell" aria-disabled="true"></li>
          <li role="gridcell" aria-disabled="true"></li>
          <li role="gridcell" aria-disabled="true"></li>
          <li role="gridcell" aria-disabled="true"></li>
          <li role="gridcell" aria-disabled="true"></li>
          <li role="gridcell" aria-disabled="true"></li>
          <li role="button" tabindex="-1" aria-selected="false">1</li>
          <li role="button" tabindex="-1" aria-selected="false">2</li>
          <li role="button" tabindex="-1" aria-selected="false">3</li>
          <li role="button" tabindex="-1" aria-selected="false">4</li>
          <li role="button" tabindex="-1" aria-selected="false">5</li>
          <li role="button" tabindex="-1" aria-selected="false">6</li>
          <li role="button" tabindex="-1" aria-selected="false">7</li>
          <li role="button" tabindex="-1" aria-selected="false">8</li>
          <li role="button" tabindex="-1" aria-selected="false">9</li>
          <li role="button" tabindex="-1" aria-selected="false">10</li>
          <li role="button" tabindex="-1" aria-selected="false">11</li>
          <li role="button" tabindex="-1" aria-selected="false">12</li>
          <li role="button" tabindex="-1" aria-selected="false">13</li>
          <li role="button" tabindex="-1" aria-selected="false">14</li>
          <li role="button" tabindex="-1" aria-selected="false">15</li>
          <li role="button" tabindex="-1" aria-selected="false">16</li>
          <li role="button" tabindex="-1" aria-selected="false">17</li>
          <li role="button" tabindex="-1" aria-selected="false">18</li>
          <li role="button" tabindex="-1" aria-selected="false">19</li>
          <li role="button" tabindex="-1" aria-selected="false">20</li>
          <li role="button" tabindex="-1" aria-selected="false">21</li>
          <li role="gridcell" tabindex="0" aria-selected="true" aria-current="date">22</li>
          <li role="button" tabindex="-1" aria-selected="false">23</li>
          <li role="button" tabindex="-1" aria-selected="false">24</li>
          <li role="button" tabindex="-1" aria-selected="false">25</li>
          <li role="button" tabindex="-1" aria-selected="false">26</li>
          <li role="button" tabindex="-1" aria-selected="false">27</li>
          <li role="button" tabindex="-1" aria-selected="false">28</li>
          <li role="button" tabindex="-1" aria-selected="false">29</li>
          <li role="button" tabindex="-1" aria-selected="false">30</li>
        </ul>
      </div>
    </div>
</div>`
}</pre>
</Component>
