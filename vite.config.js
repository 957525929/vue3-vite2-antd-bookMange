import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

//引入mock
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default ({ command }) => {
  return {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    plugins: [
      vue(),
      viteMockServe({
        // default
        mockPath: "mock",
        localEnabled: command === "serve",
      }),
    ],
    server: {
      //运行自动打开
      open: true,
    },
  };
};
