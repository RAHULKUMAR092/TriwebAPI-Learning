// map ()
// [].map(function(elemnet){reture value;});

products = [
    {id:1, productName:"Tv",price:5000},
    {id:2, productName:"mobile",price:10000},
    {id:3, productName:"phone",price:2000},
    {id:4, productName:"lcd",price:4000},
]
var updateProducts=products.map((p)=>{
    p.price += p.price*10/100;
    p.productName = p.productName.toUpperCase();
    return p;
});
console.log(updateProducts);

