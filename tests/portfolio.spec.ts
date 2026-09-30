import { test, expect } from "@playwright/test";
for (const width of [360, 390, 430, 768, 1024, 1200, 1440]) {
  test(`layout, navigation and download at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => {
      if (m.type() === "error" || m.type() === "warning") errors.push(m.text());
    });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.getByRole("heading", { name: "Klumex" })).toBeVisible();
    await expect(
      page.getByText("2026 – Actualidad", { exact: true }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBeTruthy();
    for (const id of [
      "home",
      "profile",
      "experience",
      "skills",
      "highlights",
      "education",
      "contact",
    ]) {
      if (width <= 900)
        await page.getByRole("button", { name: "Abrir menú" }).click();
      await page
        .locator("#main-navigation")
        .locator(`a[href="#${id}"]`)
        .click();
      await expect(page).toHaveURL(new RegExp("#" + id + "$"));
      await expect(page.locator("#" + id)).toBeInViewport();
    }
    if (width <= 900) {
      await page.getByRole("button", { name: "Abrir menú" }).click();
      await page.keyboard.press("Escape");
      await expect(
        page.getByRole("button", { name: "Abrir menú" }),
      ).toBeFocused();
    }
    const downloadPromise = page.waitForEvent("download");
    await page
      .locator("#contact")
      .getByRole("link", { name: "Descargar CV" })
      .click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe(
      "Jesus_Gabriel_Hernandez_Gutierrez_CV.pdf",
    );
    expect(await download.failure()).toBeNull();
    const logos = page.locator(".company-logo img");
    await expect(logos).toHaveCount(5);
    for (const logo of await logos.all()) {
      await logo.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          logo.evaluate((image: HTMLImageElement) => image.naturalWidth),
        )
        .toBeGreaterThan(0);
    }
    await page
      .locator('img[loading="lazy"]')
      .evaluateAll((images) =>
        images.forEach(
          (image) => ((image as HTMLImageElement).loading = "eager"),
        ),
      );
    await page
      .locator("img")
      .evaluateAll((images) =>
        Promise.all(
          images.map((image) => (image as HTMLImageElement).decode()),
        ),
      );
    const images = await page
      .locator("img")
      .evaluateAll((imgs) =>
        imgs.every((img) => img.complete && img.naturalWidth > 0),
      );
    expect(images).toBeTruthy();
    expect(
      await logos.evaluateAll((images) =>
        images.every((image) => {
          const box =
            image.parentElement!.parentElement!.getBoundingClientRect();
          const featured = image.closest(".experience-current") !== null;
          return box.width === (featured ? 198 : 180) &&
            box.height === (featured ? 62 : 56);
        }),
      ),
    ).toBeTruthy();
    expect(errors).toEqual([]);
  });
}
test("SEO, static content, links and reduced motion", async ({
  page,
  request,
  browser,
}) => {
  const response = await request.get("/");
  const html = await response.text();
  expect(html).toContain("Experiencia Profesional");
  expect(html).toContain("Klumex");
  expect(html).toContain("Seguimiento a capacitación y matriz ILUO.");
  expect(html).toContain("application/ld+json");
  await page.goto("/");
  await expect(page).toHaveTitle(
    "Jesús Gabriel Hernández Gutiérrez | Supervisor Senior de Producción",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://jesus-hg-mx.github.io/",
  );
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
  await expect(page.locator(".languages")).toHaveCount(0);
  await expect(page.getByText("En curso", { exact: true })).toBeVisible();
  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
    "content",
    "es_MX",
  );
  const visibleCopy = await page.locator("body").innerText();
  expect(visibleCopy).not.toMatch(
    /Download CV|Senior Production Supervisor|In Progress|Professional Profile|Let's Connect|Coming soon/,
  );
  const schema = JSON.parse(
    await page.locator('script[type="application/ld+json"]').innerText(),
  );
  expect(schema.jobTitle).toBe("Supervisor Senior de Producción");
  expect(schema.sameAs).toEqual(["https://www.linkedin.com/in/gabriel8925/"]);
  const links = await page
    .locator("a")
    .evaluateAll((a) => a.map((x) => x.getAttribute("href")));
  for (const link of links) {
    if (link?.startsWith("#")) expect(await page.locator(link).count()).toBe(1);
  }
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://jesus-hg-mx.github.io/",
  );
  expect(await (await request.get("/sitemap.xml")).text()).toContain(
    "<loc>https://jesus-hg-mx.github.io/</loc>",
  );
  expect(links).toContain("mailto:gabon1250@gmail.com");
  expect(links.some((link) => link?.startsWith("tel:"))).toBe(false);
  expect(schema).not.toHaveProperty("telephone");
  await expect(page.getByText("TELÉFONO", { exact: true })).toHaveCount(0);
  expect(links).toContain("https://www.linkedin.com/in/gabriel8925/");
  for (const path of [
    "/robots.txt",
    "/sitemap.xml",
    "/images/social-card.png",
    "/favicon.svg",
  ])
    expect((await request.get(path)).status()).toBe(200);
  const pdf = await request.get("/cv/Jesus_Gabriel_Hernandez_Gutierrez_CV.pdf");
  expect((await pdf.body()).subarray(0, 5).toString()).toBe("%PDF-");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  expect(
    await page
      .locator("html")
      .evaluate((e) => getComputedStyle(e).scrollBehavior),
  ).toBe("auto");
  const context = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await context.newPage();
  await staticPage.goto("http://localhost:4175");
  await expect(
    staticPage.getByRole("heading", { name: "Experiencia Profesional" }),
  ).toBeVisible();
  await context.close();
});
