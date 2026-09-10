import{Page} from '@playwright/test'
export class Teja {
    private page:Page

    constructor(page:Page){
        this.page=page
    }

    
        //await this.page.getByRole("link",{name:"Admin"}).click()
        async pimbutton(){
await this.page.getByRole('link', { name: 'PIM' }).click();
    await this.page.getByRole('textbox').nth(2).click();
    await this.page.getByRole('textbox').nth(2).fill('0904064403');
    await this.page.getByRole('button', { name: 'Search' }).click();
        }

    }




    