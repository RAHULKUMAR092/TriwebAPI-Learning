import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import UserRoute from "./routes/user";
import authRoute from "./routes/auth";
import ProjectError from "./helper/error";
import quizRoute from './routes/quiz';

import examRoute from "./routes/exam";
import ResultRoute from "./routes/result";
import {ReturnResponse} from "./utils/interfaces";

const app = express();
const port = 3000;
const connectionString = process.env.CONNECTION_STRING || "";

// Middleware
app.use(express.json());

// Extend Express Request interface
declare global {
    namespace Express {
        interface Request {
            userId: string;
        }
    }
}

// Define a ReturnResponse interface


// Routes
app.use("/user", UserRoute);
app.use("/auth", authRoute);

// redirect / quiz
app.use("/quiz", quizRoute);

// redirect / quiz
app.use("/exam",examRoute);

app.use("/result",ResultRoute);


// Default route
app.get("/", (req, res) => {
    res.send("hi hello");
});

// Error handling middleware
app.use((err: ProjectError, req: Request, res: Response, next: NextFunction) => {
    let statusCode: number;
    let message: string;

    if (err.statusCode && err.statusCode < 500) {
        statusCode = err.statusCode;
        message = err.message;
    } else {
        statusCode = 500;
        message = "Something went wrong, please try again later";
    }

    const resp: ReturnResponse = {
        status: "error",
        message,
        data: {}
    };

    if (err.data) {
        resp.data = err.data;
    }

    console.error(err.statusCode,err.message);
    res.status(statusCode).json(resp);
});

// Connect to MongoDB using async/await
const connectDB = async () => {
    try {
        await mongoose.connect(connectionString, {
            // Add any necessary options here
        });
        console.log("Connected to MongoDB");

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit process with failure
    }
};

// Call connectDB function
connectDB();
