

var employee = {
    firstName: "Smith",
    lastName: "John",
    designation: "clerk", // Corrected typo from "cleak"
    salary: 3000,
    workExperienceYears: 4,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    promote: function () {
        var isEligibleForPromotion = false; // Declare the variable
        if (this.designation === "clerk") { // Corrected typo from "cleak"
            if (this.workExperienceYears >= 3) {
                isEligibleForPromotion = true;
                this.designation = "Asst.Manager";
                this.salary += this.salary * 0.1; // 10% increase
            }
        } else if (this.designation === "Asst.Manager") {
            if (this.workExperienceYears >= 5) {
                isEligibleForPromotion = true;
                this.designation = "Manager"; // Corrected designation
                this.salary += this.salary * 0.2; // 20% increase
            }
        }
        return isEligibleForPromotion;
    }, // end of function
};

console.log(employee);
console.log("Full Name:", employee.getFullName());
if (employee.promote()) {
    console.log("Congratulations! The employee has been promoted.");
    console.log("Updated Salary:", employee.salary);
    console.log("Updated Designation:", employee.designation);
} else {
    console.log("Employee is not eligible for promotion.");
}
