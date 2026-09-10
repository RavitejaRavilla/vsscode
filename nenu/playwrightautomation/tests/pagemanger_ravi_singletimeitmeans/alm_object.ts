import{expect, Page} from "@playwright/test";
 export class alm{
    private page:Page
    constructor(page:Page){
        this.page=page
    }
async navigatetologinpage(){
await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await this.page.getByPlaceholder("Username").fill("Admin");
await this.page.getByPlaceholder("Password").fill("admin123");
await this.page.getByRole("button",{name:"Login"}).click();
}

async navigatetoadminpage(){
await this.page.getByRole('link', { name: 'Admin' }).click();
await this.page.getByRole('textbox', { name: 'Type for hints...' }).fill('Qwerty Qwerty LName')
await this.page.getByText('Qwerty Qwerty LName').click();
await this.page.getByRole('button', { name: 'Search' }).click();
await this.page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();

}

async successfullogin(){

       await this.page.getByRole("link", { name: "Admin" }).click()
        await this.page.locator("//a[text()='Nationalities']").click()
            await this.page.getByRole("button",{ name:"Add"}).click()
            await this.page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("tejaravillafuhg")
            await this.page.getByRole("button",{name:"Save"}).click()  
            await expect(this.page.getByText("Successfully Saved")).toBeVisible()
        

    
}

}




