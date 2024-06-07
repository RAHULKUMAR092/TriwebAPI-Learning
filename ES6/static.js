//static properties and static methods in classes
class Student
{
  studentName;
  marks;

  constructor(studentName, marks)
  {
    this.studentName = studentName;
    this.marks = marks;
    Student.studentCount++;
  }

  //static method
  static compareStudentMarks(stu1, stu2)
  {
    return stu1.marks - stu2.marks;
  }

  //static property
  static studentCount = 0;
}

var firstStudent = new Student("John", 90);
var secondStudent = new Student("Allen", 67);
var thirdStudent = new Student("Bob", 74);
console.log(firstStudent);
console.log(secondStudent);
console.log(thirdStudent);
console.log(Student.compareStudentMarks(thirdStudent, secondStudent)); //7
console.log(Student.studentCount); //3
