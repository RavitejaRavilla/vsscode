class abt{
 tname: string
 age: number
email: string
constructor(name: string,age:number,email:string){
    this.name=name
    this.age=age
    this.email=email
}
//we can access outside the class as well
public showage(){
    console.log(this.age)
}
// we can only access this in with in the class
private showname(){
    console.log(this.name)
}
//we can access this in same class and his child class
protected showemail(){
    console.log(this.name)
}

}
var obj=new abt("name",30)
obj.showage()

