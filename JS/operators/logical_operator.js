// && = and(both ture)
// ||=> OR (least one condition true)
// ! => not(given)

var a = 10, b=100, c=50;
var d = a==b && b>c;//10==100=false
console.log(d); // false

var e = a ==b || b>c; // false || true
console.log(e); // true

var f = !(a==b); // !(false: true)
console.log(f);//true


