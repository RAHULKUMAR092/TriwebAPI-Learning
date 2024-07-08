import { RequestHandler } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ProjectError from "../helper/error";
import { validationResult } from "express-validator";

import {ReturnResponse} from "../utils/interfaces";




const registerUser:RequestHandler = async (req, res, next) => {
    let resp: ReturnResponse;
    try {
        //validation
        const validatorError = validationResult(req);
        if (!validatorError.isEmpty()) {
            const err = new ProjectError("Validation failed");
            err.statusCode = 422;
            err.data = validatorError.array();

            throw err;
        }

        const { email, name, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ email, name, password: hashedPassword });
        const result = await user.save();

        if (result) {
            resp = { status: "success", message: "Registration done", data: { userId: result._id } };
            res.status(201).json(resp);
        } else {
            resp = { status: "error", message: "No result found", data: {} };
            res.status(400).json(resp);
        }
    } catch (error) {
        // resp = { status: "error", message: "Something went wrong", data: {} };
        // console.error("Error registering user:", error);
        // res.status(500).json(resp);
        next(error);
    }
};

const loginUser:RequestHandler = async (req, res, next) => {
    let resp: ReturnResponse;

    try {
        const { email, password } = req.body;
        // Find user with email
        const user = await User.findOne({ email });

        if (user) {
            // Verify password using bcrypt
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                const token = jwt.sign({ userId: user._id }, "secretmyverycertkey", { expiresIn: "7h" });
                resp = { status: "success", message: "Login successful", data: { userId: user._id, token } };
                res.status(200).json(resp);
            } else {
                resp = { status: "error", message: "Invalid password", data: {} };
                res.status(401).json(resp);
            }
        } else {
            resp = { status: "error", message: "User not found", data: {} };
            res.status(404).json(resp);
        }
    } catch (error) {
        // resp = { status: "error", message: "Something went wrong", data: {} };
        // console.error("Error logging in user:", error);
        // res.status(500).json(resp);
        next(error);
    }
};

const isUserExist =async (email: String) => {
    // return true;
    const user = await User.findOne({ email });
    if(!user){
        return false;
    }
    return true;

}


export { registerUser, loginUser, isUserExist };
