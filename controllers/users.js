const User = require("../models/user");

module.exports.renderSignupForm =(req, res) => {
    //res.send("form");
    res.render("listings/users/signup.ejs");
}

module.exports.signup = async(req, res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        let registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => { //req.login for direct login while signup
            if(err){
                return next(err);
            }
           req.flash("success", "Welcome to Globetotter!");
           res.redirect("/listings");
        })
    }catch(e){
        req.flash("error", e.message); 
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req, res) =>{
    res.render("listings/users/login.ejs");
}

module.exports.login = async(req, res) =>{
    req.flash("success", "Welcome to Globettoter You are logged in!");
    //this implem. is for when redirectUrl exist or not logic(post-login Page)
    let redirectUrl = res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "you are logged out!");
        res.redirect("/listings");
    })
}