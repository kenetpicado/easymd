import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "easymd",
      fileName: (format) => `easymd.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      external: ["vue"],
      output: {
        // Ensure named exports to avoid mixed default/named export warning
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
