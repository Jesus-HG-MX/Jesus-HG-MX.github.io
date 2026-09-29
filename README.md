# Jesús Gabriel Hernández Gutiérrez

A professional portfolio for a Senior Production Supervisor and Industrial Engineer with 14+ years in automotive manufacturing. The design pairs deep navy, warm off-white, restrained orange accents, automotive imagery, Manrope headings and Inter body text.

**Production URL:** https://jesus-hg-mx.github.io/

**Existing repository:** `Jesus-HG-MX/Jesus-HG-MX.github.io`

## Tech stack

React, TypeScript, Vite and plain CSS. A single page with native anchor navigation; no router, Next.js, UI framework or animation dependency. Content is prerendered during the build so search engines and visitors without JavaScript can read the profile. Fonts and optimized AVIF images are served locally.

## Local development

Use Node.js **20.19 or newer**. `.nvmrc` selects Node 20, matching deployment.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

```sh
npm run build
npm run preview
```

The build checks TypeScript, compiles the app, prerenders HTML and generates `robots.txt`, `sitemap.xml`, canonical tags, social metadata and Person JSON-LD. The static output is `dist/`. The extra prerender step is intentional; no server is needed in production.

## GitHub Pages deployment

1. Add these project files to the existing `Jesus-HG-MX.github.io` repository, preserving its Git history. Include `.github/workflows/deploy.yml`, `package-lock.json` and `public/`. Exclude `node_modules/`, `dist/`, `tmp/` and test artifacts.
2. In the repository, open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Commit and push to **main**. `.github/workflows/deploy.yml` installs with `npm ci`, builds with Node 20, uploads `dist/` and deploys through official GitHub Pages actions.
4. Watch **Actions → Deploy portfolio to GitHub Pages**. The `github-pages` environment exposes the deployed URL. Manual execution is also available via **Run workflow**.
5. Visit https://jesus-hg-mx.github.io/ and verify the CV download and section anchors.

This is a **User Site**, so Vite uses `base: '/'`. Do not change it to `/Jesus-HG-MX.github.io/`. No `gh-pages` branch, SPA 404 workaround, domain environment variable or custom secret is required. Repository policy may require approving the `github-pages` deployment environment.

The current supplied working folder has no `.git` metadata. Implementation therefore does not imply a commit, push or live deployment; incorporate the files into the existing checkout before the steps above. Do not initialize an unrelated replacement repository or force push.

Official workflow reference: [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Edit professional information

- `src/config/site.ts`: name, role, subtitle, production URL, contact details and CV path.
- `src/data/profile.ts`: English copy, experience, skills, career highlights, education and certifications.
- `src/styles/global.css`: colors, spacing, typography, interactions and responsive layouts.

The locale dictionary is ready for a future Spanish translation. English is active; ES remains disabled and labeled as coming soon. No translation service is required.

Do not associate the supplied `>90%` production plan achievement with an employer or time period unless confirmed. Yellow Belt must remain **In Progress** until completion is confirmed.

## Replace the CV

Replace this file while preserving its name:

```text
public/cv/Jesus_Gabriel_Hernandez_Gutierrez_CV.pdf
```

All Download CV buttons use the shared root-relative path and `download` attribute. Rebuild and push to deploy the new file. The existing English PDF was created from the supplied professional information, not from an uploaded original resume.

Optional PDF/social asset regeneration: `node --import tsx scripts/create-assets.tsx` (requires Google Chrome). This is not part of the deployment build: committed assets are ready to serve.

## Replace images

Active files are in `public/images/`:

- `automotive-plant.avif`: 1800 × 1200 desktop hero.
- `automotive-plant-mobile.avif`: 800 × 900 mobile hero.
- `production-line.avif`: 1000 × 750 profile image.
- `social-card.png`: 1200 × 630 social sharing image.

Keep filenames/dimensions or update the corresponding `src`, `srcSet`, preload, width, height and alt text. WebP versions remain as source assets for the optional social-card generator. Use authorized images and never substitute an invented headshot for Gabriel.

Photography: **Lenny Kuhne**, [Unsplash source](https://unsplash.com/photos/gray-vehicle-being-fixed-inside-factory-using-robot-machines-jHZ70nRk7Ns), under the [Unsplash License](https://unsplash.com/license). The image is illustrative and does not claim to show Gabriel or an employer. Company names are typeset without fabricated logos. Inter and Manrope are distributed by Fontsource under their bundled open font licenses.

## Project structure

```text
.github/workflows/deploy.yml
src/
  components/       # Header, Hero, Metrics, Profile, Experience, Skills,
                    # Highlights, Education, Certifications, Contact, Footer
  config/site.ts    # Identity and production URL
  data/profile.ts   # Reusable English content
  styles/global.css
  App.tsx
  main.tsx
public/
  cv/
  images/
  favicon.svg
scripts/            # Prerender, optional asset generation, audits
 tests/             # Browser-level functional verification
```

## Quality checks

```sh
npm run check
npm run build
npm run test:site
```

Browser tests use Google Chrome. They cover 360, 390, 430, 768, 1024, 1200 and 1440px widths; horizontal overflow; mobile menu; anchor navigation; keyboard focus; console errors/warnings; images; PDF download; contact URLs; favicon; production metadata; sitemap; reduced motion; and content without JavaScript.

Optional audits (Google Chrome required) against `npm run preview -- --port 4175`:

```sh
node scripts/audit.mjs
node scripts/lighthouse.mjs
```

The optional Lighthouse command uses Node 22.19+ and downloads its pinned audit tool on demand. It is intentionally excluded from the Node 20 deployment dependency tree.

See `docs/verification.md` for the most recent results and deployment limitations.
