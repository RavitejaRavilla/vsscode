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
