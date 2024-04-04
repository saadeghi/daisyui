import{s as It,z as bt,m as Pt,A as Ct,a as $,e as p,B as Mt,d as b,c as f,b as g,h as c,g as v,C as Et,i as m,j as r,k as _,n as J,t as E,f as T,D as H,E as N}from"../chunks/scheduler.CmJ_ZkIC.js";import{S as Lt,i as Dt,c as x,b as k,m as y,t as w,a as C,d as M}from"../chunks/index.BimWP6M-.js";import{g as Bt,a as Tt}from"../chunks/spread.CgU5AtxT.js";import{M as jt}from"../chunks/mdsvex-components.B7-hsvhv.js";import{p as St,C as Ot,a as V,r as I}from"../chunks/ClassTable.W29Bpkhs.js";import"../chunks/entry.QvY-hUaa.js";import{B as Rt}from"../chunks/BrowserSupport.agOLOWqF.js";import{T as Ht}from"../chunks/Translate.BueKpYMW.js";function At(u){let t,i="open modal",o,e,d='<div class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click the button below to close</p> <div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div></div>';return{c(){t=p("button"),t.textContent=i,o=$(),e=p("dialog"),e.innerHTML=d,this.h()},l(a){t=f(a,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),v(t)!=="svelte-zek3rt"&&(t.textContent=i),o=b(a),e=f(a,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),v(e)!=="svelte-1fj1yf3"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_1.showModal()"),m(e,"id","my_modal_1"),m(e,"class","modal")},m(a,l){r(a,t,l),r(a,o,l),r(a,e,l)},p:J,d(a){a&&(c(t),c(o),c(e))}}}function Ut(u){let t,i=`<!-- Open the modal using ID.showModal() method -->
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
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=E(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=T(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){r(l,t,n),_(t,o),d||(a=H(e=I.call(null,t,{to:u[0]})),d=!0)},p(l,n){e&&N(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Yt(u){let t,i=`{/* Open the modal using document.getElementById('ID').showModal() method */}
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
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=E(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=T(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){r(l,t,n),_(t,o),d||(a=H(e=I.call(null,t,{to:u[0]})),d=!0)},p(l,n){e&&N(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function qt(u){let t,i="open modal",o,e,d='<div class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click outside to close</p></div> <form method="dialog" class="modal-backdrop"><button>close</button></form>';return{c(){t=p("button"),t.textContent=i,o=$(),e=p("dialog"),e.innerHTML=d,this.h()},l(a){t=f(a,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),v(t)!=="svelte-1uaieui"&&(t.textContent=i),o=b(a),e=f(a,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),v(e)!=="svelte-fdxaas"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_2.showModal()"),m(e,"id","my_modal_2"),m(e,"class","modal")},m(a,l){r(a,t,l),r(a,o,l),r(a,e,l)},p:J,d(a){a&&(c(t),c(o),c(e))}}}function zt(u){let t,i=`<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_2.showModal()">open modal</button>
<dialog id="my_modal_2" class="$$modal">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=E(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=T(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){r(l,t,n),_(t,o),d||(a=H(e=I.call(null,t,{to:u[0]})),d=!0)},p(l,n){e&&N(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Gt(u){let t,i=`{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="$$btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button>
<dialog id="my_modal_2" className="$$modal">
  <div className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=E(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=T(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){r(l,t,n),_(t,o),d||(a=H(e=I.call(null,t,{to:u[0]})),d=!0)},p(l,n){e&&N(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Vt(u){let t,i="open modal",o,e,d='<div class="modal-box"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click on ✕ button to close</p></div>';return{c(){t=p("button"),t.textContent=i,o=$(),e=p("dialog"),e.innerHTML=d,this.h()},l(a){t=f(a,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),v(t)!=="svelte-1lf6s1v"&&(t.textContent=i),o=b(a),e=f(a,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),v(e)!=="svelte-1veww2i"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_3.showModal()"),m(e,"id","my_modal_3"),m(e,"class","modal")},m(a,l){r(a,t,l),r(a,o,l),r(a,e,l)},p:J,d(a){a&&(c(t),c(o),c(e))}}}function Jt(u){let t,i=`<!-- You can open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_3.showModal()">open modal</button>
<dialog id="my_modal_3" class="$$modal">
  <div class="$$modal-box">
    <form method="dialog">
      <button class="$$btn $$btn-sm $$btn-circle $$btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=E(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=T(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){r(l,t,n),_(t,o),d||(a=H(e=I.call(null,t,{to:u[0]})),d=!0)},p(l,n){e&&N(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Ft(u){let t,i=`{/* You can open the modal using document.getElementById('ID').showModal() method */}
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
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=E(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=T(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){r(l,t,n),_(t,o),d||(a=H(e=I.call(null,t,{to:u[0]})),d=!0)},p(l,n){e&&N(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Kt(u){let t,i="open modal",o,e,d='<div class="modal-box w-11/12 max-w-5xl"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Click the button below to close</p> <div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div></div>';return{c(){t=p("button"),t.textContent=i,o=$(),e=p("dialog"),e.innerHTML=d,this.h()},l(a){t=f(a,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),v(t)!=="svelte-dvr70k"&&(t.textContent=i),o=b(a),e=f(a,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),v(e)!=="svelte-ic5c3p"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_4.showModal()"),m(e,"id","my_modal_4"),m(e,"class","modal")},m(a,l){r(a,t,l),r(a,o,l),r(a,e,l)},p:J,d(a){a&&(c(t),c(o),c(e))}}}function Qt(u){let t,i=`<!-- You can open the modal using ID.showModal() method -->
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
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=E(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=T(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){r(l,t,n),_(t,o),d||(a=H(e=I.call(null,t,{to:u[0]})),d=!0)},p(l,n){e&&N(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Wt(u){let t,i=`{/* You can open the modal using document.getElementById('ID').showModal() method */}
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
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=E(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=T(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){r(l,t,n),_(t,o),d||(a=H(e=I.call(null,t,{to:u[0]})),d=!0)},p(l,n){e&&N(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function Xt(u){let t,i="open modal",o,e,d='<div class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click the button below to close</p> <div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div></div>';return{c(){t=p("button"),t.textContent=i,o=$(),e=p("dialog"),e.innerHTML=d,this.h()},l(a){t=f(a,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),v(t)!=="svelte-5o4vr1"&&(t.textContent=i),o=b(a),e=f(a,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),v(e)!=="svelte-1yc7j3t"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_5.showModal()"),m(e,"id","my_modal_5"),m(e,"class","modal modal-bottom sm:modal-middle")},m(a,l){r(a,t,l),r(a,o,l),r(a,e,l)},p:J,d(a){a&&(c(t),c(o),c(e))}}}function Zt(u){let t,i=`<!-- Open the modal using ID.showModal() method -->
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
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=E(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=T(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){r(l,t,n),_(t,o),d||(a=H(e=I.call(null,t,{to:u[0]})),d=!0)},p(l,n){e&&N(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function te(u){let t,i=`{/* Open the modal using document.getElementById('ID').showModal() method */}
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
</dialog>`,o,e,d,a;return{c(){t=p("pre"),o=E(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=T(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){r(l,t,n),_(t,o),d||(a=H(e=I.call(null,t,{to:u[0]})),d=!0)},p(l,n){e&&N(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function ee(u){let t,i="open modal";return{c(){t=p("label"),t.textContent=i,this.h()},l(o){t=f(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),v(t)!=="svelte-1clo1l5"&&(t.textContent=i),this.h()},h(){m(t,"for","my_modal_6"),m(t,"class","btn")},m(o,e){r(o,t,e)},p:J,d(o){o&&c(t)}}}function le(u){let t,i=`<!-- The button to open modal -->
<label for="my_modal_6" class="$$btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_6" class="$$modal-toggle" />
<div class="$$modal" role="dialog">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
    <div class="$$modal-action">
      <label for="my_modal_6" class="$$btn">Close!</label>
    </div>
  </div>
</div>`,o,e,d,a;return{c(){t=p("pre"),o=E(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=T(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){r(l,t,n),_(t,o),d||(a=H(e=I.call(null,t,{to:u[0]})),d=!0)},p(l,n){e&&N(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function oe(u){let t,i="open modal";return{c(){t=p("label"),t.textContent=i,this.h()},l(o){t=f(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),v(t)!=="svelte-8p1kam"&&(t.textContent=i),this.h()},h(){m(t,"for","my_modal_7"),m(t,"class","btn")},m(o,e){r(o,t,e)},p:J,d(o){o&&c(t)}}}function se(u){let t,i=`<!-- The button to open modal -->
<label for="my_modal_7" class="$$btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_7" class="$$modal-toggle" />
<div class="$$modal" role="dialog">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
  </div>
  <label class="$$modal-backdrop" for="my_modal_7">Close</label>
</div>`,o,e,d,a;return{c(){t=p("pre"),o=E(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=T(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){r(l,t,n),_(t,o),d||(a=H(e=I.call(null,t,{to:u[0]})),d=!0)},p(l,n){e&&N(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function ae(u){let t,i="open modal";return{c(){t=p("a"),t.textContent=i,this.h()},l(o){t=f(o,"A",{href:!0,class:!0,rel:!0,"data-svelte-h":!0}),v(t)!=="svelte-tkds01"&&(t.textContent=i),this.h()},h(){m(t,"href","#my_modal_8"),m(t,"class","btn"),m(t,"rel","external")},m(o,e){r(o,t,e)},p:J,d(o){o&&c(t)}}}function ne(u){let t,i=`<!-- The button to open modal -->
<a href="#my_modal_8" class="$$btn">open modal</a>
<!-- Put this part before </body> tag -->
<div class="$$modal" role="dialog" id="my_modal_8">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">This modal works with anchor links</p>
    <div class="$$modal-action">
     <a href="#" class="$$btn">Yay!</a>
    </div>
  </div>
</div>`,o,e,d,a;return{c(){t=p("pre"),o=E(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=g(t);o=T(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){r(l,t,n),_(t,o),d||(a=H(e=I.call(null,t,{to:u[0]})),d=!0)},p(l,n){e&&N(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,a()}}}function de(u){let t,i,o,e,d,a,l,n,ft,W,_t='<li>Using <code>&lt;dialog&gt;</code> element: It needs JS to open but it has better accessibility and we can close it using <span class="kbd kbd-xs">Esc</span> key</li> <li>Using a hidden <code>&lt;input type=&quot;checkbox&quot;&gt;</code> and <code>&lt;label&gt;</code> to check/uncheck the checkbox and open/close the modal</li> <li>Using <code>&lt;a&gt;</code> anchor links: A link adds a parameter to the URL and you only see the modal when the URL has that parameter</li>',lt,P,L,D,$t,X,F,ot,B,gt='<a aria-hidden="true" tabindex="-1" href="#method-1-using-dialog-element-recommended"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 1: using dialog element <span class="badge badge-success">recommended</span>',st,j,at,S,nt,O,dt,R,it,A,ct,U,vt='<a aria-hidden="true" tabindex="-1" href="#method-2-using-a-hidden-checkbox-legacy"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 2: using a hidden checkbox <span class="badge badge-warning">legacy</span>',mt,Y,rt,q,ut,z,xt='<a aria-hidden="true" tabindex="-1" href="#method-3-using-anchor-links-legacy"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 3: using anchor links <span class="badge badge-warning">legacy</span>',ht,G,pt;return t=new Rt({props:{data:{chrome:37,firefox:98,safari:15.4,iossafari:15.4}}}),o=new Ot({props:{data:[{type:"component",class:"modal",desc:"Container element"},{type:"component",class:"modal-box",desc:"The content of modal"},{type:"component",class:"modal-action",desc:"Container for modal action buttons"},{type:"component",class:"modal-backdrop",desc:"The backdrop that covers the back of modal so we can close the modal by clicking outside"},{type:"component",class:"modal-toggle",desc:"For hidden checkbox that controls modal"},{type:"modifier",class:"modal-open",desc:"Add/remove this class to open/close the modal using JS"},{type:"responsive",class:"modal-top",desc:"Moves the modal to top"},{type:"responsive",class:"modal-bottom",desc:"Moves the modal to bottom"},{type:"responsive",class:"modal-middle",desc:"Moves the modal to middle (default)"}]}}),n=new Ht({props:{text:"There are 3 ways to use a modal:"}}),F=new Ht({props:{text:"Make sure you're using unique IDs for each modal"}}),j=new V({props:{title:"Dialog modal",desc:"opens on click using ID.showModal() method. can be closed using ID.close() method",$$slots:{jsx:[Yt],html:[Ut],default:[At]},$$scope:{ctx:u}}}),S=new V({props:{title:"Dialog modal, closes when clicked outside",desc:"there is a second form with 'modal-backdrop' class and it covers the screen so we can close the modal when clicked outside",$$slots:{jsx:[Gt],html:[zt],default:[qt]},$$scope:{ctx:u}}}),O=new V({props:{title:"Dialog modal with a close button at corner",$$slots:{jsx:[Ft],html:[Jt],default:[Vt]},$$scope:{ctx:u}}}),R=new V({props:{title:"Dialog modal with custom width",desc:"You can use any w-* and max-w-* utility class to customize the width",$$slots:{jsx:[Wt],html:[Qt],default:[Kt]},$$scope:{ctx:u}}}),A=new V({props:{title:"Responsive",desc:"Modal goes bottom on mobile screen and goes middle on desktop",$$slots:{jsx:[te],html:[Zt],default:[Xt]},$$scope:{ctx:u}}}),Y=new V({props:{title:"Modal using label + hidden checkbox",$$slots:{html:[le],default:[ee]},$$scope:{ctx:u}}}),q=new V({props:{title:"Modal that closes when clicked outside",desc:"Modal works with a hidden checkbox and labels can toggle the checkbox so we can use another label tag with 'modal-backdrop' class that covers the screen so we can close the modal when clicked outside",$$slots:{html:[se],default:[oe]},$$scope:{ctx:u}}}),G=new V({props:{title:"Modal using anchor link",desc:"Anchor links might not work well on some SPA frameworks so if there are problems, use the first example",$$slots:{html:[ne],default:[ae]},$$scope:{ctx:u}}}),{c(){x(t.$$.fragment),i=$(),x(o.$$.fragment),e=$(),d=p("div"),a=p("div"),l=p("span"),x(n.$$.fragment),ft=$(),W=p("ol"),W.innerHTML=_t,lt=$(),P=p("div"),L=Mt("svg"),D=Mt("path"),$t=$(),X=p("div"),x(F.$$.fragment),ot=$(),B=p("h3"),B.innerHTML=gt,st=$(),x(j.$$.fragment),at=$(),x(S.$$.fragment),nt=$(),x(O.$$.fragment),dt=$(),x(R.$$.fragment),it=$(),x(A.$$.fragment),ct=$(),U=p("h3"),U.innerHTML=vt,mt=$(),x(Y.$$.fragment),rt=$(),x(q.$$.fragment),ut=$(),z=p("h3"),z.innerHTML=xt,ht=$(),x(G.$$.fragment),this.h()},l(s){k(t.$$.fragment,s),i=b(s),k(o.$$.fragment,s),e=b(s),d=f(s,"DIV",{class:!0});var h=g(d);a=f(h,"DIV",{});var K=g(a);l=f(K,"SPAN",{class:!0});var Z=g(l);k(n.$$.fragment,Z),Z.forEach(c),ft=b(K),W=f(K,"OL",{"data-svelte-h":!0}),v(W)!=="svelte-1ii7k10"&&(W.innerHTML=_t),K.forEach(c),h.forEach(c),lt=b(s),P=f(s,"DIV",{class:!0});var Q=g(P);L=Et(Q,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var tt=g(L);D=Et(tt,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),g(D).forEach(c),tt.forEach(c),$t=b(Q),X=f(Q,"DIV",{});var et=g(X);k(F.$$.fragment,et),et.forEach(c),Q.forEach(c),ot=b(s),B=f(s,"H3",{id:!0,"data-svelte-h":!0}),v(B)!=="svelte-pazg3s"&&(B.innerHTML=gt),st=b(s),k(j.$$.fragment,s),at=b(s),k(S.$$.fragment,s),nt=b(s),k(O.$$.fragment,s),dt=b(s),k(R.$$.fragment,s),it=b(s),k(A.$$.fragment,s),ct=b(s),U=f(s,"H3",{id:!0,"data-svelte-h":!0}),v(U)!=="svelte-1x7tqpi"&&(U.innerHTML=vt),mt=b(s),k(Y.$$.fragment,s),rt=b(s),k(q.$$.fragment,s),ut=b(s),z=f(s,"H3",{id:!0,"data-svelte-h":!0}),v(z)!=="svelte-1k6pp77"&&(z.innerHTML=xt),ht=b(s),k(G.$$.fragment,s),this.h()},h(){m(l,"class","font-bold"),m(d,"class","alert text-sm"),m(D,"stroke-linecap","round"),m(D,"stroke-linejoin","round"),m(D,"stroke-width","2"),m(D,"d","M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),m(L,"xmlns","http://www.w3.org/2000/svg"),m(L,"fill","none"),m(L,"viewBox","0 0 24 24"),m(L,"class","stroke-current shrink-0 w-6 h-6"),m(P,"class","alert text-sm mt-4"),m(B,"id","method-1-using-dialog-element-recommended"),m(U,"id","method-2-using-a-hidden-checkbox-legacy"),m(z,"id","method-3-using-anchor-links-legacy")},m(s,h){y(t,s,h),r(s,i,h),y(o,s,h),r(s,e,h),r(s,d,h),_(d,a),_(a,l),y(n,l,null),_(a,ft),_(a,W),r(s,lt,h),r(s,P,h),_(P,L),_(L,D),_(P,$t),_(P,X),y(F,X,null),r(s,ot,h),r(s,B,h),r(s,st,h),y(j,s,h),r(s,at,h),y(S,s,h),r(s,nt,h),y(O,s,h),r(s,dt,h),y(R,s,h),r(s,it,h),y(A,s,h),r(s,ct,h),r(s,U,h),r(s,mt,h),y(Y,s,h),r(s,rt,h),y(q,s,h),r(s,ut,h),r(s,z,h),r(s,ht,h),y(G,s,h),pt=!0},p(s,h){const K={};h&5&&(K.$$scope={dirty:h,ctx:s}),j.$set(K);const Z={};h&5&&(Z.$$scope={dirty:h,ctx:s}),S.$set(Z);const Q={};h&5&&(Q.$$scope={dirty:h,ctx:s}),O.$set(Q);const tt={};h&5&&(tt.$$scope={dirty:h,ctx:s}),R.$set(tt);const et={};h&5&&(et.$$scope={dirty:h,ctx:s}),A.$set(et);const kt={};h&5&&(kt.$$scope={dirty:h,ctx:s}),Y.$set(kt);const yt={};h&5&&(yt.$$scope={dirty:h,ctx:s}),q.$set(yt);const wt={};h&5&&(wt.$$scope={dirty:h,ctx:s}),G.$set(wt)},i(s){pt||(w(t.$$.fragment,s),w(o.$$.fragment,s),w(n.$$.fragment,s),w(F.$$.fragment,s),w(j.$$.fragment,s),w(S.$$.fragment,s),w(O.$$.fragment,s),w(R.$$.fragment,s),w(A.$$.fragment,s),w(Y.$$.fragment,s),w(q.$$.fragment,s),w(G.$$.fragment,s),pt=!0)},o(s){C(t.$$.fragment,s),C(o.$$.fragment,s),C(n.$$.fragment,s),C(F.$$.fragment,s),C(j.$$.fragment,s),C(S.$$.fragment,s),C(O.$$.fragment,s),C(R.$$.fragment,s),C(A.$$.fragment,s),C(Y.$$.fragment,s),C(q.$$.fragment,s),C(G.$$.fragment,s),pt=!1},d(s){s&&(c(i),c(e),c(d),c(lt),c(P),c(ot),c(B),c(st),c(at),c(nt),c(dt),c(it),c(ct),c(U),c(mt),c(rt),c(ut),c(z),c(ht)),M(t,s),M(o,s),M(n),M(F),M(j,s),M(S,s),M(O,s),M(R,s),M(A,s),M(Y,s),M(q,s),M(G,s)}}}function ie(u){let t,i;const o=[u[1],Nt];let e={$$slots:{default:[de]},$$scope:{ctx:u}};for(let d=0;d<o.length;d+=1)e=bt(e,o[d]);return t=new jt({props:e}),{c(){x(t.$$.fragment)},l(d){k(t.$$.fragment,d)},m(d,a){y(t,d,a),i=!0},p(d,[a]){const l=a&2?Bt(o,[a&2&&Tt(d[1]),a&0&&Tt(Nt)]):{};a&5&&(l.$$scope={dirty:a,ctx:d}),t.$set(l)},i(d){i||(w(t.$$.fragment,d),i=!0)},o(d){C(t.$$.fragment,d),i=!1},d(d){M(t,d)}}}const Nt={title:"Modal",desc:"Modal is used to show a dialog or a box when you click a button.",published:!0,layout:"components"};function ce(u,t,i){let o;return Pt(u,St,e=>i(0,o=e)),u.$$set=e=>{i(1,t=bt(bt({},t),Ct(e)))},t=Ct(t),[o,t]}class _e extends Lt{constructor(t){super(),Dt(this,t,ce,ie,It,{})}}export{_e as component};
