import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // User site Jesus-HG-MX.github.io is published at /, not a repository subpath.
  base: "/",
});
