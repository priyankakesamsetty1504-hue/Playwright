import {test,expect} from '@playwright/test'

test('@demotau verify that user is able to open demotau and perform actions',async({page})=>{
await page.goto(`https://dd-demo-tau.vercel.app/web_elements.html`);
const textinput =page.getByRole("link",{name:'1. Text Input'});
await textinput.click();
const enterinputtxt=page.locator('//input[@id="textInputField"]');
await enterinputtxt.fill("priyanka_test")
await page.getByRole("link", {name: '3. Email Input'}).click();
await page.getByPlaceholder('name@example.com').fill("test@gmail.com");
//await page.getByRole("link", {name: '7. Dropdown'}).click();
await page.locator("//a[contains(text(),'7. Dropdown')]").click();

await page.locator("//select[@id='dropdownField']").selectOption('BMW');
await page.locator("//a[contains(text(),'5. Radio Buttons')]").click();
await page.getByLabel('Male', {exact: true}).check();
//await page.locator("//div[contains(text(),'Selected Gender: Male')]").check();
//await page.waitForTimeout(3000);
expect(page.locator('#dropdownField')).toHaveValue('BMW');
await page.locator("//a[contains(text(),'6. Checkboxes')]").click();
await page.getByLabel('Agree').check();
await page.locator("//a[contains(text(),'8. Multi-Select')]").click();
await page.locator('#multiSelectField').selectOption(['Apple', 'Banana']);
await page.locator("//a[contains(text(),'9. File Upload')]").click();
await page.getByLabel('Choose file').setInputFiles('tests/test-data/tc002.xlsx'); 
const fileName = await page.locator('#fileUploadField')
  .evaluate(el => (el as HTMLInputElement).files![0].name);
  console.log(fileName);
  //setInputFiles('tests/test-data/tc002.xlsx');
// await page.close();
await page.locator("//a[contains(text(),'11. Color & Range')]").click();
const slider = page.locator('#rangeField');
await slider.click();
await slider.press('ArrowRight'); 

});
