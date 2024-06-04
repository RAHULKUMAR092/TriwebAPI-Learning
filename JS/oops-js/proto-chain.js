// proto chain

var person ={personNaem:"Rahul",age:20};
var student = {roolNo:10,marks:70};
var medicalStudent={mainSubject:"Biology"};

student.__proto__==person;
medicalStudent.__proto__=student;

console.log(medicalStudent,medicalStudent.__proto__);
console.log(student,student.__proto__);
console.log(student,person.__proto__);

console.log(medicalStudent.personNaem);
