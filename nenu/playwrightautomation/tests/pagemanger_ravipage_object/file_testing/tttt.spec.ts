import{ test } from '@playwright/test'
import{ Orange } from  '../0pm_orange'
import{ Teja } from '../teja_object'
import{ PageManager } from '../ppmanager_ms'

test.describe("all test case",()=>{

    
test("checking2efwegreg",async({page})=>{
const ab=new PageManager(page)
await ab.Orange.navigatetologinpage()
await ab.Teja.pimbutton()
});

});