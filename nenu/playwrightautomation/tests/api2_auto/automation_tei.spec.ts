import {request, test,expect} from '@playwright/test'
 import { RestFull } from '../api2_auto/class_ob'
test.describe("api",()=> {
    test("calli", async ({request})=>{
      const result = new RestFull(request)

     const output = await result.id("9")

     const out = await result.getdetails()
     const ou=await result.getting()
     const ou1= ou[0]
      await expect(ou1.name).toBe("Apple MacBook Pro 16")
     console.log(ou)

     //const ou= await result.getting()
      //console.log(out)
     //console.log(output)
     //const r2= out[0]
     
     //expect(out[0].length).toEqual(13)
     //expect(out[1]).toBe(200)
     //expect(r2.name).toBe("Beats Studio3 Wireless")
     //const rl= output[1]
      //  expect(output[1]).toBe(200)
     
     //console.log(out)
     //console.log(output)

     //const result = new RestFull(request)
     //const res=await result.json()
     //const stat= result.statuscode()
     //expect(res.length()).toequal(13)
     //expect(stat).toBe(200)



    })


//######################################## here below two times its executed ok 

     test("creatingthe", async ({request}) => {
        const result1= new RestFull(request)
        const output = await result1.getting()
        console.log(output)
     })

    
})


test.describe("apiwr43qt",()=> {
    test("calli4ty2", async ({request})=>{
      const result = new RestFull(request)

     const output = await result.id("9")

     const out = await result.getdetails()
     const ou=await result.getting()
     const ou1= ou[0]
      await expect(ou1.name).toBe("Apple MacBook Pro 16")
     console.log(ou)
    })
})