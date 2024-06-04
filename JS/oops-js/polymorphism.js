// polymorphism in js

var person ={
    personName :"rahul",
    age:20,
    getDetail:function(){
        return `person Name: ${this.personName}. His age is : ${this.age}`;

    }
};

var teacher = {
    mainSubject : "Maths",
    getDetail : function(){
        return `Teacher's main subject : ${this.mainSubject}`;
    }
}

teacher.__proto__ = person; // inheritance
console.log(teacher.getDetail());// call child method


