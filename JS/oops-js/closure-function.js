// closure simple ex.

function bankAccountDeposit(){
var currentBalance = 1000;

let deposit = function(depositAmount){
    currentBalance = currentBalance + depositAmount;
    return `Account balance: ${currentBalance}`;
}
return deposit;
}
var dp=bankAccountDeposit();
console.log(dp(200));
console.log(dp(150));
