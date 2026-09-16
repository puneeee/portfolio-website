import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// GitHub Pages serves this project from /portfolio-website/, not the domain root.
export default defineConfig({
  base: "/portfolio-website/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: { index: resolve(import.meta.dirname, "app.html") },
    },
  },
});
