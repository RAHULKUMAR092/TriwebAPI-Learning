/*
In call() we pass arguments

In apply() we pass array
*/

function marksDetails(...marks){

    this.subject1 = marks[0];
    this.subject2 = marks[1];
    this.subject3 = marks[2];
    this.subject4 = marks[3];
    this.subject5 = marks[4];

    let status = 'pass';
    marks.forEach((num)=>{
        if(num < 33){
            status = 'fail';
        }
    })

    this.result = status;

}

function student(sname, ...marks){
    this.sname = sname;
    marksDetails.apply(this, marks)
}

const std1 = new student("Azhar", 45,32,36,79,98);

console.log(std1);