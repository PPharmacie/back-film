const router = require('express').Router();
const User = require('../controller/controller.user');

router.post("/login",User.loginUser);
router.post("/register",User.registerUser);

module.exports = router;