/** Optional audit tooling stays outside the Node 20 deployment dependency tree. */
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";

const [major, minor] = process.versions.node.split(".").map(Number);
if (major < 22 || (major === 22 && minor < 19)) {
  throw new Error(
    "Optional Lighthouse audit requires Node 22.19+. The site build supports Node 20.19+.",
  );
}
mkdirSync("tmp/review", { recursive: true });
execFileSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  [
    "--yes",
    "lighthouse@13.5.0",
    "http://localhost:4175",
    "--chrome-flags=--headless --no-sandbox",
    "--only-categories=performance,accessibility,best-practices,seo",
    "--output=json",
    "--output-path=tmp/review/lighthouse.json",
    "--quiet",
  ],
  { stdio: "inherit" },
);
const report = JSON.parse(readFileSync("tmp/review/lighthouse.json", "utf8"));
console.log(
  Object.fromEntries(
    Object.entries(report.categories).map(([name, category]) => [
      name,
      category.score * 100,
    ]),
  ),
);
