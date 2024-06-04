/*
this key word = > this = { }

*/
var person = {
    personName:"scott",
    birthDay: function(){
        console.log(this);
        return "Happy Birthday";
    }
}
console.log(person.birthDay());
