// set and get method

class Person{
    #personName;
    #age;

    setPersonName(value){
        if(value == null||value == undefined){
            console.error("Null or undefined is not allowed for personName");

        }else{
            if(value.length>=30){
                console.error("personName length can't be more than 30 charactes.");

            }else{
                this.#personName = value;
            }
        }
    }// end set method
    getPersonName(){
        return this.#personName;
    }

    // age set method
    setAge(value){
        if(value >=0 && value <=100){
            this.#age = value;
        }else{
            console.error("Age must be in between 0 to 100 only");

        }
    }
    getAge(){
        return this.#age;
    }
}// end of the class

var person1 = new Person();
// person1.setPersonName(null);
// person1.setAge(10);
// var s;
person1.setPersonName("gfcouycvyvbuypvycyv");
person1.setPersonName("Rahul")
person1.setAge(10)
