import{test} from "@playwright/test"


test.describe("all time",()=>{
    test("first", async ({page}) =>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button",{name:"Login"}).click()
    await page.getByRole("link", { name: "Admin" }).click()
await page.getByRole("button",{name:"Add"}).click()
      


    })
})