const Listing = require('./models/listing.js');
const Review = require('./models/listing.js');
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");



// A SchemaValidate Function/Middleware
module.exports.validateListing = (req, res, next) => {
    let {error} =  listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");//error extracting
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}

//Middleware for validate ReviewSchema
module.exports.validateReview = (req, res, next) => {
    let {error} =  reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");//error extracting
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}

//Middleware- User is Logged In or not
module.exports.isLoggedIn = (req, res, next) => {
    //console.log(req.user);<--this tells you are logged in or not
    //console.log(req.path, "..", req.originalUrl);
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be logged in");
        return res.redirect("/login");
    }
    next();
} 


//saveRedirectUrl as global
module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}; 

//Authorizatin Middleware - isOwner or not 
module.exports.isOwner = async(req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id);
    console.log(listing);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error", "You don't have permission"); 
        return res.redirect(`/listings/${id}`);
    }
    next();
}

//Authorizatin Middleware - isReviewAuthor or not 
module.exports.isReviewAuthor = async(req, res, next) => {
    //console.log(req.user);
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error", "You don't have permission"); 
        return res.redirect(`/listings/${id}`);
    }
    next();
} 
