/*
higher order function

function doWork(myFunctionRef){
    function body here
    myFunctionRef(){// code 1};
}
let variableName = doWork(function(){});
VariableName();

*/
let doSomeWork = function(){
    return function(){
        return "Hello";
    };
};
let result = doSomeWork();
console.log(result());
