
// nullish 

function printSomething(value){
    printThis = value ?? "not found";
    console.log(`printThis is  ${printThis}`);

}

let var1 = null;
printSomething("");
