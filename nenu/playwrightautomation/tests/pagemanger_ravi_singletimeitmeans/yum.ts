import{Page} from "@playwright/test"

export class Yum{
    private page:Page
    constructor(page:Page){
        this.page=page
    }

    async navigatetopimpage(){
await this.page.getByRole('link', { name: 'PIM' }).click();
await this.page.getByRole('button', { name: 'Add' }).click();
await this.page.getByPlaceholder('First Name').fill('Qwerty');
await this.page.getByPlaceholder('Middle Name').fill('Qwerty');
await this.page.getByPlaceholder('Last Name').fill('LName');
await this.page.getByRole('button', { name: 'Save' }).click();
 }
}