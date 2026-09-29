import { chromium } from "@playwright/test";
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { copy, profile } from "../src/data/profile";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({
  viewport: { width: 794, height: 1123 },
  deviceScaleFactor: 1.5,
});
mkdirSync("tmp/pdfs", { recursive: true });
const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${profile.name} | ${profile.title}</title><style>
@page{size:A4;margin:0}*{box-sizing:border-box}body{margin:0;color:#183544;font-family:Arial,sans-serif;background:white}.page{width:794px;min-height:1123px;padding:38px 42px 65px;position:relative;border-top:7px solid #d97721}header{border-bottom:1px solid #d3dade;padding-bottom:19px;margin-bottom:22px}h1{font-size:27px;letter-spacing:-.7px;line-height:1.2;margin:9px 0}header .label{color:#986021;font-size:10px;letter-spacing:1.4px;font-weight:bold}header .title{font-size:14px;color:#516a78;margin:10px 0 12px}header .contact{font-size:10px;line-height:1.7}a{color:inherit;text-decoration:none}h2{font-size:11px;letter-spacing:1px;color:#986021;margin:0 0 12px}h2:not(:first-child){margin-top:16px}p{font-size:11.5px;line-height:1.6;margin:7px 0}.row{display:flex;justify-content:space-between;align-items:baseline;gap:15px}h3{font-size:13px;margin:0;line-height:1.5}.date{font-size:10px;color:#516674;white-space:nowrap}.role{font-size:11.5px;font-weight:bold;margin:4px 0 9px}article{margin-bottom:20px}ul{margin:4px 0;padding-left:15px;font-size:11.5px;line-height:1.6}li{margin-bottom:3px}.columns{display:grid;grid-template-columns:235px 1fr;gap:30px}.skills p{font-size:10.5px;margin-bottom:13px}.skills strong{font-size:11px}.education p{font-size:11px}footer{position:absolute;bottom:27px;left:42px;right:42px;border-top:1px solid #d3dade;padding-top:12px;font-size:8px;color:#586973;display:flex;justify-content:space-between}.status{color:#986021}.experience{border-left:1px solid #d3dade;padding-left:25px}
</style></head><body><div class="page"><header><div class="label">${profile.title.toUpperCase()}</div><h1>JESÚS GABRIEL<br>HERNÁNDEZ GUTIÉRREZ</h1><div class="title">${profile.subtitle}</div><div class="contact">${profile.location} &nbsp; | &nbsp; ${profile.phone} &nbsp; | &nbsp; <a href="mailto:${profile.email}">${profile.email}</a><br><a href="${profile.linkedin}">${profile.linkedin}</a></div></header><div class="columns"><aside><h2>PERFIL PROFESIONAL</h2><p>${copy.about}</p><p>${copy.focus}</p><h2>COMPETENCIAS CLAVE</h2><div class="skills">${copy.skills.map((s) => `<p><strong>${s.title}</strong><br>${s.items.join(" · ")}</p>`).join("")}</div><h2>EDUCACIÓN</h2><div class="education"><h3>${copy.education.degree}</h3><p>${copy.education.school}<br>${copy.education.credential}</p></div><h2>CERTIFICACIONES</h2><ul>${copy.certifications.map((c, i) => `<li>${c}${i === 0 ? '<br><strong class="status">En curso</strong>' : ""}</li>`).join("")}</ul><h2>PRODUCCIÓN</h2><p><strong>&gt;90%</strong> Cumplimiento del plan de producción</p></aside><section class="experience"><h2>EXPERIENCIA PROFESIONAL</h2>${copy.experience.map((e) => `<article><div class="row"><h3>${e.company}</h3><span class="date">${e.date}</span></div><div class="role">${e.role}</div><ul>${e.description.map((d) => `<li>${d}</li>`).join("")}</ul></article>`).join("")}</section></div><footer><span>${copy.areas}</span><span>1 / 1</span></footer></div></body></html>`;
writeFileSync("tmp/pdfs/cv.html", html);
await page.setContent(html, { waitUntil: "load" });
const bounds = await page.evaluate(() => ({
  height: document.querySelector(".page")!.getBoundingClientRect().height,
  contentBottom: document.querySelector(".columns")!.getBoundingClientRect()
    .bottom,
}));
if (bounds.height > 1123 || bounds.contentBottom > 1055)
  throw new Error(`El CV excede una página: ${JSON.stringify(bounds)}`);
await page.pdf({
  path: "public/cv/Jesus_Gabriel_Hernandez_Gutierrez_CV.pdf",
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
});
await page.screenshot({ path: "tmp/pdfs/cv-preview.png", fullPage: true });
await page.setViewportSize({ width: 1200, height: 630 });
const bg = readFileSync("public/images/automotive-plant.webp").toString(
  "base64",
);
await page.setContent(
  `<html lang="es"><body style="margin:0;background:#071d2b;color:#fff;font-family:Arial,sans-serif"><div style="position:absolute;inset:0;background:linear-gradient(90deg,#071d2b 5%,#071d2bed 40%,#071d2b30),url(data:image/webp;base64,${bg}) center/cover"></div><main style="position:relative;padding:82px 76px"><p style="font-size:14px;letter-spacing:3px;color:#e58a2b">${profile.title.toUpperCase()}</p><h1 style="font-size:60px;line-height:1.1;letter-spacing:-2px;margin:32px 0">JESÚS GABRIEL<br><span style="font-weight:400">HERNÁNDEZ GUTIÉRREZ</span></h1><p style="font-size:22px;color:#d7e1e5">${profile.subtitle}</p><div style="height:2px;width:64px;background:#d97721;margin:35px 0"></div><p style="font-size:16px;color:#b3c6d0">Más de 14 años en manufactura &nbsp; · &nbsp; ${profile.location}</p></main></body></html>`,
);
await page.screenshot({ path: "public/images/social-card.png", scale: "css" });
await browser.close();
console.log("CV e imagen para redes actualizados al español.");
