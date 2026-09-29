import { chromium } from "@playwright/test";
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { copy, profile } from "../src/data/profile";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({
  viewport: { width: 794, height: 1123 },
  deviceScaleFactor: 1.5,
});
mkdirSync("tmp/pdfs", { recursive: true });
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><style>
@page{size:A4;margin:0}*{box-sizing:border-box}body{margin:0;color:#183544;font-family:Arial,sans-serif;background:white}.page{width:794px;height:1123px;padding:44px 49px;position:relative;border-top:8px solid #d97721}header{border-bottom:1px solid #d3dade;padding-bottom:21px}h1{font-size:27px;letter-spacing:-.7px;line-height:1.2;margin:9px 0}header .label{color:#986021;font-size:9px;letter-spacing:2px;font-weight:bold}header .title{font-size:14px;color:#516a78;margin:10px 0 15px}header .contact{font-size:10px;line-height:1.8}a{color:inherit;text-decoration:none}h2{font-size:11px;letter-spacing:1.7px;color:#986021;margin:23px 0 10px}p{font-size:11px;line-height:1.65;margin:6px 0}.row{display:flex;justify-content:space-between;align-items:baseline;gap:15px}h3{font-size:13px;margin:0}.date{font-size:10px;color:#617481;white-space:nowrap}.role{font-size:11px;font-weight:bold;margin:4px 0 5px}article{margin-bottom:16px}article p{margin:3px 0;font-size:10.5px}ul{margin:4px 0;padding-left:15px;font-size:10.5px;line-height:1.7}.columns{display:grid;grid-template-columns:1fr 1fr;gap:34px}.skills p{font-size:10px}.skills strong{font-size:10.5px}.education p{font-size:10.5px}footer{position:absolute;bottom:27px;left:49px;right:49px;border-top:1px solid #d3dade;padding-top:12px;font-size:8px;color:#74858d;display:flex;justify-content:space-between}
</style></head><body><div class="page"><header><div class="label">SENIOR PRODUCTION SUPERVISOR</div><h1>JESÚS GABRIEL<br>HERNÁNDEZ GUTIÉRREZ</h1><div class="title">${profile.subtitle}</div><div class="contact">${profile.location} &nbsp; | &nbsp; ${profile.phone} &nbsp; | &nbsp; <a href="mailto:${profile.email}">${profile.email}</a><br><a href="${profile.linkedin}">linkedin.com/in/gabriel8925</a></div></header><h2>PROFESSIONAL PROFILE</h2><p>${copy.intro}</p><h2>PROFESSIONAL EXPERIENCE</h2>${copy.experience.map((e) => `<article><div class="row"><h3>${e.company}</h3><span class="date">${e.date}</span></div><div class="role">${e.role}</div><ul>${e.description.map((d) => `<li>${d}</li>`).join("")}</ul></article>`).join("")}<div class="columns"><div class="skills"><h2>CORE COMPETENCIES</h2>${copy.skills.map((s) => `<p><strong>${s.title}</strong><br>${s.items.join(" · ")}</p>`).join("")}</div><div class="education"><h2>EDUCATION</h2><h3>${copy.education.degree}</h3><p>${copy.education.school}<br>${copy.education.credential}</p><h2>CERTIFICATIONS</h2><ul>${copy.certifications.map((c, i) => `<li>${c}${i === 0 ? " — In Progress" : ""}</li>`).join("")}</ul><h2>PRODUCTION PERFORMANCE</h2><p><strong>&gt;90%</strong> Production plan achievement</p></div></div><footer><span>Manufacturing · Production · Continuous Improvement · Operational Leadership</span><span>1 / 1</span></footer></div></body></html>`;
writeFileSync("tmp/pdfs/cv.html", html);
await page.setContent(html, { waitUntil: "load" });
await page.pdf({
  path: "public/cv/Jesus_Gabriel_Hernandez_Gutierrez_CV.pdf",
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
});
await page.screenshot({ path: "tmp/pdfs/cv-preview.png", fullPage: true });
// A PNG social preview is supported by all major sharing platforms.
await page.setViewportSize({ width: 1200, height: 630 });
const bg = readFileSync("public/images/automotive-plant.webp").toString(
  "base64",
);
await page.setContent(
  `<html><body style="margin:0;background:#071d2b;color:#fff;font-family:Arial,sans-serif"><div style="position:absolute;inset:0;background:linear-gradient(90deg,#071d2b 5%,#071d2bed 40%,#071d2b30),url(data:image/webp;base64,${bg}) center/cover"></div><main style="position:relative;padding:82px 76px"><p style="font-size:14px;letter-spacing:3px;color:#e58a2b">SENIOR PRODUCTION SUPERVISOR</p><h1 style="font-size:60px;line-height:1.1;letter-spacing:-2px;margin:32px 0">JESÚS GABRIEL<br><span style="font-weight:400">HERNÁNDEZ GUTIÉRREZ</span></h1><p style="font-size:22px;color:#d7e1e5">Manufacturing Leader | Industrial Engineer</p><div style="height:2px;width:64px;background:#d97721;margin:35px 0"></div><p style="font-size:16px;color:#b3c6d0">14+ years in manufacturing &nbsp; · &nbsp; Puebla, México</p></main></body></html>`,
);
await page.screenshot({ path: "public/images/social-card.png" });
await browser.close();
console.log("Created one-page CV, review PNG, and social sharing image.");
