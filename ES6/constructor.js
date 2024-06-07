// constructor in js 

/* constructor(parameters){
     this.property1 = valve;
 }
*/

class Preson{
    personName; //= "No Name";
    age;
    email;
    
    constructor(pName,ag,em){
        this.personName = pName;
        this.age = ag;
        this.email =em;

    }
}

var person1 = new Preson("Rahul",20,"Rahul09@gmail.com")
console.log(person1.personName,person1.age,person1.email);

var person2 = new Preson("king",25,"king09@gmail.com")
console.log(person2.personName,person2.age,person2.email);
