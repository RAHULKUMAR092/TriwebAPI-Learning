/*
for(intialization; condition1; incremention){
    for(intialization; condition2; incremention){
        inner loop code here
    }
    outer loop code here
}

*/
var str ="";
for(var i=1; i<7; i++){
    for(var j=1; j<=5;j++){
        str = `${str}${j}`;
    }
    str=`${str}\n`;
}
console.log(str);
