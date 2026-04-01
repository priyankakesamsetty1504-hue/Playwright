import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();

  await page.getByRole('button', { name: 'Open All Categories Menu' }).click();
  await expect(page.getByRole('link', { name: 'See All Categories' })).toBeVisible();

  await page.getByRole('button', { name: 'Mobiles, Computers' }).click();
  await expect(page.getByRole('button', { name: 'Back to main menu' })).toBeVisible();

  await page.getByRole('link', { name: 'All Mobile Phones' }).click();
  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();

  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('IPHONE');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await expect(page.getByRole('dialog', { name: 'Filters' })).toBeVisible();

  await page.locator('#a-autoid-1-announce').click();
  await expect(page.getByRole('link', { name: 'item in cart' })).toBeVisible();

  await page.getByText('Deals & Discounts').click();
  await page.getByRole('button', { name: 'Open All Categories Menu' }).click();
  await expect(page.getByRole('link', { name: 'See All Categories' })).toBeVisible();

  await page.getByRole('button', { name: 'Mobiles, Computers' }).click();
  await expect(page.getByRole('button', { name: 'Back to main menu' })).toBeVisible();

  await page.getByRole('link', { name: 'All Mobile Phones' }).click();
  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();

  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('O');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('ONE PLUS');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await expect(page.getByRole('dialog', { name: 'Filters' })).toBeVisible();

  await page.locator('#a-autoid-3-announce').click();
  await page.getByRole('link', { name: 'items in cart' }).click();
  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();

  await page.getByRole('button', { name: 'Delete OnePlus 13s |' }).first().click();
  await expect(page.getByRole('link', { name: 'item in cart' })).toBeVisible();

  await page.getByRole('group', { name: 'Quantity is' }).getByLabel('Delete iPhone 16 Plus 256 GB').click();
});