import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('html').click();
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('A');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('navigation', { name: 'Sidepanel' })).toBeVisible();

  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByRole('navigation', { name: 'Sidepanel' })).toBeVisible();

  await page.getByRole('button', { name: ' Add' }).click();
  await expect(page.getByRole('navigation', { name: 'Sidepanel' })).toBeVisible();

  await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
  await expect(page.getByRole('option', { name: '-- Select --' })).toBeVisible();

  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('TESTRP');
  await expect(page.getByRole('option', { name: 'sww test' }).first()).toBeVisible();

  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await expect(page.getByRole('option', { name: '-- Select --' })).toBeVisible();

  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('TESTRPUSER123');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('TESTRPTE');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('');
  await page.getByRole('textbox').nth(3).press('CapsLock');
  await page.getByRole('textbox').nth(3).fill('');
  await page.getByRole('textbox').nth(3).press('CapsLock');
  await page.getByRole('textbox').nth(3).fill('TEST');
  await page.getByRole('textbox').nth(3).press('CapsLock');
  await page.getByRole('textbox').nth(3).fill('TESTrp123');
  await page.getByRole('textbox').nth(3).press('Tab');
  await page.getByRole('textbox').nth(4).press('CapsLock');
  await page.getByRole('textbox').nth(4).fill('T');
  await page.getByRole('textbox').nth(4).press('CapsLock');
  await page.getByRole('textbox').nth(4).fill('');
  await page.getByRole('textbox').nth(4).press('CapsLock');
  await page.getByRole('textbox').nth(4).fill('TEST');
  await page.getByRole('textbox').nth(4).press('CapsLock');
  await page.getByRole('textbox').nth(4).fill('TESTrp123');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('TESTRP123');
  await expect(page.getByRole('option', { name: 'No Records Found' })).toBeVisible();

  await page.getByText('Add UserUser').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('');
  await page.getByRole('textbox', { name: 'Type for hints...' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('R');
  await expect(page.getByRole('option', { name: 'Searching....' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Type for hints...' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Reshma');
  await expect(page.getByRole('option', { name: 'No Records Found' })).toBeVisible();

  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('');
  await page.getByRole('textbox', { name: 'Type for hints...' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('P');
  await expect(page.getByRole('option', { name: 'Searching....' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Type for hints...' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Priyanka');
  await page.getByText('* Required Cancel Save').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Priyanka@gmail.com');
  await expect(page.getByRole('option', { name: 'No Records Found' })).toBeVisible();

  await page.getByText('Add UserUser').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});