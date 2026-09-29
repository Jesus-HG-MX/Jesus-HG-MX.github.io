# Verification — 2026-09-29

## Build and runtime

- `npm install` completed; the lockfile is included.
- `npm run build` completed successfully, including TypeScript and static prerendering.
- The production build also passed with Node **20.20.2**, matching the workflow's Node 20 configuration.
- Vite production preview serves the root page and all public assets.
- Vite explicitly uses `base: '/'`.

## Functional and visual checks

**8 Playwright tests passed**, covering 360, 390, 430, 768, 1024, 1200 and 1440px widths. Checked horizontal overflow, one h1, anchor navigation, mobile menu, Escape focus, actual CV download, loaded images and browser errors/warnings. Desktop and 390px screenshots were reviewed. Highlights and skills use one column on mobile.

Additional checks passed: email and telephone targets, supplied LinkedIn destination, favicon, canonical and Open Graph production URLs, sitemap, robots.txt, social image, Person JSON-LD, reduced motion, and prerendered content without JavaScript.

**Axe WCAG 2/2.1 A/AA: zero detected violations** at 390 and 1440px. Automated checks do not replace a complete assistive-technology review.

## Lighthouse 13.5 mobile — local production build

| Category       | Score |
| -------------- | ----- |
| Performance    | 97    |
| Accessibility  | 100   |
| Best practices | 100   |
| SEO            | 100   |

Observed FCP: 1.5 s; LCP: 2.5 s. Scores are local lab measurements, not production field Core Web Vitals, and depend on hosting, device and network.

## GitHub Pages

The official-actions workflow builds on pushes to `main` and manual dispatch, then deploys `dist/` to the `github-pages` environment. Node 20, npm cache, minimum requested permissions and deployment concurrency are configured. Canonical, Open Graph, Twitter metadata, structured data, robots and sitemap use `https://jesus-hg-mx.github.io/`.

The current working directory has no `.git` metadata or configured remote. No repository was initialized, history modified, commit created, push performed or Pages setting changed. Integrate these files into the existing repository and select **Settings → Pages → Source → GitHub Actions**.

The production CV URL returned **HTTP 404** during this session. The local production artifact downloads correctly; live verification remains pending the first deployment. External LinkedIn availability and authentication are outside this site's control.
