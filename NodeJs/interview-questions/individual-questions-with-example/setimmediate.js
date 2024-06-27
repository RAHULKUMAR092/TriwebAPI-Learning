//- Not immediate as its name
// - Its callback is place in the "check queue"  of the next cycle of the event loop
//- CHECK QUEUE, occurs later than the TIMER QUEUE.

let a = 1;
let b = 2;

function addTwoNumer(n1,n2){
    console.log(n1+n2)
}

setImmediate(()=>{
    addTwoNumer(a,b)
}); // callback register
//1. Can I call the above function inside setImmediate?
// Callback should be a function.
// Yes we can pass a function as a callback


console.log("Inside event loop 1");

//What is the output of this program.?
//Inside event loop 1
//3
