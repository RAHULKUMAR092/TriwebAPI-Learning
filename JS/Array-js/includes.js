// includes
var iphone = {id : 6,productName:"sale",prices:1500}
var products=[
    {id:2,productName:"tv",prices:5000},
    {id:3,productName:"phone",prices:1200},
    {id:4,productName:"iphone",prices:2000},
    {id:4,productName:"led",prices:3000},
    iphone
]

var res=products.includes(iphone);

console.log(res);
