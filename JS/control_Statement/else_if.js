// goal to get grade of the student based on secured marks

/*


*/
var securedMarks = 70, grade;
if(securedMarks >=80){
    grade = "A";
}
else if(securedMarks >=60 && securedMarks<80){
    grade = "B";
}
else if(securedMarks >=35 && securedMarks<60){
    grade = "c ";
}else{
    grade="Fail";
}
console.log(grade);


