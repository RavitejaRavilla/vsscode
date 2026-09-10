class BankAccount{
    accountNumber: number 
    accountholdername: string
    balance: number
    

    constructor(accountNumber: number ,accountholdername: string, balance: number){
            this.accountNumber = accountNumber
            this.accountholdername = accountholdername
            this.balance = balance
    }
   showAccountDetails(){
        console.log("account number=",this.accountNumber)
        console.log("account name=",this.accountholdername)
        console.log("account balance=",this.balance)
    }
     
}


class SavingsAccount extends BankAccount{
     constructor(accountNumber: number ,accountholdername: string, balance: number){
     super(accountNumber,accountholdername,balance)

     }

deposit(amount: number){
    this.balance += amount
}
showtotalbalance(){
    console.log("total balance=",this.balance)
}

}

const obj= new SavingsAccount(1234455667,"ravi",5000)

obj.showAccountDetails()
obj.deposit(5000)
obj.showtotalbalance()
