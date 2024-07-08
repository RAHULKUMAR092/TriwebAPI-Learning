import express from "express";
import { registerUser, loginUser, isUserExist } from "../controllers/auth";
import { body } from "express-validator";

const router = express.Router();

// POST /auth/
router.post(
    "/",
    [
        body("name")
            .trim()
            .notEmpty()
            .withMessage("Name is required")
            .isLength({ min: 4 })
            .withMessage("Name must be at least 4 characters long"),
        body('email')
            .trim()
            .isEmail()
            .custom(emailId => {
                return isUserExist(emailId)
                    .then((status) => {
                        if (status) {

                            return Promise.reject("User already exist!");
                        }
                    })
                    .catch((err) => {
                        return Promise.reject(err);
                    })

            })
            .normalizeEmail(),
            body('password')
            .trim()
            .isLength({min:8})
            .withMessage("enter at least 8 character long password"),
            body('confirm_password')
            .trim()
            .custom((value,{req})=>{
                if(value !== req.body.password){
                    return Promise.reject("Password mismatch");
                }
                return true;
            })
    ],
    registerUser
);

// POST /auth/login
router.post("/login", loginUser);

export default router;
