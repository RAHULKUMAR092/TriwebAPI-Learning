// adding properties in js

var student = {};
console.log(student);
student.marks= 70;
student.getResult = function(){
    if(this.marks >=35)
        return "Pass";
    else
    return "Fail";
};
console.log(student);
console.log(student.marks);
console.log(student.getResult());
