
import{test,expect} from '@playwright/test'
test('Enter login details', async ({ page }) => {
  await page.goto('https://sqatools.in/automation-practice-page/');
  await page.getByPlaceholder('Enter username').fill('user1@gmail.com');
  await page.getByPlaceholder('Enter password').fill('test@12345');
   
});

test.describe("for this",async ()=> {
    test("iam getting all the element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const listelement1= page.getByRole("button", {name: "Primary Action"})
    await expect(listelement1).toBeEnabled()
   
   //nst InputField= page.getByRole("textbox", {name: "Username"})
   //nputField.fill("test")
    
    //ait page.getByPlaceholder("Username").fill("test")
     const htmlText = await page.getByText('HTML').textContent()
  console.log(htmlText)
   const htmlText1= await page.getByText('List item 1').textContent()
  console.log(htmlText1)
expect(htmlText1).toEqual('List item 1')
    });
  });
;


test("getting single list item", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

  const item = sawait page.locator("tr").filter({hasText: "List item 1"}).cont

  for (var item of element){
    console.log("the text is "+item)
  }

});