

import express from "express";
const router = express.Router();

import { isAuthenticated } from "../middlewares/isAuth";

import { startExam, submitExam } from "../controllers/exam";

//get /exam/quizId

router.get("/:quizId", isAuthenticated, startExam);


// post /exam

router.post("/", isAuthenticated, submitExam);



export default router;