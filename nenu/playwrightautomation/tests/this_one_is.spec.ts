import { test, expect } from '@playwright/test';

test("long has strength11", async({page}) => {
                await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html#');
                  
                await page.getByLabel("Email Address:").fill("raviteja@gmail.com")
                await page.getByLabel("Standard").check()
                await page.getByPlaceholder("Enter your full name").fill("ravi")
               // await page.getByAltText("logo image").toBeVisible()
 
});


            //await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
            //await page.getByRole('listbox').getByText('Admin').click();
            
           
           
               
               
           test("long king222" ,async({page})=>{
            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{ waitUntil: "domcontentloaded", timeout: 30000 })
          // await page.getByRole('textbox', { name: 'Username' }).click();
          // await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
          // await page.getByRole('textbox', { name: 'Username' }).fill('A');
          // await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
           await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
           //await page.getByRole('textbox', { name: 'Password' }).click();
           //await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');t
           //await page.getByRole('textbox', { name: 'Password' }).fill('');
          // await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
           await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
           await page.getByRole('button', { name: 'Login' }).click();
          // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
           await page.getByRole('link', { name: 'Admin' }).click();
           await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
           await page.getByRole('menuitem', { name: 'Job Titles' }).click();
           await page.getByRole('button', { name: ' Add' }).click();
           await page.getByRole('textbox').nth(1).click();
           await page.getByRole('textbox').nth(1).fill('dfg');
           await page.getByText('Browse').click();
           await page.getByText('Browse').setInputFiles('Chat.txt');
           await page.getByRole('textbox', { name: 'Add note' }).click();
           await page.getByRole('textbox', { name: 'Add note' }).fill('dwdwq');
           await page.getByRole('button', { name: 'Save' }).click();
           await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
           await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
           await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
        
        });

        // await page.getByRole('textbox', { name: 'Add note' }).click();
           
         //await page.getByRole('option', { name: 'Admin' }).click();
           
           // await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
           //await page.getByRole('menuitem', { name: 'Job Titles' }).click();
          // await page.getByText('-- Select --').first()
          // await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
           //await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
           //await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
         //  await page.getByRole('option', { name: 'Admin' }).click();
           //await page.getByRole('button', { name: ' Add' }).click()
           
         //  await page.getByRole('link', { name: 'Admin' }).click();
          // await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
           
          // await page.getByRole('button', { name: 'Save' }).click();
          
           //await page.getByRole('menuitem', { name: 'Job Titles' }).click();
          // await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();.click();
          // await page.getByRole('menuitem', { name: 'Admin' }).click();
           //await page.locator("//label[text()='User Role']/parent::div/parent::div//div[text()='ESS']").click()
//C:\githubciode\vsscode\nenu\ravi.js
           test("long king3456" ,async({page})=>{
             await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{ waitUntil: "domcontentloaded", timeout: 50000 })
            await page.getByPlaceholder("Username").fill("admin")
            await page.getByPlaceholder("Password").fill("admin123")
            await page.getByRole('button', { name: 'Login' }).click()
            
           // await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
            await page.getByRole('link', { name: 'Admin' }).click();
            await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
            await page.getByRole('menuitem', { name: 'Job Titles' }).click();
            
            
            await page.getByRole('button', { name: ' Add' }).click();
            await page.getByRole('textbox').nth(1).fill('hero');
            await page.getByRole('textbox', { name: 'Type description here' }).fill('Type descr');
            await page.locator('input[type="file"]').setInputFiles('C:\\Users\\SIVATEJA\\OneDrive\\Pictures\\147476.jpg');
            //await page.locator('.oxd-icon.bi-upload').click();
            //await page.locator('.oxd-icon.bi-upload').setInputFiles('C:\\Users\\SIVATEJA\\OneDrive\\Pictures\\147476.jpg');
            //await page.getByText('Browse').click();
            //await page.getByText('Browse').setInputFiles('C:\githubciode\vsscode\nenu\ravi.js')
            await page.getByRole('button', { name: 'Save' }).click();

           });

            //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            test("long king3456erggh" ,async({page})=>{
            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            await page.getByText('Username : Admin').click();
            await page.getByRole('textbox', { name: 'username' }).click();
            await page.getByRole('textbox', { name: 'username' }).press('CapsLock');
            await page.getByRole('textbox', { name: 'username' }).fill('A');
            await page.getByRole('textbox', { name: 'username' }).press('CapsLock');
            await page.getByRole('textbox', { name: 'username' }).fill('Admin');
            await page.getByRole('textbox', { name: 'password' }).click();
            await page.getByRole('textbox', { name: 'password' }).press('CapsLock');
            await page.getByRole('textbox', { name: 'password' }).press('CapsLock');
            await page.getByRole('textbox', { name: 'password' }).fill('admin123');
            await page.getByRole('button', { name: 'Login' }).click();
            await page.getByRole('link', { name: 'Admin' }).click();
            await page.locator('#app').click();
            await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
            await page.getByRole('menuitem', { name: 'Job Titles' }).click();
            await page.getByRole('button', { name: ' Add' }).click();
            await page.getByRole('textbox').nth(1).click();
            await page.getByRole('textbox').nth(1).fill('tehenjc');
            await page.getByRole('textbox', { name: 'Type description here' }).click();
            await page.getByRole('textbox', { name: 'Type description here' }).fill('hnxxj');
            await page.getByText('Browse').click();
            await page.getByText('Browse').setInputFiles('ravi.js');
            await page.getByText('Browse').click();
            await page.getByText('Browse').setInputFiles('typescipts');
            await page.locator('.oxd-icon.bi-upload').click();
            await page.locator('.oxd-icon.bi-upload').setInputFiles('Screenshot (1).png');
            await page.getByRole('button', { name: 'Save' }).click();
            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
            await page.getByRole('button', { name: ' Add' }).click();
           });

           test("iam the owner of th jungle",async({page})=>{
            await page.goto("https://sqatools.in/automation-practice-page/")
            //await page.getByRole("link",{name: "Login Page"}).nth(1).click({ modifiers: ['ControlOrMeta'] })
       const source=page.locator("#drag1")
      const target= page.locator("div.drop")
      await source.dragTo(target)
          });

          test("iam the owner of th jungle12334",async({page})=>{
          await page.goto("https://sqatools.in/dummy-booking-website/")
        const lj= page.locator("//span[text()='WhatsApp']/preceding::input[1]")
         await lj.click()
        await expect(lj).toBeChecked()
          });