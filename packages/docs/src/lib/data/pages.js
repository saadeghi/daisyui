export const pagesThatDontNeedSidebar = [
  "/",
  "/components/",
  "/blog/",
  "/blog/*/",
  "/store/",
  "/store/*/",
  "/compare/*/",
  "/alternative/*/",
  "/resources/*/",
  "/*-component-library/",
  "/theme-generator/",
]

export const pages = [
  {
    name: "Docs",
    icon: '<svg width="18" height="18" viewBox="0 0 48 48" class="text-orange-400 size-5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"/><path d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"/></svg>',
    collapsible: true,
    items: [
      {
        name: "Introduction",
        tags: "Intro",
        href: "/docs/intro/",
      },
      {
        name: "Install",
        tags: "how setup install npm",
        href: "/docs/install/",
      },
      {
        name: "CDN",
        tags: "cdn nobuild install",
        href: "/docs/cdn/",
      },
      {},
      {
        name: "Use",
        tags: "how use",
        href: "/docs/use/",
      },
      {
        name: "Upgrade guide",
        tags: "",
        href: "/docs/upgrade/",
      },
      {
        name: "V5 release notes",
        tags: "",
        href: "/docs/v5/",
      },
      {
        name: "Code editor & LLM setup",
        tags: "llm editor vscode cursor zed",
        href: "/docs/editor/",
        badge: "new",
      },
      {},
      {
        name: "Customize",
        tags: "customize",
        href: "/docs/customize/",
      },
      {
        name: "Config",
        tags: "setup config styled themes base logs utils rtl",
        href: "/docs/config/",
      },
      {
        name: "Colors",
        tags: "colors",
        href: "/docs/colors/",
      },
      {
        name: "Themes",
        tags: "themes disable custom color generator",
        href: "/docs/themes/",
      },
      {
        name: "Base style",
        tags: "base scroll gutter reset",
        href: "/docs/base/",
      },
      {
        name: "Utilities & variables",
        tags: "Utilities utility class",
        href: "/docs/utilities/",
      },
      {
        name: "Layout & Typography",
        tags: "layout typography padding margin grid flex spacing font",
        href: "/docs/layout-and-typography/",
      },
    ],
  },
  {
    name: "Components",
    icon: '<svg class="w-5 h-5 text-green-600" width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 29H6V43H20V29Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M24 4L34 21H14L24 4Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M36 44C40.4183 44 44 40.4183 44 36C44 31.5817 40.4183 28 36 28C31.5817 28 28 31.5817 28 36C28 40.4183 31.5817 44 36 44Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/></svg>',
    collapsible: true,
    items: [
      {
        name: "Actions",
        icon: '<svg width="18" height="18" viewBox="0 0 48 48" fill="none" stroke="currentColor" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M24 4V12" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22 22L42 26L36 30L42 36L36 42L30 36L26 42L22 22Z" fill="none" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M38.1421 9.85789L32.4853 15.5147" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M9.85787 38.1421L15.5147 32.4853" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M4 24H12" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M9.85795 9.85787L15.5148 15.5147" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/></svg>',
        items: [
          {
            name: "Button",
            tags: "button btn",
            href: "/components/button/",
          },
          {
            name: "Dropdown",
            tags: "dropdown popover menu listbox",
            href: "/components/dropdown/",
          },
          {
            name: "Modal",
            tags: "dialog modal window popup",
            href: "/components/modal/",
          },
          {
            name: "Swap",
            tags: "swap transition toggle icon",
            href: "/components/swap/",
          },
          {
            name: "Theme Controller",
            tags: "theme controller change dark mode",
            href: "/components/theme-controller/",
          },
        ],
      },
      {
        name: "Data display",
        icon: '<svg width="18" height="18" viewBox="0 0 48 48" class="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="40" height="32" rx="3" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"/><path d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z" fill="none" stroke="currentColor" stroke-width="4"/><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)" fill="currentColor"/><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)" fill="currentColor"/></svg>',
        items: [
          {
            name: "Accordion",
            tags: "accordion disclosure collapse show hide faq",
            href: "/components/accordion/",
          },
          {
            name: "Avatar",
            tags: "avatar image profile picture",
            href: "/components/avatar/",
          },
          {
            name: "Badge",
            tags: "badge tag",
            href: "/components/badge/",
          },
          {
            name: "Card",
            tags: "card",
            href: "/components/card/",
          },
          {
            name: "Carousel",
            tags: "carousel slider image",
            href: "/components/carousel/",
          },
          {
            name: "Chat bubble",
            tags: "chat bubble dialog message messenger",
            href: "/components/chat/",
          },
          {
            name: "Collapse",
            tags: "collapse disclosure accordion show hide",
            href: "/components/collapse/",
          },
          {
            name: "Countdown",
            tags: "countdown counter timer",
            href: "/components/countdown/",
          },
          {
            name: "Diff",
            tags: "diff compare comparison image slider",
            href: "/components/diff/",
          },
          {
            name: "Kbd",
            tags: "kbd keyboard",
            href: "/components/kbd/",
          },
          {
            name: "List",
            tags: "list",
            href: "/components/list/",
            badge: "new",
          },
          {
            name: "Stat",
            tags: "stats data",
            href: "/components/stat/",
          },
          {
            name: "Status",
            tags: "status online offline away busy",
            href: "/components/status/",
            badge: "new",
          },
          {
            name: "Table",
            tags: "table",
            href: "/components/table/",
          },
          {
            name: "Timeline",
            tags: "timeline",
            href: "/components/timeline/",
          },
        ],
      },
      {
        name: "Navigation",
        icon: '<svg width="18" height="18" viewBox="0 0 48 48" class="size-5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 19H20C15.5817 19 12 22.5817 12 27C12 31.4183 15.5817 35 20 35H36C40.4183 35 44 31.4183 44 27C44 24.9711 43.2447 23.1186 42 21.7084" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M6 24.2916C4.75527 22.8814 4 21.0289 4 19C4 14.5817 7.58172 11 12 11H28C32.4183 11 36 14.5817 36 19C36 23.4183 32.4183 27 28 27H18" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/></svg>',
        items: [
          {
            name: "Breadcrumbs",
            tags: "breadcrumbs links",
            href: "/components/breadcrumbs/",
          },
          {
            name: "Dock",
            tags: "dock bottom navigation app bar",
            href: "/components/dock/",
          },
          {
            name: "Link",
            tags: "link href anchor 🔗",
            href: "/components/link/",
          },
          {
            name: "Menu",
            tags: "menu list",
            href: "/components/menu/",
          },
          {
            name: "Navbar",
            tags: "navbar navigation menu",
            href: "/components/navbar/",
          },
          {
            name: "Pagination",
            tags: "pagination links next previous",
            href: "/components/pagination/",
          },
          {
            name: "Steps",
            tags: "steps progress",
            href: "/components/steps/",
          },
          {
            name: "Tab",
            tags: "tabs",
            href: "/components/tab/",
          },
        ],
      },
      {
        name: "Feedback",
        icon: '<svg width="18" height="18" class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H44V36H29L24 41L19 36H4V6Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M23 21H25.0025" stroke="currentColor" stroke-width="4" stroke-linecap="butt"/><path d="M33.001 21H34.9999" stroke="currentColor" stroke-width="4" stroke-linecap="butt"/><path d="M13.001 21H14.9999" stroke="currentColor" stroke-width="4" stroke-linecap="butt"/></svg>',
        items: [
          {
            name: "Alert",
            tags: "alert warning error message",
            href: "/components/alert/",
          },
          {
            name: "Loading",
            tags: "loading loader spinner progress",
            href: "/components/loading/",
          },
          {
            name: "Progress",
            tags: "progressbar progress loading percentage",
            href: "/components/progress/",
          },
          {
            name: "Radial progress",
            tags: "radial circle progressbar progress loading percentage",
            href: "/components/radial-progress/",
          },
          {
            name: "Skeleton",
            tags: "skeleton loading placeholder",
            href: "/components/skeleton/",
          },
          {
            name: "Toast",
            tags: "toast notification snackbar",
            href: "/components/toast/",
          },
          {
            name: "Tooltip",
            tags: "tooltip",
            href: "/components/tooltip/",
          },
        ],
      },
      {
        name: "Data input",
        icon: '<svg width="18" height="18" viewBox="0 0 48 48" class="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 42H43" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"/></svg>',
        items: [
          {
            name: "Calendar",
            tags: "calendar date picker datepicker date",
            href: "/components/calendar/",
            badge: "new",
          },
          {
            name: "Checkbox",
            tags: "checkbox",
            href: "/components/checkbox/",
          },
          {
            name: "Fieldset",
            tags: "fieldset form control",
            href: "/components/fieldset/",
            badge: "new",
          },
          {
            name: "File Input",
            tags: "file upload",
            href: "/components/file-input/",
          },
          {
            name: "Filter",
            tags: "filter",
            href: "/components/filter/",
            badge: "new",
          },
          {
            name: "Label",
            tags: "label floating",
            href: "/components/label/",
            badge: "new",
          },
          {
            name: "Radio",
            tags: "radio",
            href: "/components/radio/",
          },
          {
            name: "Range",
            tags: "range slider",
            href: "/components/range/",
          },
          {
            name: "Rating",
            tags: "star rating radio",
            href: "/components/rating/",
          },
          {
            name: "Select",
            tags: "select option menu",
            href: "/components/select/",
          },
          {
            name: "Input field",
            tags: "text input date number email password search tel url time",
            href: "/components/input/",
          },
          {
            name: "Textarea",
            tags: "textarea",
            href: "/components/textarea/",
          },
          {
            name: "Toggle",
            tags: "toggle switch checkbox",
            href: "/components/toggle/",
          },
          {
            name: "Validator",
            tags: "validator validaton invalid",
            href: "/components/validator/",
            badge: "new",
          },
        ],
      },
      {
        name: "Layout",
        icon: '<svg width="18" height="18" class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="36" height="36" rx="3" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"/><path d="M6 22L42 22" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M29 22V6" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M26 6H32" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M6 19V25" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M42 19V25" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/></svg>',
        items: [
          {
            name: "Divider",
            tags: "divider",
            href: "/components/divider/",
          },
          {
            name: "Drawer",
            tags: "drawer sidebar menu",
            href: "/components/drawer/",
          },
          {
            name: "Footer",
            tags: "footer",
            href: "/components/footer/",
          },
          {
            name: "Hero",
            tags: "hero title",
            href: "/components/hero/",
          },
          {
            name: "Indicator",
            tags: "indicator badge corner",
            href: "/components/indicator/",
          },
          {
            name: "Join (group items)",
            tags: "join group button group input group form group",
            href: "/components/join/",
          },
          {
            name: "Mask",
            tags: "mask crop",
            href: "/components/mask/",
          },
          {
            name: "Stack",
            tags: "stack",
            href: "/components/stack/",
          },
        ],
      },
      {
        name: "Mockup",
        icon: '<svg width="18" height="18" viewBox="0 0 48 48" class="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 30H40V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V30Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"/><path d="M40 30V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V30" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"/><path d="M22 37H26" stroke="currentColor" stroke-width="4" stroke-linecap="butt"/></svg>',
        items: [
          {
            name: "Browser",
            tags: "mockup browser",
            href: "/components/mockup-browser/",
          },
          {
            name: "Code",
            tags: "mockup code",
            href: "/components/mockup-code/",
          },
          {
            name: "Phone",
            tags: "mockup iphone",
            href: "/components/mockup-phone/",
          },
          {
            name: "Window",
            tags: "mockup window",
            href: "/components/mockup-window/",
          },
        ],
      },
    ],
  },
  {
    name: "Theme Generator",
    tags: "theme generator custom color generator",
    href: "/theme-generator/",
    icon: '<svg class="size-5 text-fuchsia-400" width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M29.5856 18.4143L5.54395 42.4559" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/></svg>',
    badge: "new",
  },
  {},
  {
    name: "Store",
    tags: "store template dashboard",
    href: "/store/",
    icon: '<svg class="size-5" width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.0391 22V42H8.03906V22" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M5.84231 13.7766C4.31276 17.7377 7.26307 22 11.5092 22C14.8229 22 17.5276 19.3137 17.5276 16C17.5276 19.3137 20.2139 22 23.5276 22H24.546C27.8597 22 30.546 19.3137 30.546 16C30.546 19.3137 33.2518 22 36.5655 22C40.8139 22 43.767 17.7352 42.2362 13.7723L39.2337 6H8.84523L5.84231 13.7766Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"/></svg>',
    badge: "updated",
    // badgeclass: "bg-primary/10 text-[inherit] border-transparent uppercase font-sans font-bold",
    highlight: true,
  },
  {
    name: "Blog",
    tags: "blog tutorial news",
    href: "/blog/",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z" /><path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
  },
  {
    name: "Resources",
    tags: "resources",
    href: "/resources/videos/",
    icon: '<svg width="18" height="18" viewBox="0 0 48 48" class="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"/><path d="M20 24V17.0718L26 20.5359L32 24L26 27.4641L20 30.9282V24Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"/></svg>',
  },
  {},
  {
    name: "Playground",
    tags: "playground tailwind play",
    href: "/tailwindplay/",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 54 33"><g clip-path="url(#prefix__clip0)"><path fill="currentColor" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>',
    target: "blank",
  },
  {
    name: "GitHub",
    tags: "github",
    href: "https://github.com/saadeghi/daisyui",
    icon: '<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></g></svg>',
    target: "blank",
  },
  {
    name: "Discord",
    tags: "discord",
    href: "/discord/",
    icon: '<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path><path d="M7 16.5c3.5 1 6.5 1 10 0"></path></g></svg>',
    target: "blank",
  },
  {
    name: "Support daisyUI",
    tags: "support",
    href: "https://opencollective.com/daisyui",
    icon: '<svg width="18" class="size-5" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/></svg>',
    target: "blank",
  },
  {
    name: "Swag store",
    tags: "swag",
    href: "https://swag.daisyui.com/",
    icon: '<svg width="18" class="size-5" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none"><path d="M6 9V16.6841C6 18.4952 6 19.4008 6.58579 19.9635C7.89989 21.2257 15.8558 21.4604 17.4142 19.9635C18 19.4008 18 18.4952 18 16.6841V9" stroke="currentColor"></path><path d="M5.74073 12L3.04321 9.38915C2.34774 8.71602 2 8.37946 2 7.96123C2 7.543 2.34774 7.20644 3.04321 6.53331L5.04418 4.59664C5.39088 4.26107 5.56423 4.09329 5.77088 3.96968C5.97753 3.84607 6.21011 3.77103 6.67526 3.62096L8.32112 3.08997C8.56177 3.01233 8.68209 2.97351 8.76391 3.02018C8.84573 3.06686 8.87157 3.2013 8.92324 3.47018C9.19358 4.87684 10.4683 5.94185 12 5.94185C13.5317 5.94185 14.8064 4.87684 15.0768 3.47018C15.1284 3.2013 15.1543 3.06686 15.2361 3.02018C15.3179 2.97351 15.4382 3.01233 15.6789 3.08997L17.3247 3.62096C17.7899 3.77103 18.0225 3.84607 18.2291 3.96968C18.4358 4.09329 18.6091 4.26107 18.9558 4.59664L20.9568 6.53331C21.6523 7.20644 22 7.543 22 7.96123C22 8.37946 21.6523 8.71602 20.9568 9.38915L18.2593 12" stroke="currentColor"></path></g></svg>',
    target: "blank",
    badge: "new",
  },
  {
    name: "llms.txt",
    tags: "support",
    href: "/llms.txt",
    // icon: '<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none"><path d="M12.3529 13L14 15.5M14 15.5L15.6471 18M14 15.5L15.6471 13M14 15.5L12.3529 18M17.7059 13H19.3529M19.3529 13H21M19.3529 13V18M7 13H8.64706M8.64706 13H10.2941M8.64706 13V18" stroke="currentColor"></path><path d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10" stroke="currentColor"></path><path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor"></path></g></svg>',
    icon: '<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="1.75" fill="none"><path d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5" stroke="currentColor"></path><path d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5" stroke="currentColor"></path><path d="M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17" stroke="currentColor"></path><path d="M12.3077 12L10.847 7.47891C10.7552 7.19466 10.4734 7 10.1538 7C9.83425 7 9.55249 7.19466 9.46066 7.47891L8 12M15 7V12M8.53846 10.5H11.7692" stroke="currentColor"></path></g></svg>',
    target: "blank",
    badge: "new",
  },
  {
    items: [
      {
        name: "CDN",
        tags: "how cdn",
        href: "/docs/cdn/",
      },
    ],
  },
]
