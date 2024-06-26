// sample file 

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
        updateMultipleData();
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });

async function updateMultipleData() {
    try {
        const updates = [
            { empid: 1, salary: 65000 },
            { empid: 2, salary: 70000 },
            { empid: 3, salary: 75000 }
        ];

        const bulkOps = updates.map(update => {
            return {
                updateOne: {
                    filter: { empid: update.empid },
                    update: { $set: { salary: update.salary } }
                }
            };
        });

        const result = await EmployeesModel.bulkWrite(bulkOps);
        console.log("Multiple data updated:", result);
    } catch (error) {
        console.error("Error updating multiple data:", error);
    }
    mongoose.disconnect();
}
