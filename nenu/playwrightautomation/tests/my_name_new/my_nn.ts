import{Page} from "@playwright/test"

export class Sqatool{
private page:Page
constructor(page:Page){
this.page = page
}

async SqaLoginDetails(){
    await this.page.goto("https://sqatools.in/dummy-booking-website/")
    await this.page.locator("(//a[text()='Login Page'])[1]").click()
}
}
