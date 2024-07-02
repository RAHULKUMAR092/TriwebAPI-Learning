const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require("./routers/todo");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
// app.use("/",userRouter);
app.use("/",todoRouter);

// Define your routes (post, get, put, delete) here...

// Connect to MongoDB

const uri = "mongodb+srv://Triwebapi092:Triwebapi%40092@mydata.bndhp5o.mongodb.net/todo2024?retryWrites=true&w=majority&appName=Mydata";

mongoose.set("strictQuery",false);
mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(8080, (err) => {
            if (err) {
                console.log(err);
            }
            console.log("Server Started");
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
