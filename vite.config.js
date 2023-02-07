import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src", "index.js"),
      name: "DatepickerVue",
      fileName: "datepicker-vue",
    },
    rollupOptions: {
      external: ["vue", "date-fns", "vue3-popper", "tailwindcss"],
      output: {
        globals: {
          vue: "Vue",
          "date-fns": "date-fn",
          "vue3-popper": "vue3-popper",
          "@vueuse/core": "@vueuse/core",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
});
