import{test,expect} from "@playwright/test"
test.describe("call",()=>{
test("get",async({request})=>{
    let url ="https://api.restful-api.dev"
const response = await request.get(url)
const jasonresponse = await response.json()
console.log(jasonresponse)
const status= await response.status()
console.log(status)

});
   

})
test("get2",async({request})=>{
    let url ="https://api.restful-api.dev/objects" 
const response1 = await request.get(url)
const jasonresponse1 = await response1.json()
expect(jasonresponse1.length).toEqual(13)
console.log(jasonresponse1)
const status= await response1.status()
expect(status).toBe(200)
console.log(status)

});

//https://api.restful-api.dev/objects/{id}
test("get3",async({request})=>{
    let url ="https://api.restful-api.dev/objects/13"
const response1 = await request.get(url)
const jasonresponse1 = await response1.json()
//expect(jasonresponse1.length).toEqual(13)

console.log(jasonresponse1)
const status= await response1.status()
expect(status).toBe(200)
console.log(status)

});



test("post",async({request})=>{
    let url ="https://api.restful-api.dev/objects"

const response_body = {
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}

const response = await request.post(url,{
    data:response_body
})
//expect(jasonresponse1.length).toEqual(13)
const jsonresponse = await response.json()
expect(jsonresponse.data.year).toBe(2019)
//expect(jsonresponse.id).toBe("ff808181a067127101a07ce90d063c6f")
const created= jsonresponse.name
console.log(created)
console.log(jsonresponse)
const status= await response.status()
expect(status).toBe(200)
console.log(status)

});

test("post,put,patch",async({request})=>{
    let url ="https://api.restful-api.dev/objects"

const response_body = {
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}


const response = await request.post(url,{
    data:response_body
})
//expect(jasonresponse1.length).toEqual(13)
const jsonresponse = await response.json()
expect(jsonresponse.data.year).toBe(2019)
//expect(jsonresponse.id).toBe("ff808181a067127101a07ce90d063c6f")
const created= jsonresponse.name
console.log(created)
console.log(jsonresponse)
const status= await response.status()
expect(status).toBe(200)
console.log(status)
const newID=jsonresponse.id
console.log(newID)

const upadted_url= `${url}/${newID}`

const body={
    "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2020,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}

const res=await request.put(upadted_url,{
  data:body  
})

const convert =await res.json()

console.log(convert)


//########## patch method
let rbody={
    "name": "raviteja",
}

const patch= await request.patch(upadted_url,{
data:rbody
})

let resss= await patch.json()
console.log(resss)
const statusss= res.status()
expect(statusss).toBe(200)
console.log(statusss)
});








test("post,delete",async({request})=>{
    let url ="https://api.restful-api.dev/objects"

const response_body = {
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}


const response = await request.post(url,{
    data:response_body
})
//expect(jasonresponse1.length).toEqual(13)
const jsonresponse = await response.json()
expect(jsonresponse.data.year).toBe(2019)
//expect(jsonresponse.id).toBe("ff808181a067127101a07ce90d063c6f")
const created= jsonresponse.name
console.log(created)
console.log(jsonresponse)
const status= await response.status()
expect(status).toBe(200)
console.log(status)
const newID=jsonresponse.id
console.log(newID)

const upadted_url= `${url}/${newID}`

const deletebody= await request.delete(upadted_url)
const jsonre=await deletebody.json()
 expect(jsonre.message).toContain("Object")
//expect(jsonre.message).toBe("Object")
console.log(jsonre)
console.log( deletebody.status())

})


test.describe("api234 token authentication",()=>{
test("authentication12",async ({request}) => {
const Token="70c6b226ec62f1794db2086dafbf789658036eee54b0a3b78efd618dd9e5ded1"
  const url="https://gorest.co.in/public/v2/users"
  const response12=await request.get(url,{
    headers: {

      Authorization : `Bearer ${Token}`,
      'content-type': 'application/json'
    }
  })
    

const jsonres= await response12.json()
console.log(jsonres)
})
})