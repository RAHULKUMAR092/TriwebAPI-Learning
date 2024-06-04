// filter js
var products=[
    {id:2,productName:"tv",prices:5000},
    {id:3,productName:"phone",prices:1200},
    {id:4,productName:"iphone",prices:2000}
]


console.log(products.filter(
    (p)=>{
        return p.prices >= 4000;
        // return true;
    }
));
