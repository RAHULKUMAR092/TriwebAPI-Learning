/*
setInterval

function callBackFunction(){
    function body here
}
setInterval(callBackFunction, milliseconds);

// 1000 millisecond = 1 sec.
*/

function callBack(){
    console.log("Hello");
}
var myInterval= setInterval(callBack,2000);

function stopInterval(){
    clearInterval(myInterval);
}

setTimeout(stopInterval, 20*1000);