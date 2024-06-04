/*
Default Arguments
function(parameter = value,..){
    function body here...
}
# function that calculates net price based on the given  price and tax rates.

*/
let getNetPrice = function(price,taxRate){
    let netPrice = price+(price * taxRate/100);
    return netPrice;
}
let netPriceOfProduct1= getNetPrice(1000,10);
console.log(netPriceOfProduct1);
let netPriceOfProduct2= getNetPrice(5600,15);
console.log(netPriceOfProduct2);

