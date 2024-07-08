import express from "express";
import { getUser, updateUser } from "../controllers/user"; // Ensure the correct path to your controller file
import { isAuthenticated } from "../middlewares/isAuth";


const router = express.Router();

// POST request to register a user
// router.post("/", registerUser);


// post /user/login
// router.post("/login", loginUser);

// user should be authenticate
// user should be authorization


// get user/:userId
router.get("/:userId", isAuthenticated, getUser);
// user should be authenticate
// user should be authorization

router.put("/", isAuthenticated, updateUser);

export default router;
