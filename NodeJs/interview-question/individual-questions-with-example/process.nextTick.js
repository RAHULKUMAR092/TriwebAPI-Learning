function add(callfrom, n1,n2){
    console.log(callfrom," ",n1+n2);
}

setImmediate(()=>{
    add("SetImmediate",1,2);
});

setTimeout(()=>{
    add("SetTimeout",2,3);
},0);

process.nextTick(()=>{
    add("Process NextTick",4,5);
});

/*
-> It puts its callback at the front of the EVENT QUEUE.
-> Execute after the code currently being executed, but before IO EVENTS, or TIMERS
*/


add("Direct",3,4);