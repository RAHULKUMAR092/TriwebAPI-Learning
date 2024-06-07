//accessor

//'set' and 'get' methods
/*
  class Person
    - personName
    - age

    - setPersonName()
    - getPersonName()

    - setAge()
    - getAge()
*/

class Person
{
  #personName;
  #age;
  #title = "Mr.";

  //personName - set and get
  set PersonName(value)
  {
    //Requirement 1: personName can't be null or undefined
    if (value == null || value == undefined)
    {
      console.error("Null or undefined is not allowed for personName");
    }
    else
    {
      if (value.length >= 30)
      {
        console.error("personName length can't be more than 30 characters.");
      }
      else
      {
        this.#personName = value;
      }
    }
  } //end of method

  get PersonName()
  {
    return `${this.#title} ${this.#personName}`;
  }

  //age - set and get
  set Age(value)
  {
    if (value >= 0 && value <= 100)
    {
      this.#age = value;
    }
    else
    {
      console.error("Age must be in between 0 to 100 only.");
    }
  }

  get Age()
  {
    return this.#age;
  }
} //end of class

var person1 = new Person();
//person1.PersonName = null; //error
//person1.PersonName = "kjsdfh kjsdhf kjsdh fjsdh fkjhsd fkjhs dkfjh sdfhiusgheuighjhg"; //error
//person1.Age = 200; //error

person1.PersonName = "Rahul"; //personName property will be assigned to "John"
person1.Age = 20; //age property will be assigned to 40
console.log(person1.PersonName); //the get method returns the value "John"
console.log(person1.Age); //the get method returns the value 40
