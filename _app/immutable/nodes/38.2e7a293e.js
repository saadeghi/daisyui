import{s as Ht,E as ft,y as Nt,O as wt,a as b,f as p,r as yt,c as _,g as f,h as g,d as c,z as v,u as Ct,j as m,i as u,v as $,w as J,l as x,m as k,Y as w,U as y}from"../chunks/scheduler.e5ccafd2.js";import{S as Pt,i as Lt,b as M,d as E,m as T,a as H,t as N,e as P}from"../chunks/index.fb4b3a7b.js";import{g as Dt,a as Mt}from"../chunks/index.18b79e66.js";import{M as It}from"../chunks/mdsvex.df02fbe7.js";import{p as jt,C as Ot,a as V,r as C}from"../chunks/ClassTable.c240c7d8.js";import{T as Et}from"../chunks/Translate.721c4141.js";function St(r){let t,i="open modal",o,e,d='<form method="dialog" class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click the button below to close</p> <div class="modal-action"><button class="btn">Close</button></div></form>';return{c(){t=p("button"),t.textContent=i,o=b(),e=p("dialog"),e.innerHTML=d,this.h()},l(a){t=f(a,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),v(t)!=="svelte-zek3rt"&&(t.textContent=i),o=_(a),e=f(a,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),v(e)!=="svelte-1wtpdu8"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_1.showModal()"),m(e,"id","my_modal_1"),m(e,"class","modal")},m(a,l){u(a,t,l),u(a,o,l),u(a,e,l)},p:J,d(a){a&&(c(t),c(o),c(e))}}}function Rt(r){let t,i=`<!-- Open the modal using ID.showModal() method -->
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
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=k(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(a=w(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function At(r){let t,i=`{/* Open the modal using ID.showModal() method */}
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
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=k(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){u(l,t,n),$(t,o),d||(a=w(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Ut(r){let t,i="open modal",o,e,d='<form method="dialog" class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click outside to close</p></form> <form method="dialog" class="modal-backdrop"><button>close</button></form>';return{c(){t=p("button"),t.textContent=i,o=b(),e=p("dialog"),e.innerHTML=d,this.h()},l(a){t=f(a,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),v(t)!=="svelte-1uaieui"&&(t.textContent=i),o=_(a),e=f(a,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),v(e)!=="svelte-dn84y2"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_2.showModal()"),m(e,"id","my_modal_2"),m(e,"class","modal")},m(a,l){u(a,t,l),u(a,o,l),u(a,e,l)},p:J,d(a){a&&(c(t),c(o),c(e))}}}function Bt(r){let t,i=`<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_2.showModal()">open modal</button>
<dialog id="my_modal_2" class="$$modal">
  <form method="dialog" class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </form>
  <form method="dialog" class="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=k(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(a=w(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Yt(r){let t,i=`{/* Open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_2.showModal()}>open modal</button>
<dialog id="my_modal_2" className="$$modal">
  <form method="dialog" className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </form>
  <form method="dialog" className="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=k(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){u(l,t,n),$(t,o),d||(a=w(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function qt(r){let t,i="open modal",o,e,d='<form method="dialog" class="modal-box"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> <h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click on ✕ button to close</p></form>';return{c(){t=p("button"),t.textContent=i,o=b(),e=p("dialog"),e.innerHTML=d,this.h()},l(a){t=f(a,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),v(t)!=="svelte-1lf6s1v"&&(t.textContent=i),o=_(a),e=f(a,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),v(e)!=="svelte-1waprek"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_3.showModal()"),m(e,"id","my_modal_3"),m(e,"class","modal")},m(a,l){u(a,t,l),u(a,o,l),u(a,e,l)},p:J,d(a){a&&(c(t),c(o),c(e))}}}function zt(r){let t,i=`<!-- You can open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_3.showModal()">open modal</button>
<dialog id="my_modal_3" class="$$modal">
  <form method="dialog" class="$$modal-box">
    <button class="$$btn $$btn-sm $$btn-circle $$btn-ghost absolute right-2 top-2">✕</button>
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </form>
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=k(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(a=w(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Gt(r){let t,i=`{/* You can open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_3.showModal()}>open modal</button>
<dialog id="my_modal_3" className="$$modal">
  <form method="dialog" className="$$modal-box">
    <button className="$$btn $$btn-sm $$btn-circle $$btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </form>
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=k(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){u(l,t,n),$(t,o),d||(a=w(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Vt(r){let t,i="open modal",o,e,d='<form method="dialog" class="modal-box w-11/12 max-w-5xl"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Click the button below to close</p> <div class="modal-action"><button class="btn">Close</button></div></form>';return{c(){t=p("button"),t.textContent=i,o=b(),e=p("dialog"),e.innerHTML=d,this.h()},l(a){t=f(a,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),v(t)!=="svelte-dvr70k"&&(t.textContent=i),o=_(a),e=f(a,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),v(e)!=="svelte-1va4s7y"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_4.showModal()"),m(e,"id","my_modal_4"),m(e,"class","modal")},m(a,l){u(a,t,l),u(a,o,l),u(a,e,l)},p:J,d(a){a&&(c(t),c(o),c(e))}}}function Jt(r){let t,i=`<!-- You can open the modal using ID.showModal() method -->
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
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=k(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(a=w(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Ft(r){let t,i=`{/* You can open the modal using ID.showModal() method */}
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
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=k(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){u(l,t,n),$(t,o),d||(a=w(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Kt(r){let t,i="open modal",o,e,d='<form method="dialog" class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click the button below to close</p> <div class="modal-action"><button class="btn">Close</button></div></form>';return{c(){t=p("button"),t.textContent=i,o=b(),e=p("dialog"),e.innerHTML=d,this.h()},l(a){t=f(a,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),v(t)!=="svelte-5o4vr1"&&(t.textContent=i),o=_(a),e=f(a,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),v(e)!=="svelte-upqgs"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_5.showModal()"),m(e,"id","my_modal_5"),m(e,"class","modal modal-bottom sm:modal-middle")},m(a,l){u(a,t,l),u(a,o,l),u(a,e,l)},p:J,d(a){a&&(c(t),c(o),c(e))}}}function Qt(r){let t,i=`<!-- Open the modal using ID.showModal() method -->
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
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=k(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(a=w(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Wt(r){let t,i=`{/* Open the modal using ID.showModal() method */}
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
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=k(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){u(l,t,n),$(t,o),d||(a=w(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Xt(r){let t,i="open modal";return{c(){t=p("label"),t.textContent=i,this.h()},l(o){t=f(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),v(t)!=="svelte-1clo1l5"&&(t.textContent=i),this.h()},h(){m(t,"for","my_modal_6"),m(t,"class","btn")},m(o,e){u(o,t,e)},p:J,d(o){o&&c(t)}}}function Zt(r){let t,i=`<!-- The button to open modal -->
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
</div>`,o,e,d,a;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=k(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(a=w(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function te(r){let t,i="open modal";return{c(){t=p("label"),t.textContent=i,this.h()},l(o){t=f(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),v(t)!=="svelte-8p1kam"&&(t.textContent=i),this.h()},h(){m(t,"for","my_modal_7"),m(t,"class","btn")},m(o,e){u(o,t,e)},p:J,d(o){o&&c(t)}}}function ee(r){let t,i=`<!-- The button to open modal -->
<label for="my_modal_7" class="$$btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_7" class="$$modal-toggle" />
<div class="$$modal">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
  </div>
  <label class="$$modal-backdrop" for="my_modal_7">Close</label>
</div>`,o,e,d,a;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=k(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(a=w(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function le(r){let t,i="open modal";return{c(){t=p("a"),t.textContent=i,this.h()},l(o){t=f(o,"A",{href:!0,class:!0,rel:!0,"data-svelte-h":!0}),v(t)!=="svelte-tkds01"&&(t.textContent=i),this.h()},h(){m(t,"href","#my_modal_8"),m(t,"class","btn"),m(t,"rel","external")},m(o,e){u(o,t,e)},p:J,d(o){o&&c(t)}}}function oe(r){let t,i=`<!-- The button to open modal -->
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
</div>`,o,e,d,a;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=k(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(a=w(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function ae(r){let t,i,o,e,d,a,l,n,$t='<li>Using <code>&lt;dialog&gt;</code> element: It needs JS to open but it has better accessibility and we can close it using <span class="kbd kbd-xs">Esc</span> key</li> <li>Using a hidden <code>&lt;input type=&quot;checkbox&quot;&gt;</code> and <code>&lt;label&gt;</code> to check/uncheck the checkbox and open/close the modal</li> <li>Using <code>&lt;a&gt;</code> anchor links: A link adds a parameter to the URL and you only see the modal when the URL has that parameter</li>',et,L,D,I,pt,W,F,lt,j,bt='<a aria-hidden="true" tabindex="-1" href="#method-1-using-dialog-element-recommended"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 1: using dialog element <span class="badge badge-success">recommended</span>',ot,O,at,S,st,R,nt,A,dt,U,it,B,_t='<a aria-hidden="true" tabindex="-1" href="#method-2-using-a-hidden-checkbox-legacy"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 2: using a hidden checkbox <span class="badge badge-warning">legacy</span>',ct,Y,mt,q,rt,z,gt='<a aria-hidden="true" tabindex="-1" href="#method-3-using-anchor-links-legacy"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 3: using anchor links <span class="badge badge-warning">legacy</span>',ut,G,ht;return t=new Ot({props:{data:[{type:"component",class:"modal",desc:"Container element"},{type:"component",class:"modal-box",desc:"The content of modal"},{type:"component",class:"modal-action",desc:"Container for modal action buttons"},{type:"component",class:"modal-backdrop",desc:"The backdrop that covers the back of modal so we can close the modal by clicking outside"},{type:"component",class:"modal-toggle",desc:"For hidden checkbox that controls modal"},{type:"modifier",class:"modal-open",desc:"Add/remove this class to open/close the modal using JS"},{type:"responsive",class:"modal-top",desc:"Moves the modal to top"},{type:"responsive",class:"modal-bottom",desc:"Moves the modal to bottom"},{type:"responsive",class:"modal-middle",desc:"Moves the modal to middle (default)"}]}}),a=new Et({props:{text:"There are 3 ways to use a modal:"}}),F=new Et({props:{text:"Make sure you're using unique IDs for each modal"}}),O=new V({props:{title:"Dialog modal",desc:"opens on click using ID.showModal() method. can be closed using ID.close() method",$$slots:{jsx:[At],html:[Rt],default:[St]},$$scope:{ctx:r}}}),S=new V({props:{title:"Dialog modal, closes when clicked outside",desc:"there a second form with 'modal-backdrop' class and it covers the screen so we can close the modal when clicked outside",$$slots:{jsx:[Yt],html:[Bt],default:[Ut]},$$scope:{ctx:r}}}),R=new V({props:{title:"Dialog modal with a close button at corner",$$slots:{jsx:[Gt],html:[zt],default:[qt]},$$scope:{ctx:r}}}),A=new V({props:{title:"Dialog modal with custom width",desc:"You can use any w-* and max-w-* utility class to customize the width",$$slots:{jsx:[Ft],html:[Jt],default:[Vt]},$$scope:{ctx:r}}}),U=new V({props:{title:"Responsive",desc:"Modal goes bottom on mobile screen and goes middle on desktop",$$slots:{jsx:[Wt],html:[Qt],default:[Kt]},$$scope:{ctx:r}}}),Y=new V({props:{title:"Modal using label + hidden checkbox",$$slots:{html:[Zt],default:[Xt]},$$scope:{ctx:r}}}),q=new V({props:{title:"Modal that closes when clicked outside",desc:"Modal works with a hidden checkbox and labels can toggle the checkbox so we can use another label tag with 'modal-backdrop' class that covers the screen so we can close the modal when clicked outside",$$slots:{html:[ee],default:[te]},$$scope:{ctx:r}}}),G=new V({props:{title:"Modal using anchor link",desc:"Anchor links might not work well on some SPA frameworks so if there are problems, use the first example",$$slots:{html:[oe],default:[le]},$$scope:{ctx:r}}}),{c(){M(t.$$.fragment),i=b(),o=p("div"),e=p("div"),d=p("span"),M(a.$$.fragment),l=b(),n=p("ol"),n.innerHTML=$t,et=b(),L=p("div"),D=yt("svg"),I=yt("path"),pt=b(),W=p("div"),M(F.$$.fragment),lt=b(),j=p("h3"),j.innerHTML=bt,ot=b(),M(O.$$.fragment),at=b(),M(S.$$.fragment),st=b(),M(R.$$.fragment),nt=b(),M(A.$$.fragment),dt=b(),M(U.$$.fragment),it=b(),B=p("h3"),B.innerHTML=_t,ct=b(),M(Y.$$.fragment),mt=b(),M(q.$$.fragment),rt=b(),z=p("h3"),z.innerHTML=gt,ut=b(),M(G.$$.fragment),this.h()},l(s){E(t.$$.fragment,s),i=_(s),o=f(s,"DIV",{class:!0});var h=g(o);e=f(h,"DIV",{});var K=g(e);d=f(K,"SPAN",{class:!0});var X=g(d);E(a.$$.fragment,X),X.forEach(c),l=_(K),n=f(K,"OL",{"data-svelte-h":!0}),v(n)!=="svelte-1ii7k10"&&(n.innerHTML=$t),K.forEach(c),h.forEach(c),et=_(s),L=f(s,"DIV",{class:!0});var Q=g(L);D=Ct(Q,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var Z=g(D);I=Ct(Z,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),g(I).forEach(c),Z.forEach(c),pt=_(Q),W=f(Q,"DIV",{});var tt=g(W);E(F.$$.fragment,tt),tt.forEach(c),Q.forEach(c),lt=_(s),j=f(s,"H3",{id:!0,"data-svelte-h":!0}),v(j)!=="svelte-pazg3s"&&(j.innerHTML=bt),ot=_(s),E(O.$$.fragment,s),at=_(s),E(S.$$.fragment,s),st=_(s),E(R.$$.fragment,s),nt=_(s),E(A.$$.fragment,s),dt=_(s),E(U.$$.fragment,s),it=_(s),B=f(s,"H3",{id:!0,"data-svelte-h":!0}),v(B)!=="svelte-1x7tqpi"&&(B.innerHTML=_t),ct=_(s),E(Y.$$.fragment,s),mt=_(s),E(q.$$.fragment,s),rt=_(s),z=f(s,"H3",{id:!0,"data-svelte-h":!0}),v(z)!=="svelte-1k6pp77"&&(z.innerHTML=gt),ut=_(s),E(G.$$.fragment,s),this.h()},h(){m(d,"class","font-bold"),m(o,"class","alert text-sm"),m(I,"stroke-linecap","round"),m(I,"stroke-linejoin","round"),m(I,"stroke-width","2"),m(I,"d","M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),m(D,"xmlns","http://www.w3.org/2000/svg"),m(D,"fill","none"),m(D,"viewBox","0 0 24 24"),m(D,"class","stroke-current flex-shrink-0 w-6 h-6"),m(L,"class","alert text-sm mt-4"),m(j,"id","method-1-using-dialog-element-recommended"),m(B,"id","method-2-using-a-hidden-checkbox-legacy"),m(z,"id","method-3-using-anchor-links-legacy")},m(s,h){T(t,s,h),u(s,i,h),u(s,o,h),$(o,e),$(e,d),T(a,d,null),$(e,l),$(e,n),u(s,et,h),u(s,L,h),$(L,D),$(D,I),$(L,pt),$(L,W),T(F,W,null),u(s,lt,h),u(s,j,h),u(s,ot,h),T(O,s,h),u(s,at,h),T(S,s,h),u(s,st,h),T(R,s,h),u(s,nt,h),T(A,s,h),u(s,dt,h),T(U,s,h),u(s,it,h),u(s,B,h),u(s,ct,h),T(Y,s,h),u(s,mt,h),T(q,s,h),u(s,rt,h),u(s,z,h),u(s,ut,h),T(G,s,h),ht=!0},p(s,h){const K={};h&5&&(K.$$scope={dirty:h,ctx:s}),O.$set(K);const X={};h&5&&(X.$$scope={dirty:h,ctx:s}),S.$set(X);const Q={};h&5&&(Q.$$scope={dirty:h,ctx:s}),R.$set(Q);const Z={};h&5&&(Z.$$scope={dirty:h,ctx:s}),A.$set(Z);const tt={};h&5&&(tt.$$scope={dirty:h,ctx:s}),U.$set(tt);const vt={};h&5&&(vt.$$scope={dirty:h,ctx:s}),Y.$set(vt);const xt={};h&5&&(xt.$$scope={dirty:h,ctx:s}),q.$set(xt);const kt={};h&5&&(kt.$$scope={dirty:h,ctx:s}),G.$set(kt)},i(s){ht||(H(t.$$.fragment,s),H(a.$$.fragment,s),H(F.$$.fragment,s),H(O.$$.fragment,s),H(S.$$.fragment,s),H(R.$$.fragment,s),H(A.$$.fragment,s),H(U.$$.fragment,s),H(Y.$$.fragment,s),H(q.$$.fragment,s),H(G.$$.fragment,s),ht=!0)},o(s){N(t.$$.fragment,s),N(a.$$.fragment,s),N(F.$$.fragment,s),N(O.$$.fragment,s),N(S.$$.fragment,s),N(R.$$.fragment,s),N(A.$$.fragment,s),N(U.$$.fragment,s),N(Y.$$.fragment,s),N(q.$$.fragment,s),N(G.$$.fragment,s),ht=!1},d(s){s&&(c(i),c(o),c(et),c(L),c(lt),c(j),c(ot),c(at),c(st),c(nt),c(dt),c(it),c(B),c(ct),c(mt),c(rt),c(z),c(ut)),P(t,s),P(a),P(F),P(O,s),P(S,s),P(R,s),P(A,s),P(U,s),P(Y,s),P(q,s),P(G,s)}}}function se(r){let t,i;const o=[r[1],Tt];let e={$$slots:{default:[ae]},$$scope:{ctx:r}};for(let d=0;d<o.length;d+=1)e=ft(e,o[d]);return t=new It({props:e}),{c(){M(t.$$.fragment)},l(d){E(t.$$.fragment,d)},m(d,a){T(t,d,a),i=!0},p(d,[a]){const l=a&2?Dt(o,[a&2&&Mt(d[1]),a&0&&Mt(Tt)]):{};a&5&&(l.$$scope={dirty:a,ctx:d}),t.$set(l)},i(d){i||(H(t.$$.fragment,d),i=!0)},o(d){N(t.$$.fragment,d),i=!1},d(d){P(t,d)}}}const Tt={title:"Modal",desc:"Modal is used to show a dialog or a box when you click a button.",published:!0};function ne(r,t,i){let o;return Nt(r,jt,e=>i(0,o=e)),r.$$set=e=>{i(1,t=ft(ft({},t),wt(e)))},t=wt(t),[o,t]}class he extends Pt{constructor(t){super(),Lt(this,t,ne,se,Ht,{})}}export{he as component};
