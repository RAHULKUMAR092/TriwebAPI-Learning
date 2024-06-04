// call 

var person = {
    age:20,
    birthday:function(){
        this.age++;
    }
};
console.log(person.age);//20
person.birthday();
console.log(person.age);
