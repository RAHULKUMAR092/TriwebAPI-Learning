
//function
/*
function(parameter,parameter2,...){
    function boda here
}
*/
let getSimmpleInterest=function(principle,rateOfInterest,noOfYears){
    let si =(principle*rateOfInterest*noOfYears)/100;
    return (si);
 }

 let si1=getSimmpleInterest(1000,6.7,3);

let si2=getSimmpleInterest(7000,4.5,10);
//  console.log(getSimmpleInterest(1000,6.7,3));
 
 console.log(si1);
 console.log(si2);

