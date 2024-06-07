// class ES6
/*
class Car{
    regNo;
    carModel;
    carYear;

    calculateEmi(carPrice, noOfMonths,interestRate){

    }
}
*/

class Employee{
    empId;
    empName;
    salary;

    getEmployeeName(){
        return this.empName;
    }

    hikeSalary(amount){
        this.salary = this.salary + amount;
    }

}
let employee1 = new Employee();
employee1.empId=101;
employee1.empName="Rahul kumar";
employee1.salary=30000;

console.log(employee1);
console.log(employee1.getEmployeeName());

employee1.hikeSalary(700);
console.log(employee1);

