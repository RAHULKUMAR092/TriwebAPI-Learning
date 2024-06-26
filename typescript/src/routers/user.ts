
const express = require ("express");

// const usercontroller = require('../controllers/user');
import {regiterUser,updateUser} from '../controllers/user';

const router = express.Router();


router.post('/regiter',regiterUser);
router.post('/update',updateUser);

export default router; 

