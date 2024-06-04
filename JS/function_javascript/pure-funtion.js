/*
pure function

function(paramete1,parameter2,..){
    // pure funtion does not access any external value.
    // it returns identical return value to identical arguments.


}

*/

let getSquare = function(n){
    let sq = n*n;
    return sq;
}
console.log(getSquare(5));
console.log(getSquare(16));
console.log(getSquare(23));


