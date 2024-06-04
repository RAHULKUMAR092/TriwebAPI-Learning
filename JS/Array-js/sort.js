// sort in js
// [].sort(function(a,b){ return 0,1,or -1}); 
// less than 0 : a comes first : and then b. 
var numericalArray = [56,23,6,120,100];
var sortedNumericaArry = numericalArray.sort(
// numericalArray.sort(
    (a,b)=>{
        // console.log(a,b);

        return a - b;
    }
)
console.log(sortedNumericaArry);

// sort - string Array
var stringArray = ["Rahul","Allen","ford","smith","doe"];
var sortedStringArray = stringArray.sort((a,b)=>{
    if(a>b){
        return 1;
    }else if(a<b){
        return -1;
    }else{
        return 0;
    }
})
console.log(sortedStringArray);


// sort - object array
products = [
    {id:1, productName:"Tv",price:5000},
    {id:2, productName:"mobile",price:10000},
    {id:3, productName:"phone",price:2000},
    {id:4, productName:"lcd",price:4000},
]
var sortedProduct = products.sort((a,b)=>{
    return a.price - b.price;
})
console.log(sortedProduct);
