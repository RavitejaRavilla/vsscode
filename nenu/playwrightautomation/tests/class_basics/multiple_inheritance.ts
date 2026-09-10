abstract class savingaccount {
    balance: number
    address: string
    constructor( balance: number, address: string) {
        this.balance=balance
        this.address=address
        
    }

    showbalance(){
        console.log("total balance",this.balance)
    }
    abstract deposit(amount: number):void
    abstract withdraw(amount: number):void
}
//const obj= new person(2000,"rural")
//obj.showbalance()


 abstract class bankaccount extends savingaccount{
constructor( balance: number, address: string) {
      super(balance, address)

    }
deposit(amount: number):void{
    this.balance += amount
}
totalbalance(){
    console.log("all available balance", this.balance)
}
}


class debitcard extends bankaccount{
    constructor( balance: number, address: string) {
      super(balance, address)

    }

    withdraw(amount: number):void{
        this.balance -= amount

    }
    showwithdrawbala(){
        console.log("card withdraw balance",this.balance)
    }
}
const obj= new debitcard(5000,"rural")
obj.totalbalance()
obj.deposit(10000)
obj.totalbalance()
obj.withdraw(5000)
obj.showwithdrawbala()