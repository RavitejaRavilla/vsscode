import { test, expect } from '@playwright/test';

test("enter login details",{
  tag: '@fast',
       },  async ({page})=> {
 
     await page.goto("https://sqatools.in/automation-practice-page/")
     await page.getByPlaceholder("Enter username").fill("user1@gmail.com")
     await page.getByPlaceholder("Enter password").fill("test@12345")

        });

     test("enter details",  async ({page})=> {
 
     await page.goto("https://sqatools.in/automation-practice-page/")
   //  await page.getByPlaceholder("Enter username").fill("user1@gmail.com")
     //await page.getByPlaceholder("Enter password").fill("test@12345")
     await page.locator("//input[@id='datePicker']").fill("2024-06-05")
     const vali= await page.locator("//input[@id='datePicker']").inputValue()
     console.log(vali)
     expect(vali).toBe("2024-06-05")
     await page.locator("//select[@id='country']").selectOption("Australia")
     const val= await page.locator("//select[@id='country']").inputValue()
     console.log(val)
     expect(val).toBe("australia")
 
await page.locator("//button[@id='normalButton']").click()
const ay= await page.locator("//button[@id='normalButton']").isEnabled()
console.log(ay)
expect(ay).toBe(true)
const arr  = await page.locator("//input[@id='java']").isChecked()
if(arr==false){
  await page.locator("//input[@id='java']").check()



}
//await page.locator("//span[text()='Dummy return ticket – $300']/preceding::input)[2]").click()
//await page.locator("//td[text()='Indore']/preceding::td/input)[3]").check()
//td[text()="Indore"]/preceding::td/input)[3]
//span[text()="Dummy return ticket – $300 "]/preceding::input)[2]
        });

   //select[@id="country"]  //select[@id="skills"] //select[@id="normalButton"]  //input[@id="java"] (//td[text()="Indore"]/preceding::td/input)[3]

test('Verify Home link is clickable', async ({ page }) => {
  await page.goto('https://sqatools.in/automation-practice-page/');

  
  // Verify the link is visible
//await expect(homeLink).toBeVisible();

await page.locator("//select[@id='country']").selectOption(" USA")
await page.locator("//input[@placeholder='Enter username']").fill("ravi")
    

});


test.describe("this is my uncle",()=>{
test("this is to test dummy123" ,async({page})=>{

  
         await page.goto('https://sqatools.in/dummy-booking-website/');

  
         //await page.locator("(//input[@value='radio_345'])").check()
         //await page.locator("(//td[text()='Indore']/preceding::td/input)[3]").check()
         await page.locator("//input[@id='oneway']").check()
         await page.locator("div").locator("ul").locator("li").locator("input[value='radio_345']").check()
         //await page.locator("div , ul ,li(input[value='radio_345'])").check()
       const listelement=await  page.locator("ul").filter({hasText: "Dummy return ticket"})
       const alltexas= await listelement.allTextContents()
       console.log(alltexas)
       for(const text of alltexas){
        console.log(text)
       }
      // const elements_find = await page.locator("[type='checkbox']").all()
      //const vr = await page.locator("//td[text()='Hyderabad']/preceding::td[2]/input").all()
      // for(var ab of elements_find){
        //await ab.click()
        //await page.waitForTimeout(2000)
       //}
       await page.locator("//span[text()='Both']/preceding::input[1]").check()
      const vv =page.locator("tr").filter({hasText: "Hyderabad"}).locator("input")
     const mn=vv.locator("input")
      await mn.check()
      await page.locator("tr").filter({hasText: "Hyderabad"}).locator("input").check()


     });

    });
test.describe("get by role methods",()=>{
    test("this is to test practics" ,async({page})=>{

  
         await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
         //const vmr =  page.locator("//button[text()='Primary Action']")
         //await vmr.click()
        // await expect(vmr).toBeEnabled()
           
          var amn = page.getByRole("button",{name:"Primary Action"})
         
           await expect(amn).toBeEnabled()
          await page.getByRole("textbox",{name:"username"}).fill("ravi")
      
          await page.getByRole("checkbox",{name:" Accept terms"}).check()

       
            await page.locator("(//a[text()='Home'])[2]").click()
          const listelement1=await  page.locator("ul").filter({hasText: "List item 1"})
       const alltexas1= await listelement1.allTextContents()
       console.log(alltexas1)
       for(const text of alltexas1){
        console.log(text)
       }
          //const linkElement = page.locator("//nav[text()='navigation']") //a[text()='link']
          //const bnm= await linkElement.locator("a")
          //const bhg=await bnm.allTextContents()
          //console.log(bhg)
          //for(const link of  bnm){
           // console.log( await link.allTextContents())
          //}
    
     
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
                   await page.getByLabel("Email Address:").fill("raviteja@gmail.com")
                  await page.getByLabel("Standard").check()
                await page.getByPlaceholder("Enter your full name").fill("ravi")
                await page.getByAltText("logo image").toBeVisible()
  
          });


           test("long king" ,async({page})=>{
            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            await page.getByRole('textbox', { name: 'Username' }).fill("admin")
               await page.getByRole('textbox', { name: 'Password' }).fill("admin123")
               await page.getByRole('button', { name: 'Login' }).click()
               await page.getByRole('link', { name: 'Admin' }).click()
             await page.getByText("-- Select --").click();

    // Select ESS
    await page.getByText("ESS", { exact: true }).click();
               
               await page.locator("//label[text()='User Role']/parent::div/parent::div//div[text()='ESS']").click()
               });
 
});

         test("long has strength" ,async({page})=>{
         await page.goto("https://sqatools.in/automation-practice-page/")
         const file="C:\\githubciode\\vsscode\\nenu\\ravi.js"
         await page.setInputFiles("#fileUpload",file)
         

        
         
        
        });