class Person {
    name: string
    age: number
    address: string

    constructor(name: string,age: number,address: string) {
        this.name=name
        this.age=age
        this.address=address
    }

showNameAndAge(){
    console.log(`Name: ${this.name}`)
}

}
var obj=("rahul")
obj.showNameAndAge()



await page.getByRole('link', { name: 'Admin' }).click();
await page.getByRole('textbox').nth(1).click();
await page.getByRole('textbox').nth(1).fill('hjiojo');
await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
await page.getByRole('listbox').getByText('Admin').click();
await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
await page.getByRole('listbox').getByText('ESS').click();
await page.getByRole('textbox', { name: 'Type for hints...' }).click();
await page.getByRole('textbox', { name: 'Type for hints...' }).fill('huiu');
await page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
await page.getByRole('listbox').getByText('Disabled').click();
await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();