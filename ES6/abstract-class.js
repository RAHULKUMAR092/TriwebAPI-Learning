//Abstract classes

//parent class = base class = super class
class Person
{
  personName;
  age;

  constructor(personName, age)
  {
    if (this.constructor == Person)
    {
      throw new Error("Abstract class Person can't be instantiated");
    }
    this.personName = personName;
    this.age = age;
  }

  getDetails()
  {
    return `Person Name: ${this.personName}, Age: ${this.age}`;
  }
}

//child class = derived class = sub class
class Teacher extends Person
{
  mainSubject;

  constructor(personName, age, mainSubject)
  {
    super(personName, age); //invoke parent class's constructor
    this.mainSubject = mainSubject;
  }

  getDetails()
  {
    return `${super.getDetails()}, Main Subject: ${this.mainSubject}`; //optially call the parent class's method using "super" keyword
  }
}

//object of parent class
//var person = new Person("John", 30); //Error
//console.log(person);

//object of child class
var teacher = new Teacher("Jones", 25, "Chemistry");
console.log(teacher);
console.log(teacher.getDetails()); //invokes Teacher.getDetails()  - child class's method and parent class's method also
