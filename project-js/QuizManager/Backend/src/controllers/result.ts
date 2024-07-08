import Result from "../models/result";
import { RequestHandler } from "express";
import ProjectError from "../helper/error";

import {ReturnResponse} from "../utils/interfaces";
const getResult:RequestHandler = async (req, res, next) => {
    try {
        let result;

        if (req.params.resultId) {
            const resultId = req.params.resultId;
            result = await Result.findById(resultId);

            if (!result) {
                const err = new ProjectError("Report not found");
                err.statusCode = 404;
                throw err;
            }

            if (result.userId.toString() !== req.userId) {
                const err = new ProjectError("You are not allowed");
                err.statusCode = 403;
                throw err;
            }
        } else {
            const err = new ProjectError("Result ID not provided");
            err.statusCode = 400;
            throw err;
        }

        const resp: ReturnResponse = { status: "success", message: "Report!", data: result };
        res.status(200).send(resp);
    } catch (error) {
        next(error);
    }
};

export { getResult };
