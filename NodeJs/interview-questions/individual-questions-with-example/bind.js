//Change the 'this' for some object
//but call it later

/*
-> The siplest use of bind is to make a fucntion that, no matter how it is called, is called with a particular 'this'

-> In call(), and apply() we bind 'this' and execute funtion at a time, while
    in bind() we bind 'this' now and execute it later
*/
let student2 = {
    sname: "Ramesh",
    mobile: 111111
}

let student = {
    sname: "Anzar",
    mobile: 897878,

    getName: function(){
        console.log(this.sname);
    }
}

let sn =  student.getName.bind(student);
setTimeout(sn,1000) // Anzar after 1 sec

let st2 = student.getName.bind(student2);
setTimeout(st2,1000);// Ramesh