import{test} from '@playwright/test'

test.describe("this is to have the own brothers",()=>{
    test("here you are the king" , async({page})=>{

  
        await page.goto('https://sqatools.in/dummy-booking-website/');

  
 
           await page.locator("(//td[text()='Indore']/preceding::td/input)[3]").check()
    



     });

       test("long has strength" ,async({page})=>{
         await page.goto("https://sqatools.in/automation-practice-page/")
         const file="C:\\githubciode\\vsscode\\nenu\\ravi.js"
         await page.setInputFiles("#fileUpload",file)
         

        
         
        
        });

});
     

//label[text()="User Role"]/parent::div/parent::div//div[text()="Admin"]