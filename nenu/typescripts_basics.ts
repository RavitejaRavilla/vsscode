function delay(ms:number):promise<number>{
return new promise(resolve => setTimeout(resolve,ms)):
}


async function run(){
console.log("start")
await run(2000)
console.log("after execution")

}
run();
console.log("end")


function name(ms:number):promise<void>{
    return new promise((resolve) =>{
        setTimeout(()=>{
            console.log("teja");
            resolve();
        }, ms);
    });

}

async function run(){
    console.log("start");
    await name(2000);
    console.log("after execution");
}






class Person {
    name: string
    age: number
    address: string

    constructor(name: string, age: number, address: string) {
        this.name=name
        this.age=age
        this.address=address

        
        
    }
   shownameaandage(){
    console.log(`Name: ${this.name},Age: ${this.age}`)
   }
}
 var obj=new Person("rahul",57,"kvb puram")
 obj.shownameaandage()