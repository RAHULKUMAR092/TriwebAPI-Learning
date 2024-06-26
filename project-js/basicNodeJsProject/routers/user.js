const express = require('express');
const router= express.Router();
const userController= require('../controllers/user');

router.post('/register',userController.register);
router.post('/get',userController.get);
router.post('/update',userController.update);
router.post('/delete',userController.delete);


module.exports=router;