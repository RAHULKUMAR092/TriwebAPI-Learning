/// array in js
var prices = [500,600,300]
prices[0] = 10;
console.log(prices);
console.log([500,600,300].length);

console.log("Element using loop");

for(let i=0; i<prices.length; i++){
    console.log(prices[i]);
}

// array of objects
var students=
[
    {studentName : "Rahul",age : 17},
    {studentName : "jons",age : 20},
    {studentName : "scott",age : 25}
];

console.log(students);
console.log("students using loop");

for(let i=0; i<students.length; i++){
    console.log(students[i]);
}


