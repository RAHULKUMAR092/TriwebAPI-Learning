// slice in js 
// [].slice(startIndex, endIndex);
products = [
    {id:1, productName:"Tv",price:5000},
    {id:2, productName:"mobile",price:10000},
    {id:3, productName:"phone",price:2000},
    {id:4, productName:"lcd",price:4000},
    {id:5, productName:"led",price:5000},
    {id:6, productName:"soni",price:7000},
    {id:7, productName:"sumsang",price:6000},
    {id:8, productName:"boot",price:4000},
];

var upslice = products.slice(2, 5);
console.log(upslice); // 2,3,4 indexes
