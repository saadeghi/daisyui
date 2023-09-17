import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Chat bubble",
  "desc": "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.",
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
              class: "chat",
              desc: "Container for one line of conversation and all its data"
            },
            {
              type: "modifier",
              class: "chat-start",
              desc: "Aligns `chat` to left (required)"
            },
            {
              type: "modifier",
              class: "chat-end",
              desc: "Aligns `chat` to end (required)"
            },
            {
              type: "component",
              class: "chat-image",
              desc: "For the author image"
            },
            {
              type: "component",
              class: "chat-header",
              desc: "For the line above the chat bubble"
            },
            {
              type: "component",
              class: "chat-footer",
              desc: "For the line below the chat bubble"
            },
            {
              type: "component",
              class: "chat-bubble",
              desc: "For the content of chat"
            },
            {
              type: "modifier",
              class: "chat-bubble-primary",
              desc: "sets `primary` color for the `chat-bubble`"
            },
            {
              type: "modifier",
              class: "chat-bubble-secondary",
              desc: "sets `secondary` color for the `chat-bubble`"
            },
            {
              type: "modifier",
              class: "chat-bubble-accent",
              desc: "sets `accent` color for the `chat-bubble`"
            },
            {
              type: "modifier",
              class: "chat-bubble-info",
              desc: "sets `info` color for the `chat-bubble`"
            },
            {
              type: "modifier",
              class: "chat-bubble-success",
              desc: "sets `success` color for the `chat-bubble`"
            },
            {
              type: "modifier",
              class: "chat-bubble-warning",
              desc: "sets `warning` color for the `chat-bubble`"
            },
            {
              type: "modifier",
              class: "chat-bubble-error",
              desc: "sets `error` color for the `chat-bubble`"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "chat-start and chat-end" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$chat $$chat-start">
  <div class="$$chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
</div>
<div class="$$chat $$chat-end">
  <div class="$$chat-bubble">You underestimate my power!</div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="w-full" data-svelte-h="svelte-xa4d6j"><div class="chat chat-start"><div class="chat-bubble">It&#39;s over Anakin, <br>I have the high ground.</div></div> <div class="chat chat-end"><div class="chat-bubble">You underestimate my power!</div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Chat with image" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$chat $$chat-start">
  <div class="$$chat-image $$avatar">
    <div class="w-10 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
</div>
<div class="$$chat $$chat-start">
  <div class="$$chat-image $$avatar">
    <div class="w-10 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$chat-bubble">It was you who would bring balance to the Force</div>
</div>
<div class="$$chat $$chat-start">
  <div class="$$chat-image $$avatar">
    <div class="w-10 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$chat-bubble">Not leave it in Darkness</div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="w-full" data-svelte-h="svelte-1o4yj7t"><div class="chat chat-start"><div class="chat-image avatar"><div class="w-10 rounded-full"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg"></div></div> <div class="chat-bubble">It was said that you would, destroy the Sith, not join them.</div></div> <div class="chat chat-start"><div class="chat-image avatar"><div class="w-10 rounded-full"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg"></div></div> <div class="chat-bubble">It was you who would bring balance to the Force</div></div> <div class="chat chat-start"><div class="chat-image avatar"><div class="w-10 rounded-full"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg"></div></div> <div class="chat-bubble">Not leave it in Darkness</div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Chat with image, header and footer"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$chat $$chat-start">
  <div class="$$chat-image avatar">
    <div class="w-10 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$chat-header">
    Obi-Wan Kenobi
    <time class="text-xs opacity-50">12:45</time>
  </div>
  <div class="$$chat-bubble">You were the Chosen One!</div>
  <div class="$$chat-footer opacity-50">
    Delivered
  </div>
</div>
<div class="$$chat $$chat-end">
  <div class="$$chat-image avatar">
    <div class="w-10 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$chat-header">
    Anakin
    <time class="text-xs opacity-50">12:46</time>
  </div>
  <div class="$$chat-bubble">I hate you!</div>
  <div class="$$chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="w-full" data-svelte-h="svelte-7c3nnv"><div class="chat chat-start"><div class="chat-image avatar"><div class="w-10 rounded-full"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg"></div></div> <div class="chat-header">Obi-Wan Kenobi
      <time class="text-xs opacity-50">12:45</time></div> <div class="chat-bubble">You were the Chosen One!</div> <div class="chat-footer opacity-50">Delivered</div></div> <div class="chat chat-end"><div class="chat-image avatar"><div class="w-10 rounded-full"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg"></div></div> <div class="chat-header">Anakin
      <time class="text-xs opacity-50">12:46</time></div> <div class="chat-bubble">I hate you!</div> <div class="chat-footer opacity-50">Seen at 12:46</div></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Chat with header and footer" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$chat $$chat-start">
  <div class="$$chat-header">
    Obi-Wan Kenobi
    <time class="text-xs opacity-50">2 hours ago</time>
  </div>
  <div class="$$chat-bubble">You were the Chosen One!</div>
  <div class="$$chat-footer opacity-50">
    Seen
  </div>
</div>
<div class="$$chat $$chat-start">
  <div class="$$chat-header">
    Obi-Wan Kenobi
    <time class="text-xs opacity-50">2 hour ago</time>
  </div>
  <div class="$$chat-bubble">I loved you.</div>
  <div class="$$chat-footer opacity-50">
    Delivered
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="w-full" data-svelte-h="svelte-1eihov2"><div class="chat chat-start"><div class="chat-header">Obi-Wan Kenobi
      <time class="text-xs opacity-50">2 hours ago</time></div> <div class="chat-bubble">You were my brother, Anakin.</div> <div class="chat-footer opacity-50">Seen</div></div> <div class="chat chat-start"><div class="chat-header">Obi-Wan Kenobi
      <time class="text-xs opacity-50">2 hour ago</time></div> <div class="chat-bubble">I loved you.</div> <div class="chat-footer opacity-50">Delivered</div></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Chat Bubble with colors" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div class="$$chat $$chat-start">
  <div class="$$chat-bubble $$chat-bubble-primary">What kind of nonsense is this</div>
</div>
<div class="$$chat $$chat-start">
  <div class="$$chat-bubble $$chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
</div>
<div class="$$chat $$chat-start">
  <div class="$$chat-bubble $$chat-bubble-accent">That's never been done in the history of the Jedi. It's insulting!</div>
</div>
<div class="$$chat $$chat-end">
  <div class="$$chat-bubble $$chat-bubble-info">Calm down, Anakin.</div>
</div>
<div class="$$chat $$chat-end">
  <div class="$$chat-bubble $$chat-bubble-success">You have been given a great honor.</div>
</div>
<div class="$$chat $$chat-end">
  <div class="$$chat-bubble $$chat-bubble-warning">To be on the Council at your age.</div>
</div>
<div class="$$chat $$chat-end">
  <div class="$$chat-bubble $$chat-bubble-error">It's never happened before.</div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div class="w-full" data-svelte-h="svelte-6tnx1"><div class="chat chat-start"><div class="chat-bubble chat-bubble-primary">What kind of nonsense is this</div></div> <div class="chat chat-start"><div class="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div></div> <div class="chat chat-start"><div class="chat-bubble chat-bubble-accent">That&#39;s never been done in the history of the Jedi. It&#39;s insulting!</div></div> <div class="chat chat-end"><div class="chat-bubble chat-bubble-info">Calm down, Anakin.</div></div> <div class="chat chat-end"><div class="chat-bubble chat-bubble-success">You have been given a great honor.</div></div> <div class="chat chat-end"><div class="chat-bubble chat-bubble-warning">To be on the Council at your age.</div></div> <div class="chat chat-end"><div class="chat-bubble chat-bubble-error">It&#39;s never happened before.</div></div></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
