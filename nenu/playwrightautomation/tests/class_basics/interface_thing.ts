interface bankdetails{
    balance: number
    deposit(amount: number): void
    withdraw(amount: number):void
}

class Currentstatement implements bankdetails{
    balance: number
    constructor(balance: number=1000){
        this.balance=balance
    }
    deposit(amount:number):void{
        this.balance += amount
    }
    withdraw(amount: number):void{
        if(amount <= this.balance){
        this.balance -= amount
        //console.log("we cant able to withdraw");
        }
        if(amount >= this.balance){
        //this.balance -= amount
        console.log("we cant able to withdraw");
        }
    }
showCurrentBalance(): void{
    console.log(" current balance :",this.balance)
}

}
const obj=new Currentstatement()

obj.deposit(5000)
obj.showCurrentBalance()
obj.withdraw(10000)
obj.showCurrentBalance() 