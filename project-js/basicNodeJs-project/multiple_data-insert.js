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
        insertMultipleData();
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });

async function insertMultipleData() {
    try {
        const employees = [
            { empid: 110, empname: "chandan", salary: 50000 },
            { empid: 111, empname: "Rachit", salary: 60000 },
            { empid: 113, empname: "Golu", salary: 55000 }
        ];
        const result = await EmployeesModel.insertMany(employees);
        console.log("Multiple data inserted:", result);
    } catch (error) {
        console.error("Error inserting multiple data:", error);
    }
    mongoose.disconnect();
}
