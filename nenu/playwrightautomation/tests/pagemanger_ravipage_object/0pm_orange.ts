import{ Page } from '@playwright/test'
export class Orange{
    private page:Page

    constructor(page:Page){
        this.page=page
    }

    async navigatetologinpage()
    {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await this.page.getByPlaceholder("Username").fill("Admin");
    await this.page.getByPlaceholder("Password").fill("admin123");
    await this.page.getByRole("button",{name:"Login"}).click();
}
}

