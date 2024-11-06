// vite.config.js
import path from "node:path";
import { defineConfig } from "file:///Users/pouya/Sites/daisyui/src/docs/node_modules/vite/dist/node/index.js";
import { sveltekit } from "file:///Users/pouya/Sites/daisyui/src/docs/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import tailwindcss from "file:///Users/pouya/Sites/daisyui/src/docs/node_modules/@tailwindcss/vite/dist/index.mjs";
import { visualizer } from "file:///Users/pouya/Sites/daisyui/src/docs/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var vite_config_default = defineConfig({
  plugins: [
    sveltekit(),
    tailwindcss(),
    visualizer({
      emitFile: true,
      filename: "stats.html",
      template: "treemap",
      brotliSize: true
    })
  ],
  resolve: {
    alias: {
      $components: path.resolve("/src/components")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcG91eWEvU2l0ZXMvZGFpc3l1aS9zcmMvZG9jc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3BvdXlhL1NpdGVzL2RhaXN5dWkvc3JjL2RvY3Mvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3BvdXlhL1NpdGVzL2RhaXN5dWkvc3JjL2RvY3Mvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCJcbmltcG9ydCB7IHN2ZWx0ZWtpdCB9IGZyb20gXCJAc3ZlbHRlanMva2l0L3ZpdGVcIlxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJAdGFpbHdpbmRjc3Mvdml0ZVwiXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBzdmVsdGVraXQoKSxcbiAgICB0YWlsd2luZGNzcygpLFxuICAgIHZpc3VhbGl6ZXIoe1xuICAgICAgZW1pdEZpbGU6IHRydWUsXG4gICAgICBmaWxlbmFtZTogXCJzdGF0cy5odG1sXCIsXG4gICAgICB0ZW1wbGF0ZTogXCJ0cmVlbWFwXCIsXG4gICAgICBicm90bGlTaXplOiB0cnVlLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICRjb21wb25lbnRzOiBwYXRoLnJlc29sdmUoXCIvc3JjL2NvbXBvbmVudHNcIiksXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJSLE9BQU8sVUFBVTtBQUM1UyxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGlCQUFpQjtBQUMxQixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLGtCQUFrQjtBQUUzQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsSUFDZCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsYUFBYSxLQUFLLFFBQVEsaUJBQWlCO0FBQUEsSUFDN0M7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
