const express = require('express');
const router = express.Router({mergeParams: true});
const Listing = require('../models/listing.js');
const Review = require('../models/review.js');
const WrapAsync = require("../utils/WrapAsync.js");
const {validateReview} = require("../middleware.js");
const {isLoggedIn, isReviewAuthor} = require("../middleware.js");

const  reviewController = require("../controllers/reviews.js");

//Review New Post Route
router.post("/", 
    isLoggedIn, 
    validateReview, 
    WrapAsync(reviewController.createReview)
);

//Delete Reviews Route
router.delete("/:reviewId", 
    isLoggedIn, 
    isReviewAuthor,
    WrapAsync(reviewController.destroyReview)
);


module.exports = router;