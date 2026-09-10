import{APIRequestContext} from "@playwright/test"
export class RestFull{
    readonly request : APIRequestContext

constructor(request:APIRequestContext){
    this.request = request
}

async getdetails(){
    const url="https://api.restful-api.dev/objects"
     const response= await this.request.get(url)
     const responseBody= await response.json()
     const status=await response.status()

    return [responseBody,status]
}

async id(ID){
    const url = "https://api.restful-api.dev/objects"
    const updated_url = `${url}/${ID}`
    const response = await this.request.get(updated_url)
    
    const responseBody = await response.json()
    const status = response.status()

    return [responseBody, status]
 //here directly we can return response and test file we write the logic in test thats it like below 
    // const url = "https://api.restful-api.dev/objects"
    //const updated_url = `${url}/${objectid}`
    //const response = await this.request.get(updated_url)
    //return response
}
    
async getting(){
    const request_body ={
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
     }
    }
    const url="https://api.restful-api.dev/objects"
     const res=await this.request.post(url,{
    data: request_body
     })
    const resjson= await res.json()
     const status= await  res.status()

     return[resjson,status]

}


}


