const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://en.wikipedia.org/wiki/Playwright');
  await page.getByRole('banner').click();
  await page.getByRole('radio', { name: 'Large' }).check();
  await page.getByRole('link', { name: 'craftsperson' }).click();
  await page.getByRole('link', { name: 'Medieval artisans' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();