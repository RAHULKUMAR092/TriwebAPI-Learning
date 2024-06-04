// apply function in js

var student1 ={
    studentName:"rahul",
    section: "A"
};

var student2 ={
    studentName:"chundan",
    section: "A"
};

function calculateTotalMarks(subject1, subject2,subject3){
    let totalMarks = subject1 + subject2 + subject3;
    let message = `hey ${this.studentName}, your total marks is : ${totalMarks} `;
    console.log(message);

}

var student1Cal= calculateTotalMarks.bind(student1)
// ,);
student1Cal(30,70,80);

var student2Cal= calculateTotalMarks.bind(student2)

calculateTotalMarks.apply(student2,[30,70,80]);
student2Cal(60,70,80);

