/*
Scope of variables
var variableName;// global variable (till end of program)
let variableName;// global variable (till end of program)
function(parameter){
    var variableName; // local variable(till end of function)
    let variableName; // local variable(till end of function)
    
    if(condition){// or any other block such as - for block while block etc.
    var variableName;    
    let variableName;    
    }
}
*/
console.log(a);
// console.log(b);
var a = 10;
let b = 20;
console.log(a);
console.log(b);


function myFunction(){
    var c = 30;
    let d = 40;

    if(c==d){
        var e = 50;// local variablr
        let f = 60; // block level
    }
}
myFunction();
