import {test, expect} from '@playwright/test';
import { github_login } from '../Utils/github';

test(`Verify successful update of repository name and description`, async ({request}) => {
    const {baseURL,extraHTTPHeaders}=github_login({
    extra:{Accept:'application/vnd.github+json'}
    });
    const res= await request.patch(`${baseURL}/repos/priyankakesamsetty1504-hue/Codegen`,
  {
    headers: extraHTTPHeaders,
    data: {
        name: 'Codegen-renamed',
        description:'codegenrenamed'
    }
});
 const responseBody = await res.json();
    console.log(responseBody);
    test('verify user is sucessfully logged in with valid credentials',async({page})=>{
    await page.goto('https://github.com/');
    //await expect(page.getByRole('button',{name:'Sign in'})).toBeVisible();
    //await page.getByRole('button',{name:'Sign in'}).click();
    await page.locator(`(//a[contains(text(),'Sign in')])[2]`).click();
    await page.getByLabel('Username or email address').fill(process.env.GITHUB_USERNAME);
    await page.getByLabel('Password').fill(process.env.GITHUB_PASSWORD);
    await page.getByRole('button',{name:'Sign in'}).click();
    await expect(page.locator(`//span[contains(text(),'Dashboard')]`)).toBeVisible();
    console.log('User is successfully logged in');
    })
    

});

test(`Verify a public repository can be made private`,async({request})=>{

     const {baseURL,extraHTTPHeaders}=github_login({
    extra:{Accept:'application/vnd.github+json'}
    });
    const res= await request.patch(`${baseURL}/repos/priyankakesamsetty1504-hue/LocalLLMTestCaseGenerator
`,
  {
    headers: extraHTTPHeaders,
    data: {
        'private':true
    }
});


});