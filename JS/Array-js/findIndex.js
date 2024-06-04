//findIndex
var products = [
    { id: 1, productName: 'Samsung TV', price: 800, brand: "Samsung" },
    { id: 2, productName: 'Apple iPod', price: 774, brand: "Apple" },
    { id: 3, productName: 'LG Monitor', price: 1200, brand: "LG" },
    { id: 4, productName: 'Apple iPad', price: 3500, brand: "Apple" },
    { id: 5, productName: 'Apple iPhone', price: 2200, brand: "Apple" }
  ];
  
  var firstExpensiveProductIndex = products.findIndex((p) => {
    return p.price >= 2000;
  });
  
  console.log(firstExpensiveProductIndex); //3
  
  products.splice(firstExpensiveProductIndex, 0, { id: 300, productName: "Head phones", price: 33, brand: "Sony" }); //add new object at that index
  
  console.log(products);
  