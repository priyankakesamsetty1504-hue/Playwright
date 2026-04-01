import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywright%2Bwikipedia%26oq%3Dplaywright%2Bwikipedia%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDM0NjlqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DW6G6abWKLZuTseMPr9OBiAk&q=EhAkAUkAiDu9vKCLubmylHvLGNvC6s0GIjASQdNCF81Ny2O7Pg3Ik6P2jPEkNAtgodanS3TnLOIO_dqYImTddLaqdbMxrGraOL4yAVJaAUM');
  await page.locator('iframe[name="a-qy8rrlivh8ik"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await expect(page.getByRole('link', { name: 'Why did this happen?' })).toBeVisible();

  await page.locator('div:nth-child(2) > div').first().click();
  await page.locator('iframe[name="a-qy8rrlivh8ik"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await expect(page.locator('iframe[name="c-qy8rrlivh8ik"]').contentFrame().getByRole('button', { name: 'Get a new challenge' })).toBeVisible();

  await page.locator('iframe[name="c-qy8rrlivh8ik"]').contentFrame().getByRole('button', { name: 'Skip' }).click();
  await page.locator('iframe[name="c-qy8rrlivh8ik"]').contentFrame().locator('[id="7"]').click();
  await page.locator('div:nth-child(2) > div').first().click();
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dgoogle%26oq%3Dgoogle%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDEzOTJqMGo0qAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DdKG6af6EMo-MseMP4IG-qAE&q=EhAkAUkAiDu9vKCLubmylHvLGPTC6s0GIjACBE1PS8L_KPQ0NFvFK5s9PB4qXp7R5NTNXJGSN5yMILVj4ja4s-elhixRSmG6Zx8yAVJaAUM');
  await page.locator('iframe[name="a-4309cvu7ic2l"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await expect(page.locator('iframe[name="c-4309cvu7ic2l"]').contentFrame().getByRole('button', { name: 'Get a new challenge' })).toBeVisible();

  await page.locator('iframe[name="c-4309cvu7ic2l"]').contentFrame().locator('[id="1"]').click();
  await page.locator('iframe[name="c-4309cvu7ic2l"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await expect(page.getByRole('link', { name: 'Why did this happen?' })).toBeVisible();

  await page.locator('div:nth-child(2) > div').first().click();
});