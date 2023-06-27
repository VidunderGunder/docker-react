import { test, expect } from "@playwright/test";

const url = "http://127.0.0.1:3000";

test("Page loads", async ({ page }) => {
  await page.goto(url);
  await expect(page).toHaveTitle("Vite + React + TS");
  // Expect h1 to be visible after React hydration and contain "Vite + React"
  await expect(page.getByRole("heading")).toHaveText("Vite + React");
});

const expectedData = {
  "Bun.js": "Bun Deez Nuts",
  "Express.js": "Express Deez Nuts",
  DotNet: "DotNet Deez Nuts",
} as const;

for (const [framework, expected] of Object.entries(expectedData)) {
  test(`Data is loaded from ${framework} backend`, async ({ page }) => {
    await page.goto(url);
    await expect(page.getByText(expected)).toBeVisible();
  });
}
