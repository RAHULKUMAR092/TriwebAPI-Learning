"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// const usercontroller = require('../controllers/user');
const user_1 = require("../controllers/user");
const router = express.Router();
router.post('/regiter', user_1.regiterUser);
router.post('/update', user_1.updateUser);
exports.default = router;
