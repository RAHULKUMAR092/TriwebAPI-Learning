// delete file 

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
        deleteData();
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });

async function deleteData() {
    try {
        const result = await EmployeesModel.deleteMany({ empid: { $in: [110, 112, 113] } }); // Delete documents with empid 1, 2, or 3
        console.log("Data deleted:", result);
    } catch (error) {
        console.error("Error deleting data:", error);
    }
    mongoose.disconnect();
}
