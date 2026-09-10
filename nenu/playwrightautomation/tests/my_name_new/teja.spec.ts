import{test} from "@playwright/test"
import { Sqatool } from "../../tests/my_name_new/my_nn"

test.describe("check",()=>{
    test("myname",async({page})=>{
    const getting =new Sqatool(page)
    await getting.SqaLoginDetails()
    })
})