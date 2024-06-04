// forEach method

function increaseQuantiy(){
    this.quantity++;
}
 
var products = [
    {id:1, productName : "tv",quantity:0,increaseQuantiy:increaseQuantiy},
    {id:2, productName : "phone",quantity:0,increaseQuantiy:increaseQuantiy},
    {id:3, productName : "mobile",quantity:0,increaseQuantiy:increaseQuantiy},
    {id:4, productName : "ipad",quantity:0,increaseQuantiy:increaseQuantiy}
]

products.forEach((p)=>{
    p.increaseQuantiy();
})
console.log(products);
