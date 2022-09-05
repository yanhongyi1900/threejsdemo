import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        /**如果引入多个文件，可以使用
       * '@import "@/assets/scss/globalVariable1.scss";
       * @import"@/assets/scss/globalVariable2.scss";'
      **/
        // additionalData: '@import "@/style/globalVar.scss";',
      }
    }
  },
});
