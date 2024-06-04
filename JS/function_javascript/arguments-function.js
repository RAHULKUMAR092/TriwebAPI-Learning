// argument keyword- demo
/*
function(parameter1, parameter2){
    argument = all argument received in the function
}
*/
let getCartBill = function(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        // console.log(arguments.length);
        sum = sum+arguments[i];

    }
    return sum;
}
console.log(getCartBill(13));// price of product
console.log(getCartBill(13,90,120,4));// price of product
console.log(getCartBill(13,90,120,4,10,));// price of product




