class Person {
    name: string
    age: number
    address: string

    constructor(name: string, age: number, address: string) {
        this.name = name
        this.age = age
        this.address = address
    }

    showNameAndAge(): void {
        console.log(`Name: ${this.name}`)
    }
showDetails(): void{
    this.showNameAndAge()
   console.log("address:", this.address) 
}


}

const obj = new Person("rahul", 25, "Hyderabad")

obj.showDetails()
