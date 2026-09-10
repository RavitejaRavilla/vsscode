import{expect, test} from '@playwright/test'

test.describe("for this",()=> {
    test("iam getting all the ", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const listelement1= page.getByRole("button", {name: "Primary Action"})
    await expect(listelement1).toBeEnabled()
    const htmlText = await page.getByText('HTML').textContent()
  console.log(htmlText)
   //nst InputField= page.getByRole("textbox", {name: "Username"})
  //nputField.fill("ravi")
    
  //onst InputField2= page.getByRole("textbox", {name: "Username"})
 //console.log(await InputField2.inputValue())
   //ait (InputField.inputValue()).toBe("ravi")
    
    //ait page.getByPlaceholder("username").fill("test")
  //wait page.getByRole("checkbox", {name: "Accept terms"}).click()
  //expect(await page.getByRole("checkbox", {name: "Accept terms"})).toBeChecked()
                
    });

});

test.describe("all time",()=>{
    test("first", async ({page}) =>{
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button",{name:"Login"}).click()
    await page.getByRole("link", { name: "Admin" }).click()
     await page.getByRole("button",{name:"Add"}).click()
     await page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[1]").locator("(//div[text()='-- Select --'])[1]").click()
     //await page.getByText("-- Select --").nth(1).click()
    //await page.locator("//div[text()='Admin']").click({ timeout: 50000 })
    //await page.getByText("Admin", { exact: true }).click()
    await page.getByRole("listbox").getByText("Admin", { exact: true }).click();;
     await page.locator("(//input[@class='oxd-input oxd-input--active'])[3]").fill("ajnao")
     //await page.getByPlaceholder("Password").fill("admin123")
    //await page.getByRole("button",{name:"Save"}).click()  


    })

     test("second", async ({page}) =>{

      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button",{name:"Login"}).click()
    await page.getByRole("link", { name: "Admin" }).click()
    //await page.locator("//span[@class='oxd-topbar-body-nav-tab-item'])[1]").click()
    await page.locator("//span[text()='User Management ']").click()
    await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])/parent::li").click()
     await page.getByRole("button",{name:"Add"}).click()
     await page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[1]").locator("(//div[text()='-- Select --'])[1]").click()
     //await page.getByText("-- Select --").nth(1).click()
    //await page.locator("//div[text()='Admin']").click({ timeout: 50000 })
    //await page.getByText("Admin", { exact: true }).click()
    await page.getByRole("listbox").getByText("Admin", { exact: true }).click();;
     await page.locator("(//input[@class='oxd-input oxd-input--active'])[3]").fill("ajnao")
     //await page.getByPlaceholder("Password").fill("admin123")
    //await page.getByRole("button",{name:"Save"}).click()  


    })

test("first56gh", async ({page}) =>{
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button",{name:"Login"}).click()
    await page.getByRole("link", { name: "Admin" }).click()
    await page.locator("//a[text()='Nationalities']").click()
    await page.getByRole("button",{ name:"Add"}).click()
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("yqweesfuhg")
    await page.getByRole("button",{name:"Save"}).click()  
    await expect(page.getByText("Successfully Saved")).toBeVisible()
     
  
});




})


