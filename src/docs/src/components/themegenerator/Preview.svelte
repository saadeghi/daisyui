<div class="sm:columns-2 md:columns-1 lg:columns-2 xl:columns-3 text-base-content [&>*]:shadow-sm [&>*]:mb-4 [&>*]:break-inside-avoid">

    <!-- <nav class="bg-base-200 text-base-content rounded-box col-span-8 flex gap-2 items-center justify-between">
      <ul class="menu menu-sm menu-horizontal shrink-0">
        <li>
          <details>
            <summary>Products</summary>
            <ul class="w-40">
              <li><a>Add new product</a></li>
              <li><a>Categories</a></li>
              <li><a>Tags</a></li>
            </ul>
          </details>
        </li>
        <li><button>Transactions</button></li>
        <li><button>Orders</button></li>
      </ul>
      <label class="input-border input-sm flex input items-center gap-2 w-auto me-2">
        <input type="text" class="grow" placeholder="Search">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
          <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd"></path>
        </svg>
      </label>
    </nav> -->

    <!-- filters -->
    <div class="card card-sm bg-base-100 border border-base-200">
      <div class="card-body gap-4">
        <h2 class="flex justify-between items-center">
          <span class="font-semibold">Preview</span>
          <span class="text-xs link">more</span>
        </h2>
        <div>
          <span class="badge badge-soft">
            Shoes
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
          </span>
          <span class="badge badge-soft">
            Bags
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
          </span>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center gap-2 border-b border-dashed border-b-base-content/5 py-2">
            <label class="flex items-center gap-2 select-none cursor-pointer">
              <input type="checkbox" class="checkbox checkbox-sm" checked/>
              <span>Hoodies</span>
            </label>
            <span class="badge badge-xs font-mono badge-neutral">25</span>
          </div>
          <div class="flex justify-between items-center gap-2 border-b border-dashed border-b-base-content/5 py-2">
            <label class="flex items-center gap-2 select-none cursor-pointer">
              <input type="checkbox" class="checkbox checkbox-sm" checked/>
              <span>Bags</span>
            </label>
            <span class="badge badge-xs font-mono badge-neutral">3</span>
          </div>
          <div class="flex justify-between items-center gap-2 border-b border-dashed border-b-base-content/5 py-2">
            <label class="flex items-center gap-2 select-none cursor-pointer">
              <input type="checkbox" class="checkbox checkbox-sm"/>
              <span>Shoes</span>
            </label>
            <span class="badge badge-xs font-mono badge-warning">0</span>
          </div>
          <div class="flex justify-between items-center gap-2 border-b border-dashed border-b-base-content/5 py-2">
            <label class="flex items-center gap-2 select-none cursor-pointer">
              <input type="checkbox" class="checkbox checkbox-sm"/>
              <span>Accessories</span>
            </label>
            <span class="badge badge-xs font-mono badge-neutral">4</span>
          </div>
        </div>
      </div>
    </div>

    <!-- calendar -->
    <div class="card card-sm bg-base-100 border border-base-200 overflow-hidden">
      <div class="card-body gap-4">
        <div class="grid grid-cols-7 border-b border-dashed border-b-base-300 pb-3">
          <div class="flex flex-col items-center py-1 px-2 rounded-btn">
            <span class="text-sm font-semibold">12</span>
            <span class="text-[10px] font-semibold opacity-50">M</span>
          </div>
          <div class="flex flex-col items-center py-1 px-2 rounded-btn">
            <span class="text-sm font-semibold">13</span>
            <span class="text-[10px] font-semibold opacity-50">T</span>
          </div>
          <div class="flex flex-col items-center py-1 px-2 rounded-btn bg-primary text-primary-content">
            <span class="text-sm font-semibold">14</span>
            <span class="text-[10px] font-semibold opacity-50">W</span>
          </div>
          <div class="flex flex-col items-center py-1 px-2 rounded-btn">
            <span class="text-sm font-semibold">15</span>
            <span class="text-[10px] font-semibold opacity-50">T</span>
          </div>
          <div class="flex flex-col items-center py-1 px-2 rounded-btn">
            <span class="text-sm font-semibold">16</span>
            <span class="text-[10px] font-semibold opacity-50">F</span>
          </div>
          <div class="flex flex-col items-center py-1 px-2 rounded-btn">
            <span class="text-sm font-semibold">17</span>
            <span class="text-[10px] font-semibold opacity-50">S</span>
          </div>
          <div class="flex flex-col items-center py-1 px-2 rounded-btn">
            <span class="text-sm font-semibold">18</span>
            <span class="text-[10px] font-semibold opacity-50">S</span>
          </div>
        </div>
        <div>
          <label class="input input-sm input-border w-auto flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
              <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" />
            </svg>
            <input type="text" placeholder="Search for events" />
          </label>
        </div>
        <div class="flex flex-col gap-2">
          <label class="flex gap-2 items-center cursor-pointer">
            <input type="checkbox" class="toggle toggle-sm toggle-primary" checked />
            <span class="text-xs">Show all day events</span>
          </label>
        </div>
      </div>
      <div class="bg-base-300">
        <div class="flex items-center gap-2 p-4">
          <div class="grow">
            <div class="text-sm font-medium">Team Sync Meeting</div>
            <div class="text-xs opacity-60">Weekly product review with design and development teams</div>
          </div>
          <div class="shrink-0">
            <span class="badge badge-sm badge-neutral">1h</span>
          </div>
        </div>
      </div>
    </div>

    <!-- range -->
    <div class="card card-sm bg-base-100 border border-base-200">
      <div class="card-body gap-4">
        <h2 class="flex justify-between items-center">
          <span class="font-semibold">Price range</span>
        </h2>
        <div class="text-5xl font-extralight text-center">25</div>
        <input type="range" class="range range-sm" />
      </div>
    </div>

    <!-- product -->
    <div class="card card-sm bg-base-100 border border-base-200">
      <figure class="p-2">
        <img
          class="rounded-[calc(var(--radius-box)-.5rem)]"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />
      </figure>
      <div class="card-body gap-4">
        <h2 class="flex justify-between items-center">
          <span class="font-semibold">Nike Shoes</span>
          <span class="badge badge-success badge-sm">SALE</span>
        </h2>
        <div class="flex gap-2 items-center">
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
          </div>
          <span class="text-xs opacity-60">420 reviews</span>
        </div>
        <div>
          <span class="text-2xl font-semibold">$120</span>
          <span class="text-sm opacity-60 line-through">$150</span>
        </div>
      </div>
    </div>

    <!-- list -->
    <div class="card card-sm bg-base-100 border border-base-200">
      <div class="card-body gap-4">
        <h2 class="flex justify-between items-center">
          <span class="font-semibold">Recent orders</span>
        </h2>
        <div class="flex flex-col text-xs">
          <div class="flex justify-between items-center gap-2 border-t border-dashed border-t-base-content/5 py-2">
            Charlie Chapman
            <span class="badge badge-xs badge-info">Send</span>
          </div>
          <div class="flex justify-between items-center gap-2 border-t border-dashed border-t-base-content/5 py-2">
            Howard Hudson
            <span class="badge badge-xs badge-error">Failed</span>
          </div>
          <div class="flex justify-between items-center gap-2 border-t border-dashed border-t-base-content/5 py-2">
              Fiona Fisher
              <span class="badge badge-xs badge-warning">In progress</span>
            </div>
          <div class="flex justify-between items-center gap-2 border-t border-dashed border-t-base-content/5 py-2">
            Nick Nelson
            <span class="badge badge-xs badge-success">Completed</span>
          </div>
          <div class="flex justify-between items-center gap-2 border-t border-dashed border-t-base-content/5 py-2">
            Amanda Anderson
            <span class="badge badge-xs badge-success">Completed</span>
          </div>
        </div>
        <div class="flex gap-2 items-end h-24 [&>*]:rounded-box [&>*]:bg-base-content [&>*]:w-full">
          <div style="height: 10%"></div>
          <div style="height: 20%"></div>
          <div style="height: 10%"></div>
          <div style="height: 25%"></div>
          <div style="height: 22%"></div>
          <div style="height: 15%"></div>
          <div style="height: 20%"></div>
          <div style="height: 35%"></div>
          <div style="height: 40%"></div>
          <div style="height: 45%"></div>
          <div style="height: 30%"></div>
          <div style="height: 35%"></div>
          <div style="height: 60%"></div>
          <div style="height: 65%"></div>
          <div style="height: 80%"></div>
          <div style="height: 90%"></div>
        </div>
        <p class="text-xs py-3">
          Sales volume reached $12,450 this week, showing a 15% increase from the previous period.
        </p>
        <div class="grid grid-cols-2 gap-2">
          <button class="btn">Add new</button>
          <button class="btn btn-neutral">Details</button>
        </div>
      </div>
    </div>

</div>
