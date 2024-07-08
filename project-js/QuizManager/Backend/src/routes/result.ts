
import express from "express";
import { isAuthenticated } from "../middlewares/isAuth";
import { getResult } from "../controllers/result";

const router = express.Router();

// get / report / :resultId
router.get("/:resultId?", isAuthenticated, getResult);


//get

export default router;
