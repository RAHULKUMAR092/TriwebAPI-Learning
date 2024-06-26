var mongoose = require("mongoose");

var EmployeesSchema = new mongoose.Schema({
    empid: Number,
    empname: String,
    salary: Number
});

var EmployeesModel = mongoose.model("employees", EmployeesSchema);

mongoose.connect("mongodb://localhost/company", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
 })
    .then(() => {
        console.log("Connected to MongoDB");
        retrieveData();
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });

async function retrieveData() {
    try {
        const data = await EmployeesModel.find({});
        console.log("Retrieved data:", data);
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
mongoose.disconnect();
}

