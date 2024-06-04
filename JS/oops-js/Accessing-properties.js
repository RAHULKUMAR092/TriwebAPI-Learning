// accessing properties
let customer = {
    customerName:"Scott",
    email:"rahul092@gmail.com",
    1:"hello"
};
console.log(customer.customerName);// dot notsation
console.log(customer["customerName"]);

customer.email= "rahul092@gmial.com";
console.log(customer["email"]);
console.log(customer[1]);
console.log(customer);
