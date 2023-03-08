let balance = {"Ashish":1200, "Sam":2000, "Noob":100};

function withdraw(name, amount){
    if(balance[name] - amount >= 0){
        balance[name] -= amount;
    } else {
        console.log("Insufficient funds. Withdrawal failed.");
    }
}
function deposit(name, amount){
    balance[name] += amount;
}

withdraw("Sam", 200);
console.log(balance);