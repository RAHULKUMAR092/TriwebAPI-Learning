/*
settime function 

function callBackFunction(){
    function body here
}
setTimeout(callBackFunction, milliseconds); // pass reference of callbackFunction to settimeout

// 1000 milliseconds = 1 sec

*/
function SayHello(){
    console.log("Hello");
}

function SayGoodBye(){
    console.log("Good Bye");
}
SayHello();
setTimeout(SayGoodBye,5*1000);



