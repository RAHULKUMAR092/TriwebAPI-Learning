
const express = require("express");

// const usercontroller = require('../controllers/user');
const {regiterUser} = require('../controllers/user')

const router = express.Router();


router.post('/regiter',regiterUser);

module.exports = router;

