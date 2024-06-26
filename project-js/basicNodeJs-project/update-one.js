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
        updateData();
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });

async function updateData() {
    try {
        const result = await EmployeesModel.updateOne(
            // { empid: 502 }, // Filter criteria
            { empid: 111 }, // Filter criteria
            { $set: { empid: 110 } }, // Update operation
            // { $set: { empid: 108 } }, // Update operation
           
        );
        console.log("Data updated:", result);
    } catch (error) {
        console.error("Error updating data:", error);
    }
    mongoose.disconnect();
}
