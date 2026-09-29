import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";
mkdirSync("tmp/review", { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
for (const [name, width] of [
  ["desktop", 1440],
  ["mobile", 390],
]) {
  const page = await browser.newPage({
    viewport: { width, height: 1000 },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  await page.goto("http://localhost:4175", { waitUntil: "networkidle" });
  await page.screenshot({ path: `tmp/review/${name}.png`, fullPage: true });
  await page.close();
}
await browser.close();
