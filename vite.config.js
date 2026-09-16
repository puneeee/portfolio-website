import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this project from /portfolio-website/, not the domain root.
export default defineConfig({
  base: "/portfolio-website/",
  plugins: [react()],
});
