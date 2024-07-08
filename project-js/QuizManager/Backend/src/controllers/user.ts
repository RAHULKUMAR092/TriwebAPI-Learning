import { Request, Response, NextFunction } from "express";
import User from "../models/user";

import  ProjectError  from "../helper/error";

// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

import {ReturnResponse} from "../utils/interfaces";



const getUser = async (req: Request, res: Response, next: NextFunction) => {
    let resp: ReturnResponse;
    // console.log(req.userId);
    try {
        const userId = req.params.userId;

        if (req.userId !== req.params.userId) {
            const err = new ProjectError("You are not authorized!");
            err.statusCode = 401;
            // err.data = {hi:"its error"};
            throw err;
        }
        const user = await User.findById(userId, { name: 1, email: 1 });

        if (user) {
            resp = { status: "success", message: "User found", data: { user } };
            res.status(200).json(resp);
        } else {
            resp = { status: "error", message: "User not found", data: {} };
            res.status(404).json(resp);
        }
    } catch (error) {
        // resp = { status: "error", message: "Something went wrong", data: {} };
        // console.error("Error fetching user:", error);
        // res.status(500).json(resp);
        next(error);
    }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    let resp: ReturnResponse;
    try {
        const userId = req.body._id;

        if (req.userId !== userId) {
            return res.status(403).json({ status: "error", message: "You are not authorized!", data: {} });
        }

        //

        if (!userId) {
            resp = { status: "error", message: "User ID is required", data: {} };
            return res.status(400).json(resp);
        }

        const user = await User.findById(userId);

        if (!user) {
            resp = { status: "error", message: "User not found", data: {} };
            return res.status(404).json(resp);
        }

        user.name = req.body.name || user.name;
        await user.save();

        resp = { status: "success", message: "User updated successfully", data: { userId: user._id } };
        res.status(200).json(resp);
    } catch (error) {
        // resp = { status: "error", message: "Something went wrong", data: {} };
        // console.error("Error updating user:", error);
        // res.status(500).json(resp);
        next(error);
    }
};

export { getUser, updateUser, };



