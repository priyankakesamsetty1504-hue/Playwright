import {test, expect} from '@playwright/test';
import { github_login } from '../Utils/github';
// test('verify user is sucessfully logged in with valid credentials',async({page})=>{
//     await page.goto('https://github.com/');
//     //await expect(page.getByRole('button',{name:'Sign in'})).toBeVisible();
//     //await page.getByRole('button',{name:'Sign in'}).click();
//     await page.locator(`(//a[contains(text(),'Sign in')])[2]`).click();
//     await page.getByLabel('Username or email address').fill(process.env.GITHUB_USERNAME);
//     await page.getByLabel('Password').fill(process.env.GITHUB_PASSWORD);
//     await page.getByRole('button',{name:'Sign in'}).click();
//     await expect(page.locator(`//span[contains(text(),'Dashboard')]`)).toBeVisible();
//     console.log('User is successfully logged in');
// });

// test('verify user is not logged in with invalid credentials',async({page})=>{
//     await page.goto('https://github.com/');
//     await page.locator(`(//a[contains(text(),'Sign in')])[2]`).click();
//     await page.getByLabel('Username or email address').fill('invalid_username');
//     await page.getByLabel('Password').fill('invalid_password');
//     await page.getByRole('button',{name:'Sign in'}).click();
//     await expect(page.locator(`//div[contains(text(),'Incorrect username or password')]`)).toBeVisible();
//     console.log('User is not logged in with invalid credentials');
// });
// test('verify user is not logged in with empty credentials',async({page})=>{
//     await page.goto('https://github.com/');
//     await page.locator(`(//a[contains(text(),'Sign in')])[2]`).click();
//     await page.getByLabel('Username or email address').fill('');
//     await page.getByLabel('Password').fill('');
//     await page.getByRole('button',{name:'Sign in'}).click();
//     await expect(page.locator(`//div[contains(text(),'Incorrect username or password')]`)).toBeVisible();
//     console.log('User is not logged in with empty credentials');
// });

test('verify that the user can log out successfully',async({page})=>{
    await page.goto('https://github.com/');
    await page.locator(`(//a[contains(text(),'Sign in')])[2]`).click();
    await page.getByLabel('Username or email address').fill(process.env.GITHUB_USERNAME);
    await page.getByLabel('Password').fill(process.env.GITHUB_PASSWORD);
    await page.getByRole('button',{name:'Sign in'}).click();
    await expect(page.locator(`//span[contains(text(),'Dashboard')]`)).toBeVisible();
   //await page.locator(`//img[@alt='User avatar']`).click();
   await page.locator(`//img[@alt='User avatar']`).click({force: true});
   await page.waitForSelector('//button[contains(text(),\'Sign out\')]', {state: 'visible'});
   //await page.locator('//summary[aria-label="Open user navigation menu"]').click();
    await page.locator(`//button[contains(text(),'Sign out')]`).click();
    await expect(page.locator(`//a[contains(text(),'Sign in')]`)).toBeVisible();
     console.log('User is successfully logged out');
});
