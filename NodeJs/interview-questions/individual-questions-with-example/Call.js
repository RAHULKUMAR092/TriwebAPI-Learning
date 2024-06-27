function product(productName, price){
    this.productName = productName;
    this.price = price
}

function student(sname, productName, price){
    // this.productName = productName;
    // this.price = price
    product.call(this,productName,price);
    this.sname = sname;
}

const student1 = new student("Akarsh", "Laptop", 2000)
console.log(student1.sname," Purchased a ", student1.productName,' for Rs ', student1.price);
