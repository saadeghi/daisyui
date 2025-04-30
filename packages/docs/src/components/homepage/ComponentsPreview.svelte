<script>
  import { t } from "$lib/i18n.svelte.js"
  let { animateValue, section, index } = $props()
</script>

<div class="hidden flex-col gap-6 xl:flex">
  <div class="flex gap-6">
    <div
      class="rounded-box bg-base-200 h-full motion-reduce:opacity-100!"
      style={`opacity:${animateValue(section, [16, 21], [0, 1])}`}
    >
      <ul class="menu">
        <li class="menu-title">
          <svg
            width="20"
            height="20"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6H8C6.89543 6 6 6.89543 6 8V18C6 19.1046 6.89543 20 8 20H18C19.1046 20 20 19.1046 20 18V8C20 6.89543 19.1046 6 18 6Z"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linejoin="round"
            >
            </path>
            <path
              d="M18 28H8C6.89543 28 6 28.8954 6 30V40C6 41.1046 6.89543 42 8 42H18C19.1046 42 20 41.1046 20 40V30C20 28.8954 19.1046 28 18 28Z"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linejoin="round"
            >
            </path>
            <path
              d="M40 6H30C28.8954 6 28 6.89543 28 8V18C28 19.1046 28.8954 20 30 20H40C41.1046 20 42 19.1046 42 18V8C42 6.89543 41.1046 6 40 6Z"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linejoin="round"
            >
            </path>
            <path
              d="M40 28H30C28.8954 28 28 28.8954 28 30V40C28 41.1046 28.8954 42 30 42H40C41.1046 42 42 41.1046 42 40V30C42 28.8954 41.1046 28 40 28Z"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linejoin="round"
            >
            </path>
          </svg>
        </li>
        <li>
          <button tabindex="-1" class="active" aria-label="tailwindcss button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6V42H42"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
              <path
                d="M14 34L22 18L32 27L42 6"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </button>
        </li>
        <li>
          <button tabindex="-1" aria-label="tailwindcss button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </button>
        </li>
        <li>
          <button tabindex="-1" aria-label="tailwindcss button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H44V36H29L24 41L19 36H4V6Z"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
              <path
                d="M23 21H25.0025"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
              >
              </path>
              <path
                d="M33.001 21H34.9999"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
              >
              </path>
              <path
                d="M13.001 21H14.9999"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
              >
              </path>
            </svg>
          </button>
        </li>
        <li>
          <button tabindex="-1" aria-label="tailwindcss button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24"
                cy="12"
                r="8"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </circle>
              <path
                d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </button>
        </li>
        <li>
          <button tabindex="-1" aria-label="tailwindcss button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#icon-71)">
                <path
                  d="M24 10L12 18L24 26L36 18L24 10Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                >
                </path>
                <path
                  d="M24 10L36 18L41 11L30 4L24 10Z"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                >
                </path>
                <path
                  d="M24 10L12 18L7 11L18 4L24 10Z"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                >
                </path>
                <path
                  d="M43 22L36 18L24 26L31 31L43 22Z"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                >
                </path>
                <path
                  d="M5 22L12 18L24 26L17 31L5 22Z"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                >
                </path>
                <path
                  d="M36 28V37L24 44L12 37V28"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                </path>
              </g>
              <defs>
                <clipPath id="icon-71">
                  <rect width="48" height="48" fill="currentColor"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
        </li>
      </ul>
    </div>
    <div
      class="rounded-box bg-base-200 h-full w-60 shrink-0 motion-reduce:opacity-100!"
      style={`opacity:${animateValue(section, [14, 19], [0, 1])}`}
    >
      <ul class="menu w-full">
        <li class="menu-title">{$t("Admin panel")}</li>
        <li>
          <button tabindex="-1" class="active">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6V42H42"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
              <path
                d="M14 34L22 18L32 27L42 6"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
            {$t("Dashboard")}
          </button>
        </li>
        <li>
          <button tabindex="-1" aria-label="tailwindcss button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
            {$t("Notifications")}
          </button>
        </li>
        <li>
          <button tabindex="-1" aria-label="tailwindcss button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H44V36H29L24 41L19 36H4V6Z"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
              <path
                d="M23 21H25.0025"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
              >
              </path>
              <path
                d="M33.001 21H34.9999"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
              >
              </path>
              <path
                d="M13.001 21H14.9999"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
              >
              </path>
            </svg>
            {$t("Messages")}
          </button>
        </li>
        <li>
          <button tabindex="-1" aria-label="tailwindcss button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24"
                cy="12"
                r="8"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </circle>
              <path
                d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
            {$t("People")}
          </button>
        </li>
        <li>
          <button tabindex="-1" aria-label="tailwindcss button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#icon-72)">
                <path
                  d="M24 10L12 18L24 26L36 18L24 10Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                >
                </path>
                <path
                  d="M24 10L36 18L41 11L30 4L24 10Z"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                >
                </path>
                <path
                  d="M24 10L12 18L7 11L18 4L24 10Z"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                >
                </path>
                <path
                  d="M43 22L36 18L24 26L31 31L43 22Z"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                >
                </path>
                <path
                  d="M5 22L12 18L24 26L17 31L5 22Z"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                >
                </path>
                <path
                  d="M36 28V37L24 44L12 37V28"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                </path>
              </g>
              <defs>
                <clipPath id="icon-72">
                  <rect width="48" height="48" fill="currentColor"></rect>
                </clipPath>
              </defs>
            </svg>
            {$t("Products")}
            <span class="badge badge-info">50</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div
    aria-hidden="true"
    class="rounded-box bg-base-200 grid grow grid-cols-2 gap-4 p-6 motion-reduce:opacity-100!"
    style={`opacity:${animateValue(section, [15, 20], [0, 1])}`}
  >
    <button tabindex="-1" aria-label="tailwindcss button" class="btn btn-neutral">Neutral</button>
    <button tabindex="-1" aria-label="tailwindcss button" class="btn btn-primary">Primary</button>
    <button tabindex="-1" aria-label="tailwindcss button" class="btn btn-secondary">
      Secondary
    </button>
    <button tabindex="-1" aria-label="tailwindcss button" class="btn btn-accent">Accent</button>
    <button tabindex="-1" aria-label="tailwindcss button" class="btn btn-info">Info</button>
    <button tabindex="-1" aria-label="tailwindcss button" class="btn btn-success">Success</button>
    <button tabindex="-1" aria-label="tailwindcss button" class="btn btn-warning">Warning</button>
    <button tabindex="-1" aria-label="tailwindcss button" class="btn btn-error">Error</button>
  </div>
</div>
<div class="flex grow flex-col gap-6">
  <div
    class="navbar bg-base-200 rounded-box hidden motion-reduce:opacity-100! xl:flex"
    style={`opacity:${animateValue(section, [13, 18], [0, 1])}`}
  >
    <div class="grow">
      <button tabindex="-1" class="btn btn-ghost btn-circle avatar" aria-label="tailwindcss avatar">
        <div class="w-10 rounded-full">
          <img
            width="40"
            height="40"
            src="https://img.daisyui.com/images/profile/demo/superperson@94.webp"
            alt="Tailwind button"
            aria-label="Tailwind CSS button"
          />
        </div>
      </button>
    </div>
    <ul class="menu menu-sm menu-horizontal rounded-box">
      <li>
        <button tabindex="-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            >
            </path>
          </svg>
          Inbox
          <span class="badge badge-sm">99+</span>
        </button>
      </li>
      <li>
        <button tabindex="-1">
          {$t("Updates")}
          <span class="badge badge-sm badge-warning">NEW</span>
        </button>
      </li>
      <li>
        <button tabindex="-1">
          {$t("Stats")}
          <span class="badge badge-xs badge-info"></span>
        </button>
      </li>
    </ul>
  </div>
  <div
    class="rounded-box flex grow flex-col px-6 pt-12 pb-8 text-center will-change-auto motion-reduce:transform-none! max-[1280px]:transform-none!"
    style={`transform:scale(${animateValue(section, [0, 10], [2, 1])})translateY(${animateValue(
      section,
      [0, 10],
      [10, 0],
    )}%)`}
  >
    <div class="font-title text-[clamp(1.5rem,6vw,3rem)] leading-none font-black">
      {$t("Unlimited themes")}
    </div>
    <p class="font-title font-light md:text-3xl lg:text-4xl">{$t("with zero effort")}</p>
    <div class="h-4"></div>
    <p class="text-base-content/80 mx-auto max-w-lg font-sans text-sm font-light">
      {$t(
        "daisyUI adds a set of customizable color names to Tailwind CSS and these new colors use CSS variables for the values. Using daisyUI color names, you get Dark Mode and even more themes without adding a new class name.",
      )}
    </p>
    <div class="h-4"></div>
    <div>
      <a
        class="btn btn-wide btn-primary"
        data-sveltekit-preload-data
        href="/docs/themes/"
        tabindex={index == 0 ? 0 : -1}
      >
        {$t("See all themes")}
      </a>
    </div>
  </div>
  <div
    class="card bg-base-200 hidden motion-reduce:opacity-100! xl:flex"
    style={`opacity:${animateValue(section, [11, 16], [0, 1])}`}
  >
    <div class="card-body">
      <div class="flex h-full items-center justify-between gap-6">
        <input
          tabindex="-1"
          aria-label="tailwindcss toggle"
          checked="checked"
          type="checkbox"
          name="sample-checkbox"
          class="toggle pointer-events-none"
        />
        <input
          tabindex="-1"
          aria-label="tailwindcss toggle"
          checked="checked"
          type="checkbox"
          name="sample-checkbox"
          class="toggle toggle-primary pointer-events-none"
        />
        <input
          tabindex="-1"
          aria-label="tailwindcss toggle"
          checked="checked"
          type="checkbox"
          name="sample-checkbox"
          class="toggle toggle-secondary pointer-events-none"
        />
        <input
          tabindex="-1"
          aria-label="tailwindcss toggle"
          checked="checked"
          type="checkbox"
          name="sample-checkbox"
          class="toggle toggle-accent pointer-events-none"
        />
        <input
          tabindex="-1"
          aria-label="tailwindcss checkbox"
          checked="checked"
          type="checkbox"
          name="sample-checkbox"
          class="checkbox pointer-events-none"
        />
        <input
          tabindex="-1"
          aria-label="tailwindcss checkbox"
          checked="checked"
          type="checkbox"
          name="sample-checkbox"
          class="checkbox checkbox-primary pointer-events-none"
        />
        <input
          tabindex="-1"
          aria-label="tailwindcss checkbox"
          checked="checked"
          type="checkbox"
          name="sample-checkbox"
          class="checkbox checkbox-secondary pointer-events-none"
        />
        <input
          tabindex="-1"
          aria-label="tailwindcss checkbox"
          checked="checked"
          type="checkbox"
          name="sample-checkbox"
          class="checkbox checkbox-accent pointer-events-none"
        />
      </div>
    </div>
  </div>
</div>
<div
  class="rounded-box bg-base-200 card hidden h-full w-80 shrink-0 motion-reduce:opacity-100! xl:flex"
  style={`opacity:${animateValue(section, [12, 17], [0, 1])}`}
>
  <div class="card-body">
    <div class="card-title mb-4 text-sm">{$t("Semantic colors")}</div>
    <div class="grid grid-cols-4 gap-4">
      <div class="flex flex-col items-center gap-1">
        <div class="bg-primary rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">primary</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-secondary rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">secondary</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-accent rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">accent</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-neutral rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">neutral</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-primary-content rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">primary content</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-secondary-content rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">secondary content</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-accent-content rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">accent content</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-neutral-content rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">neutral content</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-base-100 rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">base 100</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-base-200 rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">base 200</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-base-300 rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">base 300</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-base-content rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">base content</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-info rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">info</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-success rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">success</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-warning rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">warning</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-error rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">error</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-info-content rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">info content</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-success-content rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">success content</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-warning-content rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">warning content</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="bg-error-content rounded-field aspect-square w-10"></div>
        <div class="text-base-content/60 text-center text-[.6rem]">error content</div>
      </div>
    </div>
    <div class="mt-6">
      <a
        class="btn btn-block"
        data-sveltekit-preload-data
        href="/docs/colors/"
        tabindex={index == 0 ? 0 : -1}
      >
        {$t("Learn more about colors")}
      </a>
    </div>
  </div>
</div>
