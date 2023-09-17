import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
const metadata = {
  "title": "Modal",
  "desc": "Modal is used to show a dialog or a box when you click a button.",
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
              class: "modal",
              desc: "Container element"
            },
            {
              type: "component",
              class: "modal-box",
              desc: "The content of modal"
            },
            {
              type: "component",
              class: "modal-action",
              desc: "Container for modal action buttons"
            },
            {
              type: "component",
              class: "modal-backdrop",
              desc: "The backdrop that covers the back of modal so we can close the modal by clicking outside"
            },
            {
              type: "component",
              class: "modal-toggle",
              desc: "For hidden checkbox that controls modal"
            },
            {
              type: "modifier",
              class: "modal-open",
              desc: "Add/remove this class to open/close the modal using JS"
            },
            {
              type: "responsive",
              class: "modal-top",
              desc: "Moves the modal to top"
            },
            {
              type: "responsive",
              class: "modal-bottom",
              desc: "Moves the modal to bottom"
            },
            {
              type: "responsive",
              class: "modal-middle",
              desc: "Moves the modal to middle (default)"
            }
          ]
        },
        {},
        {}
      )} <div class="alert text-sm"><div><span class="font-bold">${validate_component(Translate, "Translate").$$render($$result, { text: "There are 3 ways to use a modal:" }, {}, {})}</span> <ol data-svelte-h="svelte-1ii7k10"><li>Using <code>&lt;dialog&gt;</code> element: It needs JS to open but it has better accessibility and we can close it using <span class="kbd kbd-xs">Esc</span> key</li> <li>Using a hidden <code>&lt;input type=&quot;checkbox&quot;&gt;</code> and <code>&lt;label&gt;</code> to check/uncheck the checkbox and open/close the modal</li> <li>Using <code>&lt;a&gt;</code> anchor links: A link adds a parameter to the URL and you only see the modal when the URL has that parameter</li></ol></div></div> <div class="alert text-sm mt-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Make sure you're using unique IDs for each modal"
        },
        {},
        {}
      )}</div></div> <h3 id="method-1-using-dialog-element-recommended" data-svelte-h="svelte-pazg3s"><a aria-hidden="true" tabindex="-1" href="#method-1-using-dialog-element-recommended"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 1: using dialog element <span class="badge badge-success">recommended</span></h3> ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Dialog modal",
          desc: "opens on click using ID.showModal() method. can be closed using ID.close() method"
        },
        {},
        {
          jsx: () => {
            return `<pre slot="jsx">${escape(`{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="$$btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="$$modal">
  <div className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="$$modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`)}</pre>`;
          },
          html: () => {
            return `<pre slot="html">${escape(`<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" class="$$modal">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="$$modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`)}</pre>`;
          },
          default: () => {
            return `<button class="btn" onclick="my_modal_1.showModal()" data-svelte-h="svelte-zek3rt">open modal</button> <dialog id="my_modal_1" class="modal" data-svelte-h="svelte-1fj1yf3"><div class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click the button below to close</p> <div class="modal-action"><form method="dialog"> <button class="btn">Close</button></form></div></div></dialog>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Dialog modal, closes when clicked outside",
          desc: "there a second form with 'modal-backdrop' class and it covers the screen so we can close the modal when clicked outside"
        },
        {},
        {
          jsx: () => {
            return `<pre slot="jsx">${escape(`{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="$$btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button>
<dialog id="my_modal_2" className="$$modal">
  <div className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>`)}</pre>`;
          },
          html: () => {
            return `<pre slot="html">${escape(`<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_2.showModal()">open modal</button>
<dialog id="my_modal_2" class="$$modal">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>`)}</pre>`;
          },
          default: () => {
            return `<button class="btn" onclick="my_modal_2.showModal()" data-svelte-h="svelte-1uaieui">open modal</button> <dialog id="my_modal_2" class="modal" data-svelte-h="svelte-fdxaas"><div class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click outside to close</p></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Dialog modal with a close button at corner"
        },
        {},
        {
          jsx: () => {
            return `<pre slot="jsx">${escape(`{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="$$btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
<dialog id="my_modal_3" className="$$modal">
  <div className="$$modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="$$btn $$btn-sm $$btn-circle $$btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>`)}</pre>`;
          },
          html: () => {
            return `<pre slot="html">${escape(`<!-- You can open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_3.showModal()">open modal</button>
<dialog id="my_modal_3" class="$$modal">
  <div class="$$modal-box">
    <form method="dialog">
      <button class="$$btn $$btn-sm $$btn-circle $$btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>`)}</pre>`;
          },
          default: () => {
            return `<button class="btn" onclick="my_modal_3.showModal()" data-svelte-h="svelte-1lf6s1v">open modal</button> <dialog id="my_modal_3" class="modal" data-svelte-h="svelte-1veww2i"><div class="modal-box"><form method="dialog"> <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click on ✕ button to close</p></div></dialog>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Dialog modal with custom width",
          desc: "You can use any w-* and max-w-* utility class to customize the width"
        },
        {},
        {
          jsx: () => {
            return `<pre slot="jsx">${escape(`{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="$$btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>
<dialog id="my_modal_4" className="$$modal">
  <div className="$$modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="$$modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`)}</pre>`;
          },
          html: () => {
            return `<pre slot="html">${escape(`<!-- You can open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_4.showModal()">open modal</button>
<dialog id="my_modal_4" class="$$modal">
  <div class="$$modal-box w-11/12 max-w-5xl">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Click the button below to close</p>
    <div class="$$modal-action">
      <form method="dialog">
        <!-- if there is a button, it will close the modal -->
        <button class="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`)}</pre>`;
          },
          default: () => {
            return `<button class="btn" onclick="my_modal_4.showModal()" data-svelte-h="svelte-dvr70k">open modal</button> <dialog id="my_modal_4" class="modal" data-svelte-h="svelte-ic5c3p"><div class="modal-box w-11/12 max-w-5xl"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Click the button below to close</p> <div class="modal-action"><form method="dialog"> <button class="btn">Close</button></form></div></div></dialog>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Responsive",
          desc: "Modal goes bottom on mobile screen and goes middle on desktop"
        },
        {},
        {
          jsx: () => {
            return `<pre slot="jsx">${escape(`{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="$$btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<dialog id="my_modal_5" className="$$modal modal-bottom sm:$$modal-middle">
  <div className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="$$modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`)}</pre>`;
          },
          html: () => {
            return `<pre slot="html">${escape(`<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_5.showModal()">open modal</button>
<dialog id="my_modal_5" class="$$modal $$modal-bottom sm:$$modal-middle">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="$$modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`)}</pre>`;
          },
          default: () => {
            return `<button class="btn" onclick="my_modal_5.showModal()" data-svelte-h="svelte-5o4vr1">open modal</button> <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle" data-svelte-h="svelte-1yc7j3t"><div class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click the button below to close</p> <div class="modal-action"><form method="dialog"> <button class="btn">Close</button></form></div></div></dialog>`;
          }
        }
      )} <h3 id="method-2-using-a-hidden-checkbox-legacy" data-svelte-h="svelte-1x7tqpi"><a aria-hidden="true" tabindex="-1" href="#method-2-using-a-hidden-checkbox-legacy"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 2: using a hidden checkbox <span class="badge badge-warning">legacy</span></h3> ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Modal using label + hidden checkbox"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<!-- The button to open modal -->
<label for="my_modal_6" class="$$btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_6" class="$$modal-toggle" />
<div class="$$modal">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
    <div class="$$modal-action">
      <label for="my_modal_6" class="$$btn">Close!</label>
    </div>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<label for="my_modal_6" class="btn" data-svelte-h="svelte-1clo1l5">open modal</label>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Modal that closes when clicked outside",
          desc: "Modal works with a hidden checkbox and labels can toggle the checkbox so we can use another label tag with 'modal-backdrop' class that covers the screen so we can close the modal when clicked outside"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<!-- The button to open modal -->
<label for="my_modal_7" class="$$btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_7" class="$$modal-toggle" />
<div class="$$modal">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
  </div>
  <label class="$$modal-backdrop" for="my_modal_7">Close</label>
</div>`)}</pre>`;
          },
          default: () => {
            return `<label for="my_modal_7" class="btn" data-svelte-h="svelte-8p1kam">open modal</label>`;
          }
        }
      )} <h3 id="method-3-using-anchor-links-legacy" data-svelte-h="svelte-1k6pp77"><a aria-hidden="true" tabindex="-1" href="#method-3-using-anchor-links-legacy"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 3: using anchor links <span class="badge badge-warning">legacy</span></h3> ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Modal using anchor link",
          desc: "Anchor links might not work well on some SPA frameworks so if there are problems, use the first example"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<!-- The button to open modal -->
<a href="#my_modal_8" class="$$btn">open modal</a>
<!-- Put this part before </body> tag -->
<div class="$$modal" id="my_modal_8">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">This modal works with anchor links</p>
    <div class="$$modal-action">
     <a href="#" class="$$btn">Yay!</a>
    </div>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<a href="#my_modal_8" class="btn" rel="external" data-svelte-h="svelte-tkds01">open modal</a>`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
