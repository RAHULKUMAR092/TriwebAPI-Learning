import { RequestHandler } from "express";
import Quiz from "../models/quiz";
import ProjectError from "../helper/error";
import { validationResult } from "express-validator";



import {ReturnResponse} from "../utils/interfaces";



const createQuiz:RequestHandler = async (req, res, next) => {
    try {
        const validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            const err = new ProjectError("Validation failed!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }

        const created_by = req.userId;
        const { name, questions_list, answers } = req.body;

        const quiz = new Quiz({ name, questions_list, answers, created_by });
        const result = await quiz.save();
        const resp: ReturnResponse = { status: "success", message: "Quiz created successfully", data: { quizId: result._id } };
        res.status(201).send(resp);
    } catch (error) {
        next(error);
    }
}
const getQuiz:RequestHandler = async (req, res, next) => {

    try {
        const quizId = req.params.quizId;

        const quiz = await Quiz.findById(quizId, { name: 1, questions_list: 1, answers: 1 });
        if (!quiz) {
            const err = new ProjectError("Quiz not found");
            err.statusCode = 404;
            throw err;
        }

        if (req.userId !== quiz.created_by.toString()) {
            const err = new ProjectError("you are not authorized");
            err.statusCode = 403;
            throw err;
        }
        const resp: ReturnResponse = { status: "success", message: "Quiz", data: { quiz } };
        res.status(200).send(resp);


        // res.send(req.params.quizId);
    } catch (error) {
        next(error);
    }
}

const updateQuiz:RequestHandler = async (req, res, next) => {
    try {

        
        const validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            const err = new ProjectError("Validation failed!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }

        const quizId = req.body._id;
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            const err = new ProjectError("Quiz not found");
            err.statusCode = 404;
            throw err;
        }

        if (req.userId !== quiz.created_by.toString()) {
            const err = new ProjectError("you are not authorized");
            err.statusCode = 403;
            throw err;
        }

        if(quiz.is_published){
            const err = new ProjectError("You cannot update, published Quiz!");
            err.statusCode = 404;
            throw err;
        }

        quiz.name = req.body.name;
        quiz.questions_list = req.body.questions_list;
        quiz.answers = req.body.answers;
        quiz.save();
        const resp: ReturnResponse = { status: "success", message: "Quiz updateed successfully", data: {} };
        res.status(200).send(resp);


    } catch (error) {
        next(error);
    }
    res.send(req.body);
}

const deleteQuiz:RequestHandler = async (req, res, next) => {
    try {
        const quizId = req.params.quizId;
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            const err = new ProjectError("Quiz not found");
            err.statusCode = 404;
            throw err;
        }

        if (req.userId !== quiz.created_by.toString()) {
            const err = new ProjectError("you are not authorized");
            err.statusCode = 403;
            throw err;
        }

        if(quiz.is_published){
            const err = new ProjectError("You cannot delete, published Quiz!");
            err.statusCode = 404;
            throw err;
        }

        await Quiz.deleteOne({ _id: quizId });

        const resp: ReturnResponse = { status: "success", message: "quiz delete successfully", data: {} };
        res.status(200).send(resp);

    } catch (error) {
        next(error);

    }
    res.send(req.params.quizId);
}


// patch quiz/public
const publishQuiz:RequestHandler = async (req, res, next) => {
    try {
        const quizId = req.body.quizId;
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            const err = new ProjectError("Quiz not found");
            err.statusCode = 404;
            throw err;
        }

        if (req.userId !== quiz.created_by.toString()) {
            const err = new ProjectError("you are not authorized");
            err.statusCode = 403;
            throw err;
        }
        quiz.is_published = true;

        await quiz.save();
        const resp: ReturnResponse = { status: "success", message: " Quiz Published", data: {} };
        res.status(200).send(resp);

        res.send(quizId);

    } catch (error) {
        next(error);

    }
    res.send(req.body);
}

export { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz }