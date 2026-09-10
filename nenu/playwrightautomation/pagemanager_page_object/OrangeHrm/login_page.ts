import { Page } from "@playwright/test";

export class loginpage1 {
    private page: Page;


    constructor(page:Page){
        this.page=page;
    }

async navigatetologinpage(url:string){
await this.page.goto(url)
}

async Login(username: string,password:string){

    await this.page.getByPlaceholder("Username").fill(username);
    await this.page.getByPlaceholder("Password").fill(password);
    await this.page.getByRole("button",{name:"Login"}).click();
   // await this.page.getByRole('link', { name: 'Admin' }).click();

}

}