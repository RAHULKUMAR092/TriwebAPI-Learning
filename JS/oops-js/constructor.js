// constructor function

var createEmployee = function(a,b,c){
    var employee = {};
    employee.employeName = a;
    employee.employeeId = b,
    employee.salary = c;
    employee.getEmployeeName = function(){
        return this.employeName;
    }
    return employee;
}

var employee1 = createEmployee("scott",1,100);

var employee2 = createEmployee("Allen",2,2000);

console.log(employee1);
console.log(employee2);





