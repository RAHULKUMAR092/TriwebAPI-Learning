// for in loop
/*
for(variable in referenceOfOject){
    refernceOfObject[variable]// access value of the property
}
*/

var student={
    studentName:"Rahul",
    email: "rahul092@gmail.com",
    branch:"cs",
    physics:60,
    chemistry:70,
    maths:80
};
// dot (.) accessor
for(let prop in student){
    console.log(prop,student[prop]);

    if(prop == "physics" || prop == "chemistry" || prop == "maths"){
        student[prop]=student[prop]+5;
    }

}
console.log(student);


