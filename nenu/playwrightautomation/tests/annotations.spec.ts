import{test,expect} from '@playwright/test'

  
test.describe("checking for this",  ()=> {
    test("enter login details", { annotation : [
        {type: "issue", description: "This test is failing due to issue 1234"},
        {type: "performance", description: "Enter for execution of test case"}
    ] }
    , async ({page})=> {
     await page.goto("https://sqatools.in/automation-practice-page/")
     await page.getByPlaceholder("Enter username").fill("user1@gmail.com")
     await page.getByPlaceholder("Enter password").fill("test@12345")
 });
        });


    test.describe("for this",()=> {
    test("enter login details", async ({page})=> {
     await page.goto("https://sqatools.in/dummy-booking-website/")
     await page.locator("(//input[@id='firstname'])[1]").fill("test")
     await page.locator("(//input[@id='firstname'])[2]").fill("test@12345")
 await page.locator("(//input[@id='male'])").click()
 await page.locator("//select[@id='admorepass']").selectOption(" Add 2 more passenger (200%)")
 await page.locator("//span[text()='Dummy return ticket – $300 ']/preceding-sibling::input").click()
 var ab= await page.locator("#oneway").isChecked()
if(ab==false){
    await page.locator("#oneway").check()
}
await page.locator("(//td[text()='Mumbai']/preceding-sibling::td/input)").click()
const ar= await page.locator("(//td[text()='Mumbai']/preceding-sibling::td/input)").isEnabled()
console.log("is enabled or not "+ar);

   await page.locator("tr").filter({hasText:" Kolkata"}).locator("input").click()
   
await page.locator("div").locator("ul").locator("li").locator("input[value='radio_345']")
//sawait page.locator("tr").filter({hasText: "kolkata"}).locator("input").click()
//td[text()='Mumbai']/preceding::tdawait
});
    
        });
        //input[@id='male'] Choose the correct option:Cab booking and return date – $600 oneway

     test("iam getting all the element", async ({page})=>{
    await page.goto("https://sqatools.in/dummy-booking-website/")
    const element_list= await page.locator("[type='checkbox']").all()
    for(var element of element_list){
        await element.click()
        await page.waitForTimeout(2000)
    }
    const listelement= page.locator("ul").filter({hasText:" Dummy return ticket – $300 "})
   const alltexas = await listelement.allTextContents()
    console.log("all the text are "+alltexas)
    });
     
  
test.describe("checking for this",  ()=> {
      test("enter login details", async ({page})=> {
     await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
     const homeText = await page.getByText("Home").textContent()
     //ait page.getByPlaceholder("Enter password").fill("test@12345")
        console.log("the text is "+homeText)
});


});

//import {Ravi} from "../ravi_new _aut0mation_page/ne_page"








    