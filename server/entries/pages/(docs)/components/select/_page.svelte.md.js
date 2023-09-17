import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Select",
  "desc": "Select is used to pick a value from a list of options.",
  "published": true,
  "layout": "components"
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_prefix;
  $$unsubscribe_prefix = subscribe(prefix, (value) => value);
  $$unsubscribe_prefix();
  return `${validate_component(Mdsvex_components, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(ClassTable, "ClassTable").$$render(
        $$result,
        {
          data: [
            {
              type: "component",
              class: "form-control",
              desc: "Container element"
            },
            {
              type: "component",
              class: "label",
              desc: "For helper text"
            },
            {
              type: "component",
              class: "select",
              desc: "For <select> element"
            },
            {
              type: "modifier",
              class: "select-bordered",
              desc: "Adds border to select"
            },
            {
              type: "modifier",
              class: "select-ghost",
              desc: "Adds ghost style to select"
            },
            {
              type: "modifier",
              class: "select-primary",
              desc: "Adds `primary` color to select"
            },
            {
              type: "modifier",
              class: "select-secondary",
              desc: "Adds `secondary` color to select"
            },
            {
              type: "modifier",
              class: "select-accent",
              desc: "Adds `accent` color to select"
            },
            {
              type: "modifier",
              class: "select-info",
              desc: "Adds `info` color to select"
            },
            {
              type: "modifier",
              class: "select-success",
              desc: "Adds `success` color to select"
            },
            {
              type: "modifier",
              class: "select-warning",
              desc: "Adds `warning` color to select"
            },
            {
              type: "modifier",
              class: "select-error",
              desc: "Adds `error` color to select"
            },
            {
              type: "responsive",
              class: "select-lg",
              desc: "Large size for select"
            },
            {
              type: "responsive",
              class: "select-md",
              desc: "Medium (default) size for select"
            },
            {
              type: "responsive",
              class: "select-sm",
              desc: "Small size for select"
            },
            {
              type: "responsive",
              class: "select-xs",
              desc: "Extra small size for select"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Select" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<select class="$$select w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>`)}</pre>`;
        },
        default: () => {
          return `<select class="select w-full max-w-xs"><option disabled selected value="Pick your favorite Simpson" data-svelte-h="svelte-1yoy9u8">Pick your favorite Simpson</option><option value="Homer" data-svelte-h="svelte-1ityd1n">Homer</option><option value="Marge" data-svelte-h="svelte-ms1mtq">Marge</option><option value="Bart" data-svelte-h="svelte-wxocwb">Bart</option><option value="Lisa" data-svelte-h="svelte-109mdkn">Lisa</option><option value="Maggie" data-svelte-h="svelte-1g62hce">Maggie</option></select>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Select with border" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<select class="$$select $$select-bordered w-full max-w-xs">
  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>`)}</pre>`;
        },
        default: () => {
          return `<select class="select w-full max-w-xs select-bordered"><option disabled selected value="Who shot first?" data-svelte-h="svelte-9heglc">Who shot first?</option><option value="Han Solo" data-svelte-h="svelte-r0tnwa">Han Solo</option><option value="Greedo" data-svelte-h="svelte-deoxp2">Greedo</option></select>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Ghost (no background)" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<select class="$$select $$select-ghost w-full max-w-xs">
  <option disabled selected>Pick the best JS framework</option>
  <option>Svelte</option>
  <option>Vue</option>
  <option>React</option>
</select>`)}</pre>`;
        },
        default: () => {
          return `<select class="select w-full max-w-xs select-ghost"><option disabled selected value="Pick the best JS framework" data-svelte-h="svelte-ny580k">Pick the best JS framework</option><option value="Svelte" data-svelte-h="svelte-8z31n3">Svelte</option><option value="Vue" data-svelte-h="svelte-t9sfg6">Vue</option><option value="React" data-svelte-h="svelte-uohjir">React</option></select>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "With form-control and labels" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$form-control w-full max-w-xs">
  <label class="$$label">
    <span class="$$label-text">Pick the best fantasy franchise</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
  <select class="$$select $$select-bordered">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  <label class="$$label">
    <span class="$$label-text-alt">Alt label</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="form-control w-full max-w-xs"><label class="label" data-svelte-h="svelte-17aetnv"><span class="label-text">Pick the best fantasy franchise</span> <span class="label-text-alt">Alt label</span></label> <select class="select select-bordered"><option disabled selected value="Pick one" data-svelte-h="svelte-8xjvh6">Pick one</option><option value="Star Wars" data-svelte-h="svelte-fj9w2v">Star Wars</option><option value="Harry Potter" data-svelte-h="svelte-sehkg0">Harry Potter</option><option value="Lord of the Rings" data-svelte-h="svelte-1wzg8hm">Lord of the Rings</option><option value="Planet of the Apes" data-svelte-h="svelte-grojsp">Planet of the Apes</option><option value="Star Trek" data-svelte-h="svelte-whbzjs">Star Trek</option></select> <label class="label" data-svelte-h="svelte-1htbrj9"><span class="label-text-alt">Alt label</span> <span class="label-text-alt">Alt label</span></label></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Primary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<select class="$$select $$select-primary w-full max-w-xs">
  <option disabled selected>What is the best TV show?</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option>
</select>`)}</pre>`;
        },
        default: () => {
          return `<select class="select w-full max-w-xs select-primary"><option disabled selected value="What is the best TV show?" data-svelte-h="svelte-1lfdta8">What is the best TV show?</option><option value="Game of Thrones" data-svelte-h="svelte-onlcla">Game of Thrones</option><option value="Lost" data-svelte-h="svelte-i5aclm">Lost</option><option value="Breaking Bad" data-svelte-h="svelte-18stx6i">Breaking Bad</option><option value="Walking Dead" data-svelte-h="svelte-1pj6fev">Walking Dead</option></select>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Secondary color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<select class="$$select $$select-secondary w-full max-w-xs">
  <option disabled selected>Pick your favorite language</option>
  <option>Java</option>
  <option>Go</option>
  <option>C</option>
  <option>C#</option>
  <option>C++</option>
  <option>Rust</option>
  <option>JavaScript</option>
  <option>Python</option>
</select>`)}</pre>`;
        },
        default: () => {
          return `<select class="select w-full max-w-xs select-secondary"><option disabled selected value="Pick your favorite language" data-svelte-h="svelte-pf9x1b">Pick your favorite language</option><option value="Java" data-svelte-h="svelte-8ch438">Java</option><option value="Go" data-svelte-h="svelte-1zkt1e">Go</option><option value="C" data-svelte-h="svelte-1v2odf1">C</option><option value="C#" data-svelte-h="svelte-pko7gy">C#</option><option value="C++" data-svelte-h="svelte-vpzn97">C++</option><option value="Rust" data-svelte-h="svelte-qz32fi">Rust</option><option value="JavaScript" data-svelte-h="svelte-140hvk3">JavaScript</option><option value="Python" data-svelte-h="svelte-efcq86">Python</option></select>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Accent color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<select class="$$select $$select-accent w-full max-w-xs">
  <option disabled selected>Dark mode or light mode?</option>
  <option>Auto</option>
  <option>Dark mode</option>
  <option>Light mode</option>
</select>`)}</pre>`;
        },
        default: () => {
          return `<select class="select w-full max-w-xs select-accent"><option disabled selected value="Dark mode or light mode?" data-svelte-h="svelte-nj8u1j">Dark mode or light mode?</option><option value="Auto" data-svelte-h="svelte-xs7pkn">Auto</option><option value="Dark mode" data-svelte-h="svelte-13gw4x7">Dark mode</option><option value="Light mode" data-svelte-h="svelte-vau66n">Light mode</option></select>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Info color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<select class="$$select $$select-info w-full max-w-xs">
  <option disabled selected>Select language</option>
  <option>English</option>
  <option>Japanese</option>
  <option>Italian</option>
</select>`)}</pre>`;
        },
        default: () => {
          return `<select class="select w-full max-w-xs select-info"><option disabled selected value="Select language" data-svelte-h="svelte-5d7vjf">Select language</option><option value="English" data-svelte-h="svelte-16e6kj2">English</option><option value="Japanese" data-svelte-h="svelte-1csp51j">Japanese</option><option value="Italian" data-svelte-h="svelte-iszffq">Italian</option></select>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Success color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<select class="$$select $$select-success w-full max-w-xs">
  <option disabled selected>Pick your favorite anime</option>
  <option>One Piece</option>
  <option>Naruto</option>
  <option>Death Note</option>
  <option>Attack on Titan</option>
  <option>Bleach</option>
  <option>Fullmetal Alchemist</option>
  <option>Jojo's Bizarre Adventure</option>
</select>`)}</pre>`;
        },
        default: () => {
          return `<select class="select w-full max-w-xs select-success"><option disabled selected value="Pick your favorite anime" data-svelte-h="svelte-1kbt3wf">Pick your favorite anime</option><option value="One Piece" data-svelte-h="svelte-jtukrk">One Piece</option><option value="Naruto" data-svelte-h="svelte-1v0vi1d">Naruto</option><option value="Death Note" data-svelte-h="svelte-opqppa">Death Note</option><option value="Attack on Titan" data-svelte-h="svelte-10k5is7">Attack on Titan</option><option value="Bleach" data-svelte-h="svelte-fhhfsj">Bleach</option><option value="Fullmetal Alchemist" data-svelte-h="svelte-x523dq">Fullmetal Alchemist</option><option value="Jojo's Bizarre Adventure" data-svelte-h="svelte-1epbnt">Jojo&#39;s Bizarre Adventure</option></select>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Warning color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<select class="$$select $$select-warning w-full max-w-xs">
  <option disabled selected>Pick a pizza</option>
  <option>Cheese</option>
  <option>Veggie</option>
  <option>Pepperoni</option>
  <option>Margherita</option>
  <option>Hawaiian</option>
</select>`)}</pre>`;
        },
        default: () => {
          return `<select class="select w-full max-w-xs select-warning"><option disabled selected value="Pick a pizza" data-svelte-h="svelte-1qy936v">Pick a pizza</option><option value="Cheese" data-svelte-h="svelte-1yfidxp">Cheese</option><option value="Veggie" data-svelte-h="svelte-1v33r1p">Veggie</option><option value="Pepperoni" data-svelte-h="svelte-10c1l62">Pepperoni</option><option value="Margherita" data-svelte-h="svelte-1k2hbx4">Margherita</option><option value="Hawaiian" data-svelte-h="svelte-1t1nkfi">Hawaiian</option></select>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Error color" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<select class="$$select $$select-error w-full max-w-xs">
  <option disabled selected>What is the best headless CMS</option>
  <option>Strapi</option>
  <option>Ghost</option>
  <option>Netlify CMS</option>
  <option>Sanity</option>
</select>`)}</pre>`;
        },
        default: () => {
          return `<select class="select w-full max-w-xs select-error"><option disabled selected value="What is the best headless CMS" data-svelte-h="svelte-7zd24q">What is the best headless CMS</option><option value="Strapi" data-svelte-h="svelte-pv3z5p">Strapi</option><option value="Ghost" data-svelte-h="svelte-9hh3g3">Ghost</option><option value="Netlify CMS" data-svelte-h="svelte-1ghpfx2">Netlify CMS</option><option value="Sanity" data-svelte-h="svelte-glm8nu">Sanity</option></select>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Sizes" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<!-- lg -->
<select class="$$select $$select-bordered $$select-lg w-full max-w-xs">
  <option disabled selected>Large</option>
  <option>Large Apple</option>
  <option>Large Orange</option>
  <option>Large Tomato</option>
</select>
<!-- md -->
<select class="$$select $$select-bordered w-full max-w-xs">
  <option disabled selected>Normal</option>
  <option>Normal Apple</option>
  <option>Normal Orange</option>
  <option>Normal Tomato</option>
</select>
<!-- sm -->
<select class="$$select $$select-bordered $$select-sm w-full max-w-xs">
  <option disabled selected>Small</option>
  <option>Small Apple</option>
  <option>Small Orange</option>
  <option>Small Tomato</option>
</select>
<!-- xs -->
<select class="$$select $$select-bordered $$select-xs w-full max-w-xs">
  <option disabled selected>Tiny</option>
  <option>Tiny Apple</option>
  <option>Tiny Orange</option>
  <option>Tiny Tomato</option>
</select>`)}</pre>`;
        },
        default: () => {
          return `<div class="flex flex-col gap-4 w-full items-center"><select class="select select-bordered select-lg w-full max-w-xs"><option disabled selected value="Large" data-svelte-h="svelte-qctba4">Large</option><option value="Large Apple" data-svelte-h="svelte-1yq0mcj">Large Apple</option><option value="Large Orange" data-svelte-h="svelte-tid9lv">Large Orange</option><option value="Large Tomato" data-svelte-h="svelte-qsh2qr">Large Tomato</option></select> <select class="select select-bordered w-full max-w-xs"><option disabled selected value="Normal" data-svelte-h="svelte-1ffdm18">Normal</option><option value="Normal Apple" data-svelte-h="svelte-p54mxf">Normal Apple</option><option value="Normal Orange" data-svelte-h="svelte-1veptcj">Normal Orange</option><option value="Normal Tomato" data-svelte-h="svelte-cufspf">Normal Tomato</option></select> <select class="select select-bordered select-sm w-full max-w-xs"><option disabled selected value="Small" data-svelte-h="svelte-1xtb98">Small</option><option value="Small Apple" data-svelte-h="svelte-jk9ybn">Small Apple</option><option value="Small Orange" data-svelte-h="svelte-o98gjn">Small Orange</option><option value="Small Tomato" data-svelte-h="svelte-1anugoz">Small Tomato</option></select> <select class="select select-bordered select-xs w-full max-w-xs"><option disabled selected value="Tiny" data-svelte-h="svelte-1ilgqw1">Tiny</option><option value="Tiny Apple" data-svelte-h="svelte-1j4vnpu">Tiny Apple</option><option value="Tiny Orange" data-svelte-h="svelte-1a2sdjm">Tiny Orange</option><option value="Tiny Tomato" data-svelte-h="svelte-13yxq6q">Tiny Tomato</option></select></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Disabled" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<select class="$$select w-full max-w-xs" disabled>
  <option>You can't touch this</option>
</select>`)}</pre>`;
        },
        default: () => {
          return `<select class="select w-full max-w-xs" disabled><option value="You can't touch this" data-svelte-h="svelte-1l25yr">You can&#39;t touch this</option></select>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
