// goal: to get grade of the student based on securedd mak.
/*

*/ 

var securedMarks=28,grade;
if(securedMarks >=35){
if(securedMarks>=80){
    grade="A";

}else if (securedMarks>=60 && securedMarks<80) {
    grade="B";
}else if (securedMarks>=35 && securedMarks<60) {
    grade="C";
}
}else{
    grade="Fail";
}

console.log(grade);