// find method
// filter js
var products=[
    {id:2,productName:"tv",prices:5000},
    {id:3,productName:"phone",prices:1200},
    {id:4,productName:"iphone",prices:2000},
    {id:4,productName:"led",prices:3000}
]


var find=(products.find(
    (p)=>{
        return p.prices >= 2000;
        // return true;
    }
));
console.log(find);
