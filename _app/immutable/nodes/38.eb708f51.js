import{s as bt,E as lt,y as _t,O as pt,a as $,f as p,c as b,g as f,z as _,j as u,i as r,d as c,w as z,l as g,h as v,m as x,v as w,Y as k,U as y}from"../chunks/scheduler.e5ccafd2.js";import{S as gt,i as vt,b as M,d as E,m as H,a as T,t as N,e as L}from"../chunks/index.fb4b3a7b.js";import{g as xt,a as ft}from"../chunks/index.18b79e66.js";import{M as wt}from"../chunks/mdsvex.891cde92.js";import{p as kt,C as yt,a as Y,r as C}from"../chunks/ClassTable.66195980.js";function Ct(m){let t,i="open modal",o,e,d='<form method="dialog" class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click the button below to close</p> <div class="modal-action"><button class="btn">Close</button></div></form>';return{c(){t=p("button"),t.textContent=i,o=$(),e=p("dialog"),e.innerHTML=d,this.h()},l(s){t=f(s,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),_(t)!=="svelte-zek3rt"&&(t.textContent=i),o=b(s),e=f(s,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),_(e)!=="svelte-1wtpdu8"&&(e.innerHTML=d),this.h()},h(){u(t,"class","btn"),u(t,"onclick","my_modal_1.showModal()"),u(e,"id","my_modal_1"),u(e,"class","modal")},m(s,l){r(s,t,l),r(s,o,l),r(s,e,l)},p:z,d(s){s&&(c(t),c(o),c(e))}}}function Mt(m){let t,i=`<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" class="$$modal">
  <form method="dialog" class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="$$modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="$$btn">Close</button>
    </div>
  </form>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=g(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var a=v(t);o=x(a,i),a.forEach(c),this.h()},h(){u(t,"slot","html")},m(l,a){r(l,t,a),w(t,o),d||(s=k(e=C.call(null,t,{to:m[0]})),d=!0)},p(l,a){e&&y(e.update)&&a&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Et(m){let t,i=`{/* Open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_1.showModal()}>open modal</button>
<dialog id="my_modal_1" className="$$modal">
  <form method="dialog" className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="$$modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="$$btn">Close</button>
    </div>
  </form>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=g(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var a=v(t);o=x(a,i),a.forEach(c),this.h()},h(){u(t,"slot","jsx")},m(l,a){r(l,t,a),w(t,o),d||(s=k(e=C.call(null,t,{to:m[0]})),d=!0)},p(l,a){e&&y(e.update)&&a&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Ht(m){let t,i="open modal",o,e,d='<form method="dialog" class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click outside to close</p></form> <form method="dialog" class="modal-backdrop"><button>close</button></form>';return{c(){t=p("button"),t.textContent=i,o=$(),e=p("dialog"),e.innerHTML=d,this.h()},l(s){t=f(s,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),_(t)!=="svelte-1uaieui"&&(t.textContent=i),o=b(s),e=f(s,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),_(e)!=="svelte-dn84y2"&&(e.innerHTML=d),this.h()},h(){u(t,"class","btn"),u(t,"onclick","my_modal_2.showModal()"),u(e,"id","my_modal_2"),u(e,"class","modal")},m(s,l){r(s,t,l),r(s,o,l),r(s,e,l)},p:z,d(s){s&&(c(t),c(o),c(e))}}}function Tt(m){let t,i=`<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_2.showModal()">open modal</button>
<dialog id="my_modal_2" class="$$modal">
  <form method="dialog" class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </form>
  <form method="dialog" class="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=g(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var a=v(t);o=x(a,i),a.forEach(c),this.h()},h(){u(t,"slot","html")},m(l,a){r(l,t,a),w(t,o),d||(s=k(e=C.call(null,t,{to:m[0]})),d=!0)},p(l,a){e&&y(e.update)&&a&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Nt(m){let t,i=`{/* Open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_2.showModal()}>open modal</button>
<dialog id="my_modal_2" className="$$modal">
  <form method="dialog" className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </form>
  <form method="dialog" className="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=g(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var a=v(t);o=x(a,i),a.forEach(c),this.h()},h(){u(t,"slot","jsx")},m(l,a){r(l,t,a),w(t,o),d||(s=k(e=C.call(null,t,{to:m[0]})),d=!0)},p(l,a){e&&y(e.update)&&a&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Lt(m){let t,i="open modal",o,e,d='<form method="dialog" class="modal-box"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> <h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click on ✕ button to close</p></form>';return{c(){t=p("button"),t.textContent=i,o=$(),e=p("dialog"),e.innerHTML=d,this.h()},l(s){t=f(s,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),_(t)!=="svelte-1lf6s1v"&&(t.textContent=i),o=b(s),e=f(s,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),_(e)!=="svelte-1waprek"&&(e.innerHTML=d),this.h()},h(){u(t,"class","btn"),u(t,"onclick","my_modal_3.showModal()"),u(e,"id","my_modal_3"),u(e,"class","modal")},m(s,l){r(s,t,l),r(s,o,l),r(s,e,l)},p:z,d(s){s&&(c(t),c(o),c(e))}}}function Pt(m){let t,i=`<!-- You can open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_3.showModal()">open modal</button>
<dialog id="my_modal_3" class="$$modal">
  <form method="dialog" class="$$modal-box">
    <button class="$$btn $$btn-sm $$btn-circle $$btn-ghost absolute right-2 top-2">✕</button>
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </form>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=g(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var a=v(t);o=x(a,i),a.forEach(c),this.h()},h(){u(t,"slot","html")},m(l,a){r(l,t,a),w(t,o),d||(s=k(e=C.call(null,t,{to:m[0]})),d=!0)},p(l,a){e&&y(e.update)&&a&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Dt(m){let t,i=`{/* You can open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_3.showModal()}>open modal</button>
<dialog id="my_modal_3" className="$$modal">
  <form method="dialog" className="$$modal-box">
    <button className="$$btn $$btn-sm $$btn-circle $$btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </form>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=g(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var a=v(t);o=x(a,i),a.forEach(c),this.h()},h(){u(t,"slot","jsx")},m(l,a){r(l,t,a),w(t,o),d||(s=k(e=C.call(null,t,{to:m[0]})),d=!0)},p(l,a){e&&y(e.update)&&a&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function It(m){let t,i="open modal",o,e,d='<form method="dialog" class="modal-box w-11/12 max-w-5xl"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Click the button below to close</p> <div class="modal-action"><button class="btn">Close</button></div></form>';return{c(){t=p("button"),t.textContent=i,o=$(),e=p("dialog"),e.innerHTML=d,this.h()},l(s){t=f(s,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),_(t)!=="svelte-dvr70k"&&(t.textContent=i),o=b(s),e=f(s,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),_(e)!=="svelte-1va4s7y"&&(e.innerHTML=d),this.h()},h(){u(t,"class","btn"),u(t,"onclick","my_modal_4.showModal()"),u(e,"id","my_modal_4"),u(e,"class","modal")},m(s,l){r(s,t,l),r(s,o,l),r(s,e,l)},p:z,d(s){s&&(c(t),c(o),c(e))}}}function jt(m){let t,i=`<!-- You can open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_4.showModal()">open modal</button>
<dialog id="my_modal_4" class="$$modal">
  <form method="dialog" class="$$modal-box w-11/12 max-w-5xl">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Click the button below to close</p>
    <div class="$$modal-action">
      <!-- if there is a button, it will close the modal -->
      <button class="$$btn">Close</button>
    </div>
  </form>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=g(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var a=v(t);o=x(a,i),a.forEach(c),this.h()},h(){u(t,"slot","html")},m(l,a){r(l,t,a),w(t,o),d||(s=k(e=C.call(null,t,{to:m[0]})),d=!0)},p(l,a){e&&y(e.update)&&a&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Ot(m){let t,i=`{/* You can open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_4.showModal()}>open modal</button>
<dialog id="my_modal_4" className="$$modal">
  <form method="dialog" className="$$modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="$$modal-action">
      {/* if there is a button, it will close the modal */}
      <button className="$$btn">Close</button>
    </div>
  </form>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=g(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var a=v(t);o=x(a,i),a.forEach(c),this.h()},h(){u(t,"slot","jsx")},m(l,a){r(l,t,a),w(t,o),d||(s=k(e=C.call(null,t,{to:m[0]})),d=!0)},p(l,a){e&&y(e.update)&&a&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function St(m){let t,i="open modal",o,e,d='<form method="dialog" class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click the button below to close</p> <div class="modal-action"><button class="btn">Close</button></div></form>';return{c(){t=p("button"),t.textContent=i,o=$(),e=p("dialog"),e.innerHTML=d,this.h()},l(s){t=f(s,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),_(t)!=="svelte-5o4vr1"&&(t.textContent=i),o=b(s),e=f(s,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),_(e)!=="svelte-upqgs"&&(e.innerHTML=d),this.h()},h(){u(t,"class","btn"),u(t,"onclick","my_modal_5.showModal()"),u(e,"id","my_modal_5"),u(e,"class","modal modal-bottom sm:modal-middle")},m(s,l){r(s,t,l),r(s,o,l),r(s,e,l)},p:z,d(s){s&&(c(t),c(o),c(e))}}}function Rt(m){let t,i=`<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_5.showModal()">open modal</button>
<dialog id="my_modal_5" class="$$modal $$modal-bottom sm:$$modal-middle">
  <form method="dialog" class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="$$modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="$$btn">Close</button>
    </div>
  </form>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=g(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var a=v(t);o=x(a,i),a.forEach(c),this.h()},h(){u(t,"slot","html")},m(l,a){r(l,t,a),w(t,o),d||(s=k(e=C.call(null,t,{to:m[0]})),d=!0)},p(l,a){e&&y(e.update)&&a&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function At(m){let t,i=`{/* Open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_5.showModal()}>open modal</button>
<dialog id="my_modal_5" className="$$modal modal-bottom sm:$$modal-middle">
  <form method="dialog" className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="$$modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="$$btn">Close</button>
    </div>
  </form>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=g(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var a=v(t);o=x(a,i),a.forEach(c),this.h()},h(){u(t,"slot","jsx")},m(l,a){r(l,t,a),w(t,o),d||(s=k(e=C.call(null,t,{to:m[0]})),d=!0)},p(l,a){e&&y(e.update)&&a&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Ut(m){let t,i="open modal";return{c(){t=p("label"),t.textContent=i,this.h()},l(o){t=f(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),_(t)!=="svelte-1clo1l5"&&(t.textContent=i),this.h()},h(){u(t,"for","my_modal_6"),u(t,"class","btn")},m(o,e){r(o,t,e)},p:z,d(o){o&&c(t)}}}function qt(m){let t,i=`<!-- The button to open modal -->
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
</div>`,o,e,d,s;return{c(){t=p("pre"),o=g(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var a=v(t);o=x(a,i),a.forEach(c),this.h()},h(){u(t,"slot","html")},m(l,a){r(l,t,a),w(t,o),d||(s=k(e=C.call(null,t,{to:m[0]})),d=!0)},p(l,a){e&&y(e.update)&&a&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Bt(m){let t,i="open modal";return{c(){t=p("label"),t.textContent=i,this.h()},l(o){t=f(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),_(t)!=="svelte-8p1kam"&&(t.textContent=i),this.h()},h(){u(t,"for","my_modal_7"),u(t,"class","btn")},m(o,e){r(o,t,e)},p:z,d(o){o&&c(t)}}}function Yt(m){let t,i=`<!-- The button to open modal -->
<label for="my_modal_7" class="$$btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_7" class="$$modal-toggle" />
<div class="$$modal">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
  </div>
  <label class="$$modal-backdrop" for="my_modal_7">Close</label>
</div>`,o,e,d,s;return{c(){t=p("pre"),o=g(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var a=v(t);o=x(a,i),a.forEach(c),this.h()},h(){u(t,"slot","html")},m(l,a){r(l,t,a),w(t,o),d||(s=k(e=C.call(null,t,{to:m[0]})),d=!0)},p(l,a){e&&y(e.update)&&a&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function zt(m){let t,i="open modal";return{c(){t=p("a"),t.textContent=i,this.h()},l(o){t=f(o,"A",{href:!0,class:!0,rel:!0,"data-svelte-h":!0}),_(t)!=="svelte-tkds01"&&(t.textContent=i),this.h()},h(){u(t,"href","#my_modal_8"),u(t,"class","btn"),u(t,"rel","external")},m(o,e){r(o,t,e)},p:z,d(o){o&&c(t)}}}function Gt(m){let t,i=`<!-- The button to open modal -->
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
</div>`,o,e,d,s;return{c(){t=p("pre"),o=g(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var a=v(t);o=x(a,i),a.forEach(c),this.h()},h(){u(t,"slot","html")},m(l,a){r(l,t,a),w(t,o),d||(s=k(e=C.call(null,t,{to:m[0]})),d=!0)},p(l,a){e&&y(e.update)&&a&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Jt(m){let t,i,o,e='<div><span class="font-bold">There are 3 ways to use a modal:</span> <ol><li>Using <code>&lt;dialog&gt;</code> element: It needs JS to open but it has better accessibility and we can close it using <span class="kbd kbd-xs">Esc</span> key</li> <li>Using a hidden <code>&lt;input type=&quot;checkbox&quot;&gt;</code> and <code>&lt;label&gt;</code> to check/uncheck the checkbox and open/close the modal</li> <li>Using <code>&lt;a&gt;</code> anchor links: A link adds a parameter to the URL and you only see the modal when the URL has that parameter</li></ol></div>',d,s,l='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>Make sure you&#39;re using unique IDs for each modal</div>',a,P,ot='<a aria-hidden="true" tabindex="-1" href="#method-1-using-dialog-element-recommended"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 1: using dialog element <span class="badge badge-success">recommended</span>',G,D,J,I,V,j,F,O,K,S,Q,R,st='<a aria-hidden="true" tabindex="-1" href="#method-2-using-a-hidden-checkbox-legacy"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 2: using a hidden checkbox <span class="badge badge-warning">legacy</span>',W,A,X,U,Z,q,at='<a aria-hidden="true" tabindex="-1" href="#method-3-using-anchor-links-legacy"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 3: using anchor links <span class="badge badge-warning">legacy</span>',tt,B,et;return t=new yt({props:{data:[{type:"component",class:"modal",desc:"Container element"},{type:"component",class:"modal-box",desc:"The content of modal"},{type:"component",class:"modal-action",desc:"Container for modal action buttons"},{type:"component",class:"modal-backdrop",desc:"The backdrop that covers the back of modal so we can close the modal by clicking outside"},{type:"component",class:"modal-toggle",desc:"For hidden checkbox that controls modal"},{type:"modifier",class:"modal-open",desc:"Add/remove this class to open/close the modal using JS"},{type:"responsive",class:"modal-top",desc:"Moves the modal to top"},{type:"responsive",class:"modal-bottom",desc:"Moves the modal to bottom"},{type:"responsive",class:"modal-middle",desc:"Moves the modal to middle (default)"}]}}),D=new Y({props:{title:"Dialog modal",desc:"opens on click using ID.showModal() method. can be closed using ID.close() method",$$slots:{jsx:[Et],html:[Mt],default:[Ct]},$$scope:{ctx:m}}}),I=new Y({props:{title:"Dialog modal, closes when clicked outside",desc:"there a second form with 'modal-backdrop' class and it covers the screen so we can close the modal when clicked outside",$$slots:{jsx:[Nt],html:[Tt],default:[Ht]},$$scope:{ctx:m}}}),j=new Y({props:{title:"Dialog modal with a close button at corner",$$slots:{jsx:[Dt],html:[Pt],default:[Lt]},$$scope:{ctx:m}}}),O=new Y({props:{title:"Dialog modal with custom width",desc:"You can use any w-* and max-w-* utility class to customize the width",$$slots:{jsx:[Ot],html:[jt],default:[It]},$$scope:{ctx:m}}}),S=new Y({props:{title:"Responsive",desc:"Modal goes bottom on mobile screen and goes middle on desktop",$$slots:{jsx:[At],html:[Rt],default:[St]},$$scope:{ctx:m}}}),A=new Y({props:{title:"Modal using label + hidden checkbox",$$slots:{html:[qt],default:[Ut]},$$scope:{ctx:m}}}),U=new Y({props:{title:"Modal that closes when clicked outside",desc:"Modal works with a hidden checkbox and labels can toggle the checkbox so we can use another label tag with 'modal-backdrop' class that covers the screen so we can close the modal when clicked outside",$$slots:{html:[Yt],default:[Bt]},$$scope:{ctx:m}}}),B=new Y({props:{title:"Modal using anchor link",desc:"Anchor links might not work well on some SPA frameworks so if there are problems, use the first example",$$slots:{html:[Gt],default:[zt]},$$scope:{ctx:m}}}),{c(){M(t.$$.fragment),i=$(),o=p("div"),o.innerHTML=e,d=$(),s=p("div"),s.innerHTML=l,a=$(),P=p("h3"),P.innerHTML=ot,G=$(),M(D.$$.fragment),J=$(),M(I.$$.fragment),V=$(),M(j.$$.fragment),F=$(),M(O.$$.fragment),K=$(),M(S.$$.fragment),Q=$(),R=p("h3"),R.innerHTML=st,W=$(),M(A.$$.fragment),X=$(),M(U.$$.fragment),Z=$(),q=p("h3"),q.innerHTML=at,tt=$(),M(B.$$.fragment),this.h()},l(n){E(t.$$.fragment,n),i=b(n),o=f(n,"DIV",{class:!0,"data-svelte-h":!0}),_(o)!=="svelte-ejsesf"&&(o.innerHTML=e),d=b(n),s=f(n,"DIV",{class:!0,"data-svelte-h":!0}),_(s)!=="svelte-1wq9qij"&&(s.innerHTML=l),a=b(n),P=f(n,"H3",{id:!0,"data-svelte-h":!0}),_(P)!=="svelte-pazg3s"&&(P.innerHTML=ot),G=b(n),E(D.$$.fragment,n),J=b(n),E(I.$$.fragment,n),V=b(n),E(j.$$.fragment,n),F=b(n),E(O.$$.fragment,n),K=b(n),E(S.$$.fragment,n),Q=b(n),R=f(n,"H3",{id:!0,"data-svelte-h":!0}),_(R)!=="svelte-1x7tqpi"&&(R.innerHTML=st),W=b(n),E(A.$$.fragment,n),X=b(n),E(U.$$.fragment,n),Z=b(n),q=f(n,"H3",{id:!0,"data-svelte-h":!0}),_(q)!=="svelte-1k6pp77"&&(q.innerHTML=at),tt=b(n),E(B.$$.fragment,n),this.h()},h(){u(o,"class","alert text-sm"),u(s,"class","alert text-sm mt-4"),u(P,"id","method-1-using-dialog-element-recommended"),u(R,"id","method-2-using-a-hidden-checkbox-legacy"),u(q,"id","method-3-using-anchor-links-legacy")},m(n,h){H(t,n,h),r(n,i,h),r(n,o,h),r(n,d,h),r(n,s,h),r(n,a,h),r(n,P,h),r(n,G,h),H(D,n,h),r(n,J,h),H(I,n,h),r(n,V,h),H(j,n,h),r(n,F,h),H(O,n,h),r(n,K,h),H(S,n,h),r(n,Q,h),r(n,R,h),r(n,W,h),H(A,n,h),r(n,X,h),H(U,n,h),r(n,Z,h),r(n,q,h),r(n,tt,h),H(B,n,h),et=!0},p(n,h){const nt={};h&5&&(nt.$$scope={dirty:h,ctx:n}),D.$set(nt);const dt={};h&5&&(dt.$$scope={dirty:h,ctx:n}),I.$set(dt);const it={};h&5&&(it.$$scope={dirty:h,ctx:n}),j.$set(it);const ct={};h&5&&(ct.$$scope={dirty:h,ctx:n}),O.$set(ct);const mt={};h&5&&(mt.$$scope={dirty:h,ctx:n}),S.$set(mt);const rt={};h&5&&(rt.$$scope={dirty:h,ctx:n}),A.$set(rt);const ut={};h&5&&(ut.$$scope={dirty:h,ctx:n}),U.$set(ut);const ht={};h&5&&(ht.$$scope={dirty:h,ctx:n}),B.$set(ht)},i(n){et||(T(t.$$.fragment,n),T(D.$$.fragment,n),T(I.$$.fragment,n),T(j.$$.fragment,n),T(O.$$.fragment,n),T(S.$$.fragment,n),T(A.$$.fragment,n),T(U.$$.fragment,n),T(B.$$.fragment,n),et=!0)},o(n){N(t.$$.fragment,n),N(D.$$.fragment,n),N(I.$$.fragment,n),N(j.$$.fragment,n),N(O.$$.fragment,n),N(S.$$.fragment,n),N(A.$$.fragment,n),N(U.$$.fragment,n),N(B.$$.fragment,n),et=!1},d(n){n&&(c(i),c(o),c(d),c(s),c(a),c(P),c(G),c(J),c(V),c(F),c(K),c(Q),c(R),c(W),c(X),c(Z),c(q),c(tt)),L(t,n),L(D,n),L(I,n),L(j,n),L(O,n),L(S,n),L(A,n),L(U,n),L(B,n)}}}function Vt(m){let t,i;const o=[m[1],$t];let e={$$slots:{default:[Jt]},$$scope:{ctx:m}};for(let d=0;d<o.length;d+=1)e=lt(e,o[d]);return t=new wt({props:e}),{c(){M(t.$$.fragment)},l(d){E(t.$$.fragment,d)},m(d,s){H(t,d,s),i=!0},p(d,[s]){const l=s&2?xt(o,[s&2&&ft(d[1]),s&0&&ft($t)]):{};s&5&&(l.$$scope={dirty:s,ctx:d}),t.$set(l)},i(d){i||(T(t.$$.fragment,d),i=!0)},o(d){N(t.$$.fragment,d),i=!1},d(d){L(t,d)}}}const $t={title:"Modal",desc:"Modal is used to show a dialog or a box when you click a button.",published:!0};function Ft(m,t,i){let o;return _t(m,kt,e=>i(0,o=e)),m.$$set=e=>{i(1,t=lt(lt({},t),pt(e)))},t=pt(t),[o,t]}class te extends gt{constructor(t){super(),vt(this,t,Ft,Vt,bt,{})}}export{te as component};
