// destructuring object
var person = {firstName:"rahul",lastName:"kumar",age:"25",
    city:"New York",country:"USA"
};
// var fn = person.firstName;
// var ln = person.lastName;
// var g = person.age;

var {firstName:fn, lastName:ln,age:g,...other} = person;
console.log(fn);
console.log(ln);
console.log(g);
console.log(other);


