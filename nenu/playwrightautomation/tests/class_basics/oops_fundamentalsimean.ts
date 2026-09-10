class Person {
    name: string
    age: number
    address: string

    constructor(name: string,age: number,address: string) {
        this.name=name
        this.age=age
        this.address=address
    }

showNameAndAge(){
    console.log(`Name: ${this.name}`)
}

}
const obj = new Person("rahul", 25, "Hyderabad");
obj.showNameAndAge()