//closures

//closure begins
var bankAccount = function()
{
  var accountBalance = 1000;
  var somePrivate = function() {

  };
  var deposit = function(depositAmount)
  {
    accountBalance = accountBalance + depositAmount;
  };
  var withdraw = function(withdrawAmount)
  {
    accountBalance = accountBalance - withdrawAmount;
  };

  var getCurrentBalance = function()
  {
    return accountBalance;
  }

  return { deposit, withdraw, getCurrentBalance }; //return public methods
}
//closure ends

var firstAccount = bankAccount();
var secondAccount = bankAccount();
console.log(`Initial First Account Balance: ${firstAccount.getCurrentBalance()}`); //1000
console.log(`Initial Second Account Balance: ${secondAccount.getCurrentBalance()}`); //1000

firstAccount.deposit(200);
console.log(`First Account Balance after Deposit: ${firstAccount.getCurrentBalance()}`); //1200

secondAccount.deposit(100);
console.log(`Second Account Balance after Deposit: ${secondAccount.getCurrentBalance()}`); //1100

firstAccount.withdraw(50);
console.log(`First Account Balance after Withdraw: ${firstAccount.getCurrentBalance()}`); //1150

secondAccount.withdraw(300);
console.log(`Second Account Balance after Withdraw: ${secondAccount.getCurrentBalance()}`); //800
