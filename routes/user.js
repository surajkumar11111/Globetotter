const express = require('express');
const router = express.Router();
const User =  require("../models/user.js");
const WrapAsync = require("../utils/WrapAsync.js");
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');

const userController = require("../controllers/users.js");

//signup route
router.route("/signup")
.get(userController.renderSignupForm)
.post(WrapAsync(userController.signup))


//LogIn 
router.route("/login")
 .get(userController.renderLoginForm)
 .post(
    saveRedirectUrl, //calling midlwre
    passport.authenticate("local", {failureRedirect: '/login',
    failureFlash: true,
    }), //passport is doing login works
    userController.login
  )

//Logout route
router.get("/logout", userController.logout);

module.exports = router;