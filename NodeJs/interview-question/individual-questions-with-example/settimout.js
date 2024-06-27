function add(callby,n1,n2){
    console.log(callby,":",n1+n2);
}


setImmediate(()=>{
    add("SetImmediate",2,3);
}) //callback register with CHECK QUEUE for next cycle

setTimeout(() => {
    add("SetTimeout",3,4);
}, 0);//callback register with TIMER QUEUE for next cycler

add("Direct",1,2);