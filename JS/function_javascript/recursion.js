/*
recursion

var functionName = function(paramete1,parameter2){
    functionName 
}
*/
// factoial number prog.

let factorial = function(n){
    if(n==1){
        return 1;

    }else{
        return factorial(n-1)*n;
    }
}

console.log(factorial(5));

