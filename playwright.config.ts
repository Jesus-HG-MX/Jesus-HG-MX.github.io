import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  use: { baseURL: "http://localhost:4175", channel: "chrome", headless: true },
  webServer: {
    command: "npm run preview -- --port 4175 --strictPort",
    url: "http://localhost:4175",
    reuseExistingServer: true,
  },
  reporter: "list",
});
