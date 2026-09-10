import { test, BrowserContext, Page } from '@playwright/test'

test.describe("all the best",()=>{
    test("scenario", async({ browser })=>{
        const Bcontext:BrowserContext = await browser.newContext()
        const page1: Page = await Bcontext.newPage()
        const page2: Page = await Bcontext.newPage()
        await page1.goto("https://sqatools.in/")
        await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
})

test("scenario1", async({ browser })=>{
        const Bcontext1: BrowserContext = await browser.newContext()
        const Bcontext2: BrowserContext = await browser.newContext()
        const page1: Page = await Bcontext1.newPage()
        const page2: Page = await Bcontext2.newPage()

        await page1.goto("https://sqatools.in/")
        await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
