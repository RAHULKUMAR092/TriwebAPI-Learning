


import { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz } from "../controllers/quiz";
import { validationResult } from "express-validator";

import express from "express";

import { isAuthenticated } from "../middlewares/isAuth";

import { body } from "express-validator";


const router = express.Router();

// create

// post / quiz/
router.post("/", isAuthenticated, [
    body('name')
        .trim()
        .notEmpty()
        .isLength({ min: 10 })
        .withMessage("Please enter a valid, Name must be at least 10 characters long"),
    body('questions_list')
        .custom(questions_list => {
            if (questions_list === 0) {
                return Promise.reject('Enter atleast 1 Question!');

            }
            return true;
        }),
    body('answer')
        .custom(answer => {
            if (Object.keys(answer).length === 0) {
                return Promise.reject('Answer should not be empty!');

            }

        })

], createQuiz);

// get 

// get /quiz/:id 
router.get("/:quizId", isAuthenticated, getQuiz);

//
// update
// put/quiz

router.put("/", isAuthenticated, [
    body('name')
        .trim()
        .notEmpty()
        .isLength({ min: 10 })
        .withMessage("Please enter a valid, Name must be at least 10 characters long"),
    body('questions_list')
        .custom(questions_list => {
            if (questions_list === 0) {
                return Promise.reject('Enter atleast 1 Question!');

            }
            return true;
        }),
    body('answer')
        .custom(answer => {
            if (Object.keys(answer).length === 0) {
                return Promise.reject('Answer should not be empty!');

            }

        })

], updateQuiz);


// Delete
// delete quiz/:quizId
router.delete("/:quizId", isAuthenticated, deleteQuiz);


// Publish
// Patch
router.patch("/publish", isAuthenticated, publishQuiz);



export default router;