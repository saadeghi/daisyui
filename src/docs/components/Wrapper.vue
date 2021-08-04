<template>
  <div class="py-2">
    <div class="pt-4 text-xs opacity-60">
      {{ title }}
    </div>
    <div class="mt-2 text-xs tabs" v-if="!nocode">
      <div class="tab tab-lifted" v-bind:class="{ 'tab-active': !showcode }" v-on:click="showcode = false">Preview</div>
      <div class="tab tab-lifted" v-bind:class="{ 'tab-active': showcode }" v-on:click="showcode = true">HTML</div>
      <div class="flex-1 cursor-default tab tab-lifted"></div>
    </div>
    <div>
      <collapse-transition>
      <div v-if="!nocode && showcode" class="pt-2">
        <pre v-highlightjs="sourcecode"><code class="h-64 p-4 font-mono text-xs rounded-box html"></code></pre>
      </div>
      </collapse-transition>
      <collapse-transition>
        <div class="pt-2" v-if="!showcode">
          <div :class="classes" ref="component">
            <slot></slot>
          </div>
        </div>
      </collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    classes: String,
    nocode: Boolean,
  },
  data: function() {
    return {
      sourcecode: "",
      showcode: false,
    };
  },
  methods: {
    setSrc: function() {
      function process(str) {
        var div = document.createElement("div");
        div.innerHTML = str.trim().replaceAll("<!--", "").replaceAll("-->", "") + "\n";
        return format(div, 0).innerHTML;
      }
      function format(node, level) {
        var indentBefore = new Array(level++ + 1).join("  "),
          indentAfter = new Array(level - 1).join("  "),
          textNode;
        for (var i = 0; i < node.children.length; i++) {
          textNode = document.createTextNode("\n" + indentBefore);
          node.insertBefore(textNode, node.children[i]);
          format(node.children[i], level);
          if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode("\n" + indentAfter);
            node.appendChild(textNode);
          }
        }
        return node;
      }
      if(this.$refs.component !== undefined){
        this.sourcecode = process(this.$refs.component.innerHTML)
      }
    }
  },
  mounted:function(){
    this.setSrc()
  },
};
</script>

