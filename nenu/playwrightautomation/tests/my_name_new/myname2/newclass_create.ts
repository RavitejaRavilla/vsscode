import{Page, test} from '@playwright/test'
 export class New{

private page:Page
constructor(page:Page){
this.page=page
}

async myplate(){

    await this.page.goto("https://sqatools.in/dummy-booking-website/")
        await this.page.locator("(//a[text()='Login Page'])[1]").click()
        await this.page.locator("//span[text()='Dummy ticket for visa application – $200 ']/preceding-sibling::input[@value='radio_123']").check()
    
}



 }