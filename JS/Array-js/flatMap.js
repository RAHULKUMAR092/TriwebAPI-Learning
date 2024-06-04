// flatMap in js
// [].flatMap(function(elemnet){return valve:});

products = [
    {id:1, productName:"Tv",price:5000},
    {id:2, productName:"mobile",price:10000},
    {id:3, productName:"phone",price:2000},
    {id:4, productName:"lcd",price:4000},
]

let updateProducts = products.flatMap((p)=>{
    var p2 = {...p,price:p.price+(p.price*10/100)};
    return [p,p2];
})
console.log(updateProducts);