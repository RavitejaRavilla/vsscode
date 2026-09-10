class person{
    name: string
    age: number
    
   
constructor(name: string,age: number){
this.name= name
this.age=age

}
addition(a:number,b:number):void{
   console.log(a+b)
}

showname(){
    console.log(this.name)

}

}
//const ab=new person("teja",30)
//ab.showname()

class avai extends person{
   
constructor(name: string,age: number){
    super(name,age)
}

addition1(a:number,b:number,c:number):void{
   console.log(a+b+c)
}
showname(){
    console.log(this.age)

}

}
const ab=new avai("teja",30)

ab.addition(5,19)
ab.addition1(5,19,27)
ab.showname()