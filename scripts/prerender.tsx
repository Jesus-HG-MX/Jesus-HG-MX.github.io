import React from "react";
import { renderToString } from "react-dom/server";
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import App from "../src/App";
import { profile } from "../src/data/profile";
import { siteConfig } from "../src/config/site";
const site = new URL(siteConfig.siteUrl);
if (!["http:", "https:"].includes(site.protocol))
  throw new Error("SITE_URL must be an HTTP(S) URL");
const url = site.origin + "/";
const json = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url,
  email: profile.email,
  telephone: "+522212690680",
  sameAs: [profile.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Puebla",
    addressCountry: "MX",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad de los Ángeles",
  },
  knowsAbout: [
    "Automotive Manufacturing",
    "Lean Manufacturing",
    "Production Operations",
    "Continuous Improvement",
    "SAP",
    "OEE",
    "People Leadership",
    "Quality",
    "Industrial Safety",
  ],
}).replace(/</g, "\\u003c");
const fonts = readdirSync("dist/assets")
  .filter((f) =>
    /^(manrope-latin-(400|800)|inter-latin-400)-normal-.*\.woff2$/.test(f),
  )
  .map(
    (f) =>
      `<link rel="preload" as="font" type="font/woff2" crossorigin href="/assets/${f}"/>`,
  )
  .join("");
const meta =
  fonts +
  `<link rel="canonical" href="${url}"/><meta property="og:url" content="${url}"/><meta property="og:image" content="${url}images/social-card.png"/><meta name="twitter:title" content="${profile.name} | ${profile.title}"/><meta name="twitter:description" content="${siteConfig.description}"/><meta name="twitter:image" content="${url}images/social-card.png"/><meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/><meta property="og:image:alt" content="Jesús Gabriel Hernández Gutiérrez — Senior Production Supervisor"/><script type="application/ld+json">${json}</script>`;
let html = readFileSync("dist/index.html", "utf8");
html = html
  .replace("<!--app-html-->", renderToString(<App />))
  .replace("<!--deployment-meta-->", meta);
writeFileSync("dist/index.html", html);
writeFileSync(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${url}sitemap.xml\n`,
);
writeFileSync(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${url}</loc></url></urlset>`,
);

console.log(
  "Prerendered portfolio, Person schema, robots.txt and sitemap.xml.",
);
