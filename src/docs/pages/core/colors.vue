<template>
  <div>

    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Colors</span>
    </h2>

    <div class="text-base-content">
      <Wrapper nocode>
        <div class="text-xl font-bold text-base-content">Read the documents</div>
        <p>Read everything about daisyUI colors and theming:</p>
        <p class="mt-4">
          <NuxtLink to="/docs/default-themes" class="link">How to use themes?</NuxtLink>
          <br/>
          <NuxtLink to="/docs/add-themes" class="link">How to add new theme?</NuxtLink>
        </p>
      </Wrapper>

    </div>




<div class="mt-10 mb-6 tabs">
  <button v-on:click="activeTab = 'colors'"  v-bind:class="{'tab-active': activeTab == 'colors'}" class="tab tab-lifted tab-lg">Customize</button>
  <button v-on:click="activeTab = 'preview'"  v-bind:class="{'tab-active': activeTab == 'preview'}" class="tab tab-lifted tab-lg">Preview</button>
  <button v-on:click="activeTab = 'output'"  v-bind:class="{'tab-active': activeTab == 'output'}" class="tab tab-lifted tab-lg">Result</button>
  <span class="flex-grow hidden cursor-default tab tab-lifted tab-lg sm:block"></span>
</div>




<div id="colors" v-bind:class="{'hidden': activeTab != 'colors'}">

  <div class="text-xl font-bold text-base-content">Edit colors</div>
  <div class="mb-6">Choose your own colors</div>

  <div class="w-56 card" v-if="showCustomThemeTogglerSwitch">
    <div class="form-control">
      <label class="cursor-pointer label">
        <span class="label-text">Show customized colors</span>
        <input type="checkbox" checked="checked" class="toggle toggle-primary" v-model="applyCustomThemeToSite">
      </label>
    </div>
  </div>

  <Wrapper classes="grid grid-cols-1 md:grid-cols-6 gap-6" nocode>

    <div class="block mb-4" v-for="(colorGroup, index) in colors">
      <div class="mb-4 text-xs uppercase opacity-50">{{ index }}</div>
      <div class="grid rounded">
        <div class="flex flex-col col-start-1 row-start-1">
          <div v-for="(color, index) in colorGroup" class="relative col-start-1 row-start-1">
            <label :class="'flex flex-col justify-between items-start w-full h-20 transform transition-all cursor-pointer shadow hover:shadow-lg hover:-translate-y-1 '+ color.class + ((index === 0) ? ' rounded-t ' : '') + ((index === colorGroup.length - 1) ? ' rounded-b ' : '')" :for="color.name">
              <div class="w-full px-1 text-sm text-white bg-black rounded bg-opacity-20">
                <input
                  type='text'
                  :class="'w-full rounded bg-opacity-20 ' + color.class + ' outline-none'"
                  :value="colorValues[color.name]['hex']"
                  v-on:input="e => onInputColorHexChange(color.name, e.target.value)"
                >
              </div>
              <div class="px-1 m-1 text-xs text-white bg-black rounded bg-opacity-20">
                .bg-{{ color.title }}
              </div>
            </label>
            <input
              type="color"
              :id="color.name"
              class="absolute top-0 invisible opacity-0"
              v-model="colorValues[color.name]['hex']"
              v-on:change="onColorChange(color.name)"
            >
          </div>
        </div>
      </div>
    </div>

  </Wrapper>
</div>








<div id="preview" v-bind:class="{'hidden': activeTab != 'preview'}">
<div class="text-xl font-bold text-base-content">Preview components</div>
<div class="mb-6">See how components will look like using you color palette</div>
<div>
  <div class="grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3 lg:bg-base-200 rounded-box">






    <Navbar class="col-span-1 shadow-lg xl:col-span-3 bg-neutral-focus text-neutral-content rounded-box">
      <div class="flex-none">
        <Button classes="btn-square btn-ghost">
          <Icon glyph="menu" class="inline-block w-6 h-6 stroke-current" />
        </Button>
      </div>
      <div class="flex-none px-2 mx-2">
        <span class="text-lg font-bold">
          daisyUI
        </span>
      </div>
      <div class="flex justify-center flex-1 px-2 mx-2">
        <div class="items-stretch hidden lg:flex">
          <a class="btn btn-ghost btn-sm rounded-btn">
            Home
          </a>
          <a class="btn btn-ghost btn-sm rounded-btn">
            Portfolio
          </a>
          <a class="btn btn-ghost btn-sm rounded-btn">
            About
          </a>
          <a class="btn btn-ghost btn-sm rounded-btn">
            Contact
          </a>
        </div>

      </div>
      <div class="flex-none">
        <Button classes="btn-square btn-ghost">
          <Icon glyph="bell" class="inline-block w-6 h-6 stroke-current" />
        </Button>
      </div>
      <div class="flex-none">
        <Button classes="btn-square btn-ghost">
          <Icon glyph="search" class="inline-block w-6 h-6 stroke-current" />
        </Button>
      </div>
    </Navbar>


      <Card class="shadow-lg compact side bg-base-100">
        <div class="flex-row items-center space-x-4 card-body">
          <div>
            <Avatar classes="rounded-full w-14 h-14 shadow">
              <img src="https://i.pravatar.cc/500?img=32" />
            </Avatar>
          </div>
          <div class="">
            <h2 class="card-title">Janis Johnson</h2>
            <p class="text-base-content text-opacity-40">Accounts Agent</p>
          </div>
        </div>
      </Card>





      <Card class="shadow-lg compact side bg-base-100">
        <div class="flex-row items-center space-x-4 card-body">
          <div class="flex-1">
            <h2 class="card-title">Meredith Mayer</h2>
            <p class="text-base-content text-opacity-40">Data Liaison</p>
          </div>
          <div class="flex-0">
            <Button classes="btn-sm">Follow</Button>
          </div>
        </div>
      </Card>





      <Card class="row-span-3 shadow-lg compact bg-base-100">
        <figure>
          <img src="https://picsum.photos/id/1005/600/400" />
        </figure>
        <div class="flex-row items-center space-x-4 card-body">
          <div class="">
            <h2 class="card-title">Karolann Collins</h2>
            <p class="text-base-content text-opacity-40">Direct Interactions Liaison</p>
          </div>
        </div>
      </Card>





      <Card class="shadow-lg compact side bg-base-100">
        <div class="flex-row items-center space-x-4 card-body">
          <div class="flex-1">
            <h2 class="card-title text-primary">4,600</h2>
            <p class="text-base-content text-opacity-40">Page views</p>
          </div>
          <div class="flex space-x-2 flex-0">
            <Button classes="btn-sm btn-square">
              <Icon glyph="eye" class="inline-block w-6 h-6 stroke-current" />
            </Button>
            <Button classes="btn-sm btn-square">
              <Icon
                glyph="dots"
                class="inline-block w-6 h-6 stroke-current"
              />
            </Button>
          </div>
        </div>
      </Card>





      <Card class="shadow-lg compact side bg-base-100">
        <div class="flex-row items-center space-x-4 card-body">
          <label class="flex-0">
            <Toggle classes="toggle-primary" />
          </label>
          <div class="flex-1">
            <h2 class="card-title">Enable Notifications</h2>
            <p class="text-base-content text-opacity-40">To get latest updates</p>
          </div>
        </div>
      </Card>




      <Card class="col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100">
        <div class="card-body">
          <h2 class="my-4 text-4xl font-bold card-title">Top 10 UI Components</h2>
          <div class="mb-4 space-x-2 card-actions">
            <Badge class="badge-ghost">Colors</Badge>
            <Badge class="badge-ghost">UI Design</Badge>
            <Badge class="badge-ghost">Creativity</Badge>
          </div>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="justify-end space-x-2 card-actions">
            <Button classes="btn-primary">Login</Button>
            <Button classes="">Register</Button>
          </div>
        </div>
      </Card>




      <Card class="shadow-lg compact side bg-base-100">
        <div class="flex-row items-center space-x-4 card-body">
          <div class="flex-1">
            <h2 class="flex card-title">
              <button class="btn btn-ghost btn-sm btn-circle loading"></button>
              Downloading...
            </h2>
            <progress class="progress progress-secondary" value="70" max="100"></progress>
          </div>
          <div class="flex-0">
            <button class="btn btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </Card>







      <Card class="shadow-lg compact side bg-base-100">
        <div class="flex-row items-center space-x-4 card-body">
          <label class="cursor-pointer label">
            <Checkbox classes="checkbox-accent" checked />
            <span class="mx-4 label-text">Enable Autosave</span>
          </label>
        </div>
      </Card>




      <Menu class="row-span-3 p-4 shadow-lg bg-base-100 rounded-box">
        <MenuItem class="menu-title">
          <span>
            Menu Title
          </span>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon glyph="eye" class="inline-block w-5 h-5 mr-2 stroke-current" />
            Item with icon
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon glyph="code" class="inline-block w-5 h-5 mr-2 stroke-current" />
            Item with icon
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon glyph="folder" class="inline-block w-5 h-5 mr-2 stroke-current" />
            Item with icon
          </a>
        </MenuItem>
      </Menu>


      <Alert class="col-span-1 xl:col-span-2 bg-base-100">
        <div class="flex-1">
          <label class="mx-3">Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
        <div class="flex-none">
          <Button classes="btn-sm btn-ghost mr-2">Cancel</Button>
          <Button classes="btn-sm btn-primary">Apply</Button>
        </div>
      </Alert>

      <Alert class="col-span-1 xl:col-span-2 alert-info">
        <div class="flex-1">
          <Icon glyph="info" class="w-6 h-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>

      <Alert class="col-span-1 xl:col-span-2 alert-success">
        <div class="flex-1">
          <Icon glyph="folder" class="w-6 h-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>


  </div>
</div>
</div>


<div id="output" v-bind:class="{'hidden': activeTab != 'output'}">
<div class="text-xl font-bold text-base-content">Theme config</div>
<div class="mb-6">This is your custom color theme. Add it to tailwind.config.js</div>
<div class="w-full max-w-2xl my-2">
  <div class="text-sm shadow-lg mockup-code">
  <pre><code>daisyui: {
    themes: [
      {
        'mytheme': {
        <template v-for="(color, index) in colorValues">  '{{ color.name }}': '{{ color.hex }}',
        </template>},
      },
    ],
  },</code></pre>
  </div>
</div>

<component is="style" v-if="applyCustomThemeToSite" v-for="(color, index) in colorValues" :key="index">
:root {
  --{{ index }}: {{ color.hsl }};
}
</component>
</div>







    <div class="mt-20">
      You can use color names in utility classes just like Tailwind's color names.border-opacity-20
      <br/>
      These are default utility classes that use color names:

      <div class="mt-6 text-sm shadow-lg mockup-code">
        <pre>
  <code>bg-<span class="text-info">{COLOR_NAME}</span>
    text-<span class="text-info">{COLOR_NAME}</span>
    border-<span class="text-info">{COLOR_NAME}</span>
    from-<span class="text-info">{COLOR_NAME}</span>
    via-<span class="text-info">{COLOR_NAME}</span>
    to-<span class="text-info">{COLOR_NAME}</span>
    placeholder-<span class="text-info">{COLOR_NAME}</span>
    divide-<span class="text-info">{COLOR_NAME}</span>
    ring-<span class="text-info">{COLOR_NAME}</span>
    ring-offset-<span class="text-info">{COLOR_NAME}</span></code></pre>
      </div>
      <br/>
      For example these are all the background colors:
    </div>

    <ClassTable v-bind:data="{
      showTitle : false,
      showType : false,
      showColors : true,
      utilities : [
        { class: 'bg-primary',
          color: 'bg-primary',
          desc: 'Primary color'
        },
        { class: 'bg-primary-focus',
          color: 'bg-primary-focus',
          desc: 'Primary color - focused'
        },
        { class: 'bg-primary-content',
          color: 'bg-primary-content',
          desc: 'Foreground content color to use on primary color'
        },
        { class: 'bg-secondary',
          color: 'bg-secondary',
          desc: 'Secondary color'
        },
        { class: 'bg-secondary-focus',
          color: 'bg-secondary-focus',
          desc: 'Secondary color - focused'
        },
        { class: 'bg-secondary-content',
          color: 'bg-secondary-content',
          desc: 'Foreground content color to use on secondary color'
        },
        { class: 'bg-accent',
          color: 'bg-accent',
          desc: 'Accent color'
        },
        { class: 'bg-accent-focus',
          color: 'bg-accent-focus',
          desc: 'Accent color - focused'
        },
        { class: 'bg-accent-content',
          color: 'bg-accent-content',
          desc: 'Foreground content color to use on accent color'
        },
        { class: 'bg-neutral',
          color: 'bg-neutral',
          desc: 'Neutral color'
        },
        { class: 'bg-neutral-focus',
          color: 'bg-neutral-focus',
          desc: 'Neutral color - focused'
        },
        { class: 'bg-neutral-content',
          color: 'bg-neutral-content',
          desc: 'Foreground content color to use on neutral color'
        },
        { class: 'bg-base-100',
          color: 'bg-base-100',
          desc: 'Base color of page, used for blank backgrounds'
        },
        { class: 'bg-base-200',
          color: 'bg-base-200',
          desc: 'Base color, a little darker'
        },
        { class: 'bg-base-300',
          color: 'bg-base-300',
          desc: 'Base color, even more darker'
        },
        { class: 'bg-base-content',
          color: 'bg-base-content',
          desc: 'Foreground content color to use on base color'
        },
        { class: 'bg-info',
          color: 'bg-info',
          desc: 'Info color'
        },
        { class: 'bg-success',
          color: 'bg-success',
          desc: 'Success color'
        },
        { class: 'bg-warning',
          color: 'bg-warning',
          desc: 'Warning color'
        },
        { class: 'bg-error',
          color: 'bg-error',
          desc: 'Error color'
        },
      ]
    }"/>







    <div class="flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200">
      <NuxtLink to="/core/layout" class="text-xs btn-lg btn lg:text-lg">
        Next: layout
        <Icon glyph="arrow" class="inline-block w-6 h-6 ml-2 stroke-current" />
      </NuxtLink>
    </div>





</div>
</template>


<script>
export default {
  data() {
    return {
      activeTab: 'colors',
      showCustomThemeTogglerSwitch: false,
      applyCustomThemeToSite: false,
      colorValues: {
        "p" : { hsl: "259 94% 51%", hex: "#570df8", name: "primary" },
        "pf" : { hsl: "259 94% 41%", hex: "#4506cb", name: "primary-focus" },
        "pc" : { hsl: "0 0% 100%", hex: "#ffffff", name: "primary-content" },

        "s" : { hsl: "314 100% 47%", hex: "#f000b8", name: "secondary" },
        "sf" : { hsl: "314 100% 37%", hex: "#bd0091", name: "secondary-focus" },
        "sc" : { hsl: "0 0% 100%", hex: "#ffffff", name: "secondary-content" },

        "a" : { hsl: "174 60% 51%", hex: "#37cdbe", name: "accent" },
        "af" : { hsl: "174 60% 41%", hex: "#2aa79b", name: "accent-focus" },
        "ac" : { hsl: "0 0% 100%", hex: "#ffffff", name: "accent-content" },

        "n" : { hsl: "219 14% 28%", hex: "#3d4451", name: "neutral" },
        "nf" : { hsl: "222 13% 19%", hex: "#2a2e37", name: "neutral-focus" },
        "nc" : { hsl: "0 0% 100%", hex: "#ffffff", name: "neutral-content" },

        "b1" : { hsl: "0 0% 100%", hex: "#ffffff", name: "base-100" },
        "b2" : { hsl: "210 20% 98%", hex: "#f9fafb", name: "base-200" },
        "b3" : { hsl: "216 12% 84%", hex: "#d1d5db", name: "base-300" },
        "bc" : { hsl: "215 28% 17%", hex: "#1f2937", name: "base-content" },

        "in" : { hsl: "207 90% 54%", hex: "#2094f3", name: "info" },
        "su" : { hsl: "174 100% 29%", hex: "#009485", name: "success" },
        "wa" : { hsl: "36 100% 50%", hex: "#ff9900", name: "warning" },
        "er" : { hsl: "14 100% 57%", hex: "#ff5724", name: "error" },
      },
      colors: {
        'primary': [
          { title: 'primary', name: 'p', class: 'bg-primary' },
          { title: 'primary-focus', name: 'pf', class: 'bg-primary-focus' },
          { title: 'primary-content', name: 'pc', class: 'bg-primary-content' },
        ],
        'secondary': [
          { title: 'secondary', name: 's', class: 'bg-secondary' },
          { title: 'secondary-focus', name: 'sf', class: 'bg-secondary-focus' },
          { title: 'secondary-content', name: 'sc', class: 'bg-secondary-content' },
        ],
        'accent': [
          { title: 'accent', name: 'a', class: 'bg-accent' },
          { title: 'accent-focus', name: 'af', class: 'bg-accent-focus' },
          { title: 'accent-content', name: 'ac', class: 'bg-accent-content' },
        ],
        'neutral': [
          { title: 'neutral', name: 'n', class: 'bg-neutral' },
          { title: 'neutral-focus', name: 'nf', class: 'bg-neutral-focus' },
          { title: 'neutral-content', name: 'nc', class: 'bg-neutral-content' },
        ],
        'base': [
          { title: 'base-100', name: 'b1', class: 'bg-base-100' },
          { title: 'base-200', name: 'b2', class: 'bg-base-200' },
          { title: 'base-300', name: 'b3', class: 'bg-base-300' },
          { title: 'base-content', name: 'bc', class: 'bg-base-content' },
        ],
        'state': [
          { title: 'info', name: 'in', class: 'bg-info' },
          { title: 'success', name: 'su', class: 'bg-success' },
          { title: 'warning', name: 'wa', class: 'bg-warning' },
          { title: 'error', name: 'er', class: 'bg-error' },
        ],
      }
    }
  },
  methods: {
    onInputColorHexChange(name, val) {
      this.colorValues[name]['hex'] = val.replace(/^#*/, '#')
      this.onColorChange(name)
    },
    onColorChange(name) {
      this.hexToHsl(name);
      this.applyCustomThemeToSite = true;
      this.showCustomThemeTogglerSwitch = true;
    },
    hexToHsl: function(name) {
      let H = this.colorValues[name]['hex'];
      let ex = /^#([\da-f]{3}){1,2}$/i;
      if (ex.test(H)) {
        // convert hex to RGB first
        let r = 0, g = 0, b = 0;
        if (H.length == 4) {
          r = "0x" + H[1] + H[1];
          g = "0x" + H[2] + H[2];
          b = "0x" + H[3] + H[3];
        } else if (H.length == 7) {
          r = "0x" + H[1] + H[2];
          g = "0x" + H[3] + H[4];
          b = "0x" + H[5] + H[6];
        }
        // then to HSL
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r,g,b),
          cmax = Math.max(r,g,b),
          delta = cmax - cmin,
          h = 0,
          s = 0,
          l = 0;

        if (delta == 0)
          h = 0;
        else if (cmax == r)
          h = ((g - b) / delta) % 6;
        else if (cmax == g)
          h = (b - r) / delta + 2;
        else
          h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        if (h < 0)
          h += 360;

        l = (cmax + cmin) / 2;
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        // return "hsl(" + h + "," + s + "%," + l + "%)";
        this.colorValues[name]['hsl'] = Math.floor(h) + " " + Math.floor(s) + "% " + Math.floor(l) + "%"
      }else{
        console.log('er')
      }
    }
  },
  head() {
    return {
      title: "daisyUI — Colors",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'daisyUI color scheme generator. Tailwind CSS theme generator'
        }
      ]
    }
  }
}
</script>
