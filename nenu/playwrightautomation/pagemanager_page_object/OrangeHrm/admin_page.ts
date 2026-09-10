import{Page} from "@playwright/test";
export class Adminpage{
    private page:Page
    constructor(page:Page){
        this.page=page
    }
async navigatetoadminpage(){
await this.page.getByRole('link', { name: 'Admin' }).click();
await this.page.getByRole('textbox', { name: 'Type for hints...' }).fill('Qwerty Qwerty LName')
await this.page.getByRole('button', { name: 'Search' }).click();

}

}

await page.locator('iframe[name="a-4jjm32hxdjsh"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
await page.locator('iframe[name="c-4jjm32hxdjsh"]').contentFrame().locator('[id="5"]').click();
await page.locator('iframe[name="c-4jjm32hxdjsh"]').contentFrame().locator('[id="2"]').click();
await page.locator('iframe[name="c-4jjm32hxdjsh"]').contentFrame().locator('[id="1"]').click();
await page.locator('iframe[name="c-4jjm32hxdjsh"]').contentFrame().locator('[id="6"]').click();
await page.locator('iframe[name="c-4jjm32hxdjsh"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
await page.locator('iframe[name="c-4jjm32hxdjsh"]').contentFrame().locator('[id="2"]').click();
await page.locator('iframe[name="c-4jjm32hxdjsh"]').contentFrame().locator('[id="1"]').click();
await page.locator('iframe[name="c-4jjm32hxdjsh"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
await page.locator('iframe[name="c-4jjm32hxdjsh"]').contentFrame().locator('[id="0"]').click();
await page.locator('iframe[name="c-4jjm32hxdjsh"]').contentFrame().locator('[id="0"]').click();
await page.locator('iframe[name="c-4jjm32hxdjsh"]').contentFrame().locator('[id="1"]').click();
await page.locator('iframe[name="c-4jjm32hxdjsh"]').contentFrame().locator('[id="0"]').click();
await page.locator('iframe[name="c-4jjm32hxdjsh"]').contentFrame().locator('[id="6"]').click();
await page.locator('iframe[name="c-4jjm32hxdjsh"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
await page.getByRole('link', { name: 'Free Open-Source Software |' }).click();
await page.goto('https://www.google.com/search?q=open+source+orange+hrm&oq=open+source+orange+hrm&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDg4MzdqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8&sei=XaqbariTK4SahvcPh7GDwA8');
await page.getByRole('link', { name: 'OrangeHRM OrangeHRM https://' }).click();
await page.getByRole('textbox', { name: 'Username' }).click();
await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
await page.getByRole('textbox', { name: 'Username' }).fill('A');
await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
await page.getByRole('textbox', { name: 'Password' }).press('Enter');
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('link', { name: 'Admin' }).click();
await page.getByRole('textbox').nth(1).click();
await page.getByRole('textbox').nth(1).fill('styfyfyu');
await page.getByText('-- Select --').first().click();
await page.getByRole('option', { name: 'Admin' }).click();
await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
await page.getByRole('option', { name: '-- Select --' }).click();
