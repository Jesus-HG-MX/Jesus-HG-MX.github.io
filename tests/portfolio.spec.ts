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
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBeTruthy();
    for (const id of [
      "experience",
      "skills",
      "highlights",
      "education",
      "contact",
    ]) {
      if (width <= 900)
        await page.getByRole("button", { name: "Open navigation" }).click();
      await page
        .locator("#main-navigation")
        .getByRole("link", { name: new RegExp("^" + id + "$", "i") })
        .click();
      await expect(page).toHaveURL(new RegExp("#" + id + "$"));
      await expect(page.locator("#" + id)).toBeInViewport();
    }
    if (width <= 900) {
      await page.getByRole("button", { name: "Open navigation" }).click();
      await page.keyboard.press("Escape");
      await expect(
        page.getByRole("button", { name: "Open navigation" }),
      ).toBeFocused();
    }
    const downloadPromise = page.waitForEvent("download");
    await page
      .locator("#contact")
      .getByRole("link", { name: "Download CV" })
      .click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe(
      "Jesus_Gabriel_Hernandez_Gutierrez_CV.pdf",
    );
    expect(await download.failure()).toBeNull();
    const images = await page
      .locator("img")
      .evaluateAll((imgs) =>
        imgs.every((img) => img.complete && img.naturalWidth > 0),
      );
    expect(images).toBeTruthy();
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
  expect(html).toContain("Professional Experience");
  expect(html).toContain("application/ld+json");
  await page.goto("/");
  await expect(page).toHaveTitle(
    "Jesús Gabriel Hernández Gutiérrez | Senior Production Supervisor",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://jesus-hg-mx.github.io/",
  );
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
  expect(links).toContain("tel:+522212690680");
  expect(links).toContain("https://linkedin.com/in/gabriel8925");
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
    staticPage.getByRole("heading", { name: "Professional Experience" }),
  ).toBeVisible();
  await context.close();
});
