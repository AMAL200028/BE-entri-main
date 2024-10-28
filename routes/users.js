var express = require('express');
const { doSignup, dologin,getData } = require('../controllers/userController');
var router = express.Router();
const verifyUser = require("../middlewares.js/auth")

router.post('/signup',doSignup)
router.post('/login',dologin)
router.get('/getdata',verifyUser,getData)

module.exports = router;
