var mongoose = require("mongoose");

var EmployeesSchema = new mongoose.Schema({
    empid: Number,
    empname: String,
    salary: Number
});

var EmployeesModel = mongoose.model("employees", EmployeesSchema);

mongoose.connect("mongodb://localhost/company", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        insertData();
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });

async function insertData() {
    try {
        const newEmployee = new EmployeesModel({
            empid: 504,
            empname: "Ram",
            salary: 10000
        });
        const result = await newEmployee.save();
        console.log("Data inserted:", result);
    } catch (error) {
        console.error("Error inserting data:", error);
    }
    mongoose.disconnect();

}
