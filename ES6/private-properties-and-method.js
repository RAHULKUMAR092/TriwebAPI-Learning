// private properties and private methods

class Customer{
    customerId;
    CustomerName;

    constructor(customerId,CustomerName,creditCardNumber){
        this.customerId = customerId;
        this.CustomerName = CustomerName;
        this.creditCardNumber = creditCardNumber;
    }
}

var Customer1 = new Customer(101, "Rahul",12345);
console.log(Customer1.customerId);
console.log(Customer1.CustomerName);
console.log(Customer1.creditCardNumber);
