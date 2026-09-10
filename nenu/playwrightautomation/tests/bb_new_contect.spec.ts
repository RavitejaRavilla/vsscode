import{test,BrowserContext,Page,expect} from "@playwright/test"
test.describe("hfgh",() =>{
    test("myname", async({ browser }) =>{
        const Bcontext: BrowserContext = await browser.newContext()
        //const Bcontext2: BrowserContext = await browser.newContext()
        const page1: Page = await Bcontext.newPage()
        //const page2: Page = await Bcontext2.newPage()

        await page1.goto("https://sqatools.in/dummy-booking-website/");
        expect(page1.url()).toContain("dummy-booking-website");
        //await page1.waitForTimeout(5000)

        const page2=await Promise.all([
            Bcontext.waitForEvent('page'),
            page1.getByText("Login Page").first().click()
        ])
        console.log(page2)

        const newpage=page2[0]
        await newpage.getByPlaceholder("Email address or phone number").fill("ravi")
        await newpage.getByPlaceholder("Password").fill("1234")


        //await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
    })