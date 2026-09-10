

import{test, expect} from '@playwright/test'

test.describe("this is to have the own brothers",()=>{
test("here you are the king" ,async({page})=>{

  
         await page.goto('https://sqatools.in/dummy-booking-website/');

  
         await page.locator("(//input[@value='radio_345'])").check()
         await page.locator("(//td[text()='Indore']/preceding::td/input)[3]").check()
         await page.locator("//input[@id='oneway']").check()
     });


     test("long has strength" ,async({page})=>{
                       await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
                       await expect(page.getByRole('link', { name: 'link' })).toBeEnabled();
                       const nm = page.getByText("List item 1");
     
                       const text = await nm.textContent();
     
                     expect(text).toBe("List item 1");
     
                       console.log(text);
                        var amn1 = page.getByRole("button",{name:'Submit Form'})
              
                        await expect(amn1).toBeEnabled()

                      const avb=  await page.getByText("colored text").textContent()
                      console.log(avb)
                      expect(avb).toEqual("colored text")

                 
               });
 });