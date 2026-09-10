import{Page} from "@playwright/test"

export class Ravi{
private page:Page
constructor(page:Page){
this.page = page
}

async SqaLoginDetails(){
    await this.page.goto("https://sqatools.in/dummy-booking-website/")
    await this.page.getByRole("link",{name:"Login Page"}).click()
}
}
