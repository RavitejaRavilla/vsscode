import{test, expect} from '@playwright/test'


test.describe("My first test", ()=> {
 
test.describe("My first hotel booking",{
  tag: '@fast',
}, ()=> {
 test("hotel booking 1", ()=> {
   console.log("hotel started 1"); 

  });

   test("hotel booking 2", ()=> {
   console.log("hotel started 2"); 

  });





});

test.describe("My first flight booking", ()=> {
        test("flight booking 1", () => {
                console.log("flight started 1");

            });

                   test("flight booking 2", () => {
                    console.log("flight started 2"); 

                  });





});

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



});


  
test.describe("checking for this",  ()=> {
    test.skip("enter login details", { annotation : [
        {type: "issue", description: "This test is failing due to issue 1234"},
        {type: "performance", description: "Enter for execution of test case"}
    ] }
    , async ({page})=> {
     await page.goto("https://sqatools.in/automation-practice-page/")
     await page.getByPlaceholder("Enter username").fill("user1@gmail.com")
     await page.getByPlaceholder("Enter password").fill("test@12345")
 });
        });

  
test.describe("checking for this",()=> {
    test.("enter login details", async ({page})=> {
     await page.goto("https://sqatools.in/dummy-booking-website/")
     await page.locator("//input[@id='firstname'][1]").fill("test")
     await page.locator("//input[@id='firstname'][2]").fill("test@12345")
 });
        });

       
        
