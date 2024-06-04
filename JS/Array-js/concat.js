// concat - Attaches the given array to the actual array
var products1=[
    {id:1,productName:"tv",prices:4000},
    {id:1,productName:"phone",prices:3000}
];

var products2=[
    {id:2,productName:"tv",prices:4000},
    {id:3,productName:"phone",prices:3000},
    {id:4,productName:"iphone",prices:13000}
]

var allProducts = products1.concat(products2);
console.log(products1);
console.log(products2);
console.log(allProducts);
