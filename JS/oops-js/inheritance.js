// proto in js
var person = {personName:"Rahul",age:20};
var student = {rollNo:101,marks:70};
var customer = {shippingAddress:"some city, some country"};

student.__proto__=person;
console.log(student);
// console.log(student.__proto__);
console.log(student.personName);
console.log(student.age);



