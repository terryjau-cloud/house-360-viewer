import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  publicDir: "public",
  base: "/house-360-viewer/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    cssMinify: true,
    minify: "esbuild",
    sourcemap: false,
    rollupOptions: {
      input: "src/index.html"
    }
  },
  esbuild: {
    drop: ["console", "debugger"],
    legalComments: "none"
  }
});
