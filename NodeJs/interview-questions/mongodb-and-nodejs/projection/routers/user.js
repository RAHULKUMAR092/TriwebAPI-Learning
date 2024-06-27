const { postUser, getUser } = require("../controllers/user");
const express = require("express");

const router = express.Router();

// Get restrict allow - field
router.get("/", getUser);
router.post("/", postUser);

module.exports = router;
