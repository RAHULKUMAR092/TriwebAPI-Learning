/*
callback function 

function doWork(){
    functio body here
    myFunction(); // call the callback function

}
function callbackFunction(){
    function body here
}
doWork(callbackFunction); // pass reference of callbackfunction to doWork.

*/

function Callback1(name,age){
    console.log(`callback 1: Name is ${name}, age is ${age}`);
}
function Callback2(name){
    console.log(`callback 2; Name is ${name}`);
}

function DoWork(name,age){
    name = "Mr"+name;
    age++;
    Callback1(name,age)
}
DoWork(" Scott",20);

