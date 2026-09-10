import { Page } from "@playwright/test";
import { loginpage1 } from "./OrangeHrm/login_page";
import { Adminpage } from "./OrangeHrm/admin_page";

export class PageManager {
    private page: Page;
    readonly loginpage1: loginpage1
    readonly Adminpage: Adminpage
    

    constructor(page: Page) {
        this.page = page;
         this.loginpage1 = new loginpage1(this.page);
         this.Adminpage = new Adminpage(this.page);
        
    }

    
    

}