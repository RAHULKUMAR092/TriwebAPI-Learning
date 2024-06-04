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

calculateTotalMarks.call(student1,30,70,80);
calculateTotalMarks.apply(student2,[30,70,80]);
