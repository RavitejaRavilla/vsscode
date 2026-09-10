import{test,Page, expect} from "@playwright/test"
import { pppppmanager1 } from "../ppppmanager"


let pageM:pppppmanager1
let page:Page

test.describe("all test base",()=>{
    test.beforeAll("first login",async({ browser })=>{
         page = await browser.newPage()
        pageM=new pppppmanager1(page)
 await pageM.alm.navigatetologinpage()
   })
 test("now run this",async ()=>{
    
    await pageM.alm.navigatetoadminpage()
    
 })
 test("navigate to poim",async ()=>{

    await pageM.Yum.navigatetopimpage()
    

    
 })

 test("navigt",async ()=>{
   await pageM.alm.successfullogin()
 })


});

