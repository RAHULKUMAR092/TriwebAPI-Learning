/*
// perentMethod 
class PerentClassName{
    perentProperty;

    constructor(){
        this.perentProperty = value;
    }
    perentMethod(){ } // parent class method
}

// child class

class ChildClassName extends PerentClassName{
    childProperty; // child class propety

    constructor(){
        super(); // calling perent class constructor

        this.childProperty = value;
    }
    childMethod(){} // child class method
}

*/


//class inheritance

//parent class
class Teacher
{
  teacherName;

  constructor(teacherName)
  {
    this.teacherName = teacherName;
  }
}

//child class
class PhysicsTeacher extends Teacher
{
  mainSubject;

  constructor(mainSubject)
  {
    super("Allen");
    this.mainSubject = mainSubject;
  }

  getDetails()
  {
    return `Teacher Name: ${this.teacherName}, Main Subject: ${this.mainSubject}`;
  }
}

//object of parent class
var teacher = new Teacher("Scott");
console.log(teacher);

//object of child class
var physicsTeacher = new PhysicsTeacher("Physical Sciences");
console.log(physicsTeacher);
console.log(physicsTeacher.getDetails());
