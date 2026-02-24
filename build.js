"use strict";

const account = {
    owner: 'Rashad',
    balance: 0,
    transactions: [],
    isActive: true,


    deposit: function(amount) {
        if(!this.isActive) {
            return 'Action Rejected';
        }

        if(amount <= 0) {
            return 'Invalid Input, Try Again.'
        }

        this.balance += amount;

        this.transactions.push(amount);

        return this.balance;        
    },

    withdraw: function(amount) {
        if(!this.isActive) {
            return 'Action Rejected'
        };

        if(amount <= 0) {
            return 'Invalid Input, Try Again'
        };

        if(amount > this.balance) {
            return `Can't perform this action`
        };

        this.balance -= amount;

        this.transactions.push(-amount);

        return this.balance;
    },

    showTransactions: function() {
        for(let i = 0; i < this.transactions.length; i++) {
            console.log(this.transactions[i]);
        }
    }


};

console.log(account.deposit(700))
account.deposit(500);
account.deposit(500);
account.deposit(200);
account.deposit(200);
account.deposit(800);
account.deposit(2000);
account.deposit(200);



console.log(account.withdraw(800));
account.withdraw(200)
account.withdraw(900);
account.withdraw(70);
console.log(account.transactions);

account.showTransactions();

console.log(account)




