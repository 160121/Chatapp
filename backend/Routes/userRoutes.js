const express=require('express');
const { model } = require('mongoose');
const router=express.Router();
const {registerUser}=require('../controllers/userController')
router.route('/').post(registerUser)
//router.route('/login')
module.exports=router;