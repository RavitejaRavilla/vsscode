import{test}  from '@playwright/test'

import { Export1 } from '../myname2/managerp'

test.describe("checking",()=>{
    test("test1", async({page})=>{
        const res=new Export1(page)
        await res.new.myplate()
        await res.new1.Amazonportal()
    })
})