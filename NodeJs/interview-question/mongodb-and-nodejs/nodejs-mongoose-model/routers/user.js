const { postUser } = require("../controllers/user");
const express = require("express");

const router = express.Router();

router.post("/", postUser);

module.exports = router;
